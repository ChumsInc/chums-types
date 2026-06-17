// Helper to filter out types we don't want to expand (like arrays, functions, dates, etc.)
type FilterLeaves<T> = T extends object
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    ? T extends Date | Function | unknown[]
        ? never
        : T
    : never;

// Recursively generates dot-separated nested paths
export type NestedPaths<T, K extends keyof T = keyof T> = K extends string
    ? FilterLeaves<T[K]> extends never
        ? K
        : K | `${K}.${NestedPaths<FilterLeaves<T[K]>>}`
    : never;
