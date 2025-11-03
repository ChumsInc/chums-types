//@todo: Convert all BooleanLike members to boolean, requires updating the API
export type BooleanLike = boolean | 1 | 0;
export type YesNo = 'Y'|'N';

export interface B2BDebugError extends Error {
    debug?: string,
}

export interface Editable {
    changed?: boolean;
}

export type ActionStatus = 'idle'|'loading'|'saving'|'deleting';


export interface SortProps<T = unknown> {
    field: keyof T,
    ascending: boolean,
}

export interface FieldValue<T = unknown> {
    field: keyof T,
    value: T;
}

export interface Appendable {
    newLine?: boolean;
}

export interface Selectable {
    selected?: boolean;
}

export interface WhereUsed {
    id: number;
    keyword: string;
    active: boolean;
}

export type LayoutWidth = 'xs'|'sm'|'md'|'lg'|'xl';
export type LayoutWidths = {
    [key in LayoutWidth]?: number|string|null;
};
export interface LayoutAttributes {
    widths?:LayoutWidths;
    className?: string;
}
