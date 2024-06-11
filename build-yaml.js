import {getOpenApiWriter, getTypeScriptReader, makeConverter,} from 'typeconv'
import pkg from './package.json' with {type: 'json'};
import path from 'node:path';
import {readdir, readFile, stat, writeFile} from 'node:fs/promises';


const reader = getTypeScriptReader({});
const writer = getOpenApiWriter({format: 'yaml', 'title': 'Chums Types', schemaVersion: '3.0.3', version: pkg.version});
const {convert} = makeConverter(reader, writer);

const srcPath = path.resolve(process.cwd(), './src');
const outputPath = path.resolve(process.cwd(), './yaml');

async function getFiles(dir) {
    const _dirs = await readdir(dir);
    const files = await Promise.all(_dirs.map(async (_dir) => {
        const res = path.resolve(dir, _dir);
        return (await stat(res)).isDirectory() ? getFiles(res) : res;
    }))
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


await readFiles(path.resolve(process.cwd(), './src'));

