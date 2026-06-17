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

// Primitives that can actually be compared during a sort operation
type SortablePrimitive = string | number | boolean | Date;

// Guard to enforce a maximum recursion depth of 5 (prevents 'too deep' compiler errors)
type DepthGuard = [never, 0, 1, 2, 3, 4, 5];

export type SortablePaths<T, Depth extends number = 5> = Depth extends 0
    ? never
    : T extends object
        ? T extends unknown[] // Ignore standard array fields unless targeting explicit indices
            ? never
            : {
                [K in keyof T & string]: NonNullable<T[K]> extends SortablePrimitive
                    ? K // Found a sortable leaf node
                    : NonNullable<T[K]> extends object
                        ? `${K}.${SortablePaths<NonNullable<T[K]>, DepthGuard[Depth]>}` // Keep digging
                        : never;
            }[keyof T & string]
        : never;
