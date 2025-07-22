export interface SortProps<T = unknown> {
    field: keyof T;
    ascending: boolean;
}

export type SortFunction<T = unknown> = (a:T, b:T) => number;
export type ObjectSortFunction<T = unknown> = (sort:SortProps<T>) => SortFunction<T>;
