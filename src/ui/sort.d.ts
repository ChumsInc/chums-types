import {type NestedPaths} from '../nested-paths.d.ts'

export interface SortProps<T = unknown> {
    field: keyof T;
    ascending: boolean;
}

export interface NestedSortProps<T = unknown> extends SortProps<T> {
    field: NestedPaths<T>;
}
export type SortFunction<T = unknown> = (a: T, b: T) => number;
export type ObjectSortFunction<T = unknown> = (sort: NestedSortProps<T>) => SortFunction<T>;
export type SortFactory<T = unknown> = (sort: NestedSortProps<T>) => SortFunction<T>;
