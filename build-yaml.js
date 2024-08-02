import {getOpenApiWriter, getTypeScriptReader, makeConverter,} from 'typeconv'
import path from 'node:path';
import {readdir, readFile, stat, writeFile, mkdir} from 'node:fs/promises';

const options = {
    version: 'n/a',
}

const reader = getTypeScriptReader({});
const writer = getOpenApiWriter({format: 'yaml', 'title': 'Chums Types', schemaVersion: '3.0.3', version: options.version});
const {convert} = makeConverter(reader, writer);

const srcPath = path.resolve(process.cwd(), './src');
const outputPath = path.resolve(process.cwd(), './yaml');

async function loadPackageVersion(){
    try {
        const pkg = await readFile(path.resolve(process.cwd(), 'package.json'));
        const json = JSON.parse(pkg.toString());
        options.version = json?.version ?? 'N/A';
    } catch(err) {
        if (err instanceof Error) {
            console.debug("loadPackageVersion()", err.message);
            return Promise.reject(err);
        }
        console.debug("loadPackageVersion()", err);
        return Promise.reject(new Error('Error in loadPackageVersion()'));
    }
}

async function mkDirIfNotExists(path) {
    try {
        const yamlPath = path.replace(srcPath, outputPath);
        console.log('mkDirIfNotExists', yamlPath);
        try {
            const dir = await stat(yamlPath);
            if (dir.isDirectory()) {
                return;
            }
        } catch(err) {}
        await mkdir(yamlPath);
    } catch(err) {
        if (err instanceof Error) {
            console.debug("mkDirIfNotExists()", err.message);
            return Promise.reject(err);
        }
        console.debug("mkDirIfNotExists()", err);
        return Promise.reject(new Error('Error in mkDirIfNotExists()'));
    }
}

async function getFiles(dir) {
    const _dirs = await readdir(dir);
    const files = [];

    for await (const _dir of _dirs) {
        const res = path.resolve(dir, _dir);
        const _stat = await stat(res);
        if (_stat.isDirectory()) {
            await mkDirIfNotExists(res);
            const children = await getFiles(res);
            files.push(...children);
        } else {
            files.push(res);
        }
    }
    // const files = await Promise.all(_dirs.map(async (_dir) => {
    //     const res = path.resolve(dir, _dir);
    //     const _stat = await
    //     return (await stat(res)).isDirectory() ? getFiles(res) : res;
    // }))
    return files.reduce((a, f) => a.concat(f), []);
}

async function readFiles(src) {
    console.log('readFiles(path)', src);
    const files = await getFiles(src);
    for await (const file of files) {
        const content = await readFile(file);
        const yaml = await convert({data: content.toString()});
        await writeFile(file.replace(srcPath, outputPath).replace(/.d.ts$/, '.yaml'), yaml.data);
        if (yaml.in.notConvertedTypes.length) {
            console.log('notConvertedTypes', file, yaml.in.notConvertedTypes);
        }
    }
}

await loadPackageVersion();
console.log(options)
await readFiles(srcPath);

