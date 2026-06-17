import {type NestedPaths} from '../nested-paths.d.ts'

export interface SortProps<T = unknown> {
    field: NestedPaths<T>;
    ascending: boolean;
}

export type SortFunction<T = unknown> = (a: T, b: T) => number;
export type ObjectSortFunction<T = unknown> = (sort: SortProps<T>) => SortFunction<T>;
export type SortFactory<T = unknown> = (sort: SortProps<T>) => SortFunction<T>;
