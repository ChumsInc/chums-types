export type ImageSizePath = '80'|'125'|'250'|'400'|'800'|'2048'|'originals';

export interface ImageSize {
    width: number,
    height: number,
    size: number,
}

export interface BaseImage {
    filename: string;
    path: string;
    width: number;
    height: number;
    size: number;
}


export type ImageSizeList = {
    [key in ImageSizePath]?: ImageSize;
};
export type ColorSpaceList = {
    [key in ImageSizePath]?: string;
}
export type ImageFormatList = {
    [key in ImageSizePath]?: string;
}


export interface ProductImage {
    filename: string;
    pathnames: ImageSizePath[];
    sizes: ImageSizeList;
    color_space?: ColorSpaceList;
    img_format?: ImageFormatList;
    tags: string[];
    notes: string;
    item_code?: string;
    timestamp:string;
    ItemCode?: string|null;
    ItemCodeDesc?: string|null;
    InactiveItem?:string|null;
    ProductType?: string|null;
    ProductLine?: string|null;
    Category1?:string|null;
    Category?:string|null;
    ItemCollection?: string|null;
    BaseSKU?:string|null;
    item_codes?: ProductAltItem[];
    preferred_image?: boolean;
    active: boolean;
}

export interface ProductAltItemKey {
    id: number;
    filename: string;
    item_code: string;
}
export interface ProductAltItem extends ProductAltItemKey {
    id: number;
    filename: string;
    item_code: string;
    active?: boolean;
    ItemCodeDesc?: string;
    ProductType?: string;
    InactiveItem?: string;
}

export interface GenericImage extends ImageSize {
    path: string
    filename: string;
}


export interface ItemImageRecord {
    ItemCode: string,
    filename?: string,
    pathnames?: string[],
    sizes?: ImageSizeList,
    color_space?: ColorSpaceList,
    img_format?: ImageFormatList,
}

export interface ItemImage {
    ItemCode: string,
    filename: string,
}
