/* eslint-disable @typescript-eslint/no-unsafe-function-type */

// Primitives that can actually be compared during a sort operation
type TerminalLeaves = string | number | boolean | Date | Function | unknown[];

// Guard to enforce a maximum recursion depth of 5 (prevents 'too deep' compiler errors)
type DepthGuard = [never, 0, 1, 2, 3, 4, 5];

export type NestedPaths<T = unknown, Depth extends number = 5> = Depth extends 0
    ? never
    : T extends object
        ? {
            [K in keyof T & string]: NonNullable<T[K]> extends TerminalLeaves
                ? K // 1. Terminal type (primitive or array) -> return key
                : NonNullable<T[K]> extends object
                    ? K | `${K}.${NestedPaths<NonNullable<T[K]>, DepthGuard[Depth]>}` // 2. Intermediate object -> return key OR recurse
                    : never;
        }[keyof T & string]
        : never;

export type SortablePaths<T = unknown, Depth extends number = 5> = NestedPaths<T, Depth>;
