export interface VersionState {
    versionNo: string|null,
    loading: boolean,
    changed: boolean,
    ignored: string|null,
    lastChecked: number,
}
