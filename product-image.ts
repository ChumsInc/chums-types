
export interface ImageSize {
    width: number,
    height: number,
    size: number,
}
export interface ImageSizeList {
    [key:string]: ImageSize,
}
export interface ColorSpaceList {
    [key:string]: string,
}
export interface ImageFormatList {
    [key:string]: string,
}

export interface ProductImage {
    filename: string,
    pathnames: string[],
    sizes: ImageSizeList,
    color_space?: ColorSpaceList,
    img_format?: ImageFormatList,
    tags: string[],
    notes: string,
    item_code?: string,
    timestamp:string,
    ItemCode?: string|null,
    ItemCodeDesc?: string|null,
    InactiveItem?:string|null,
    ProductType?: string|null,
    ProductLine?: string|null,
    Category1?:string|null,
    Category?:string|null,
    ItemCollection?: string|null,
    BaseSKU?:string|null,
    item_codes?: string[],
    preferred_image?: boolean,
}

export interface ProductAltItem {
    id: number,
    filename: string,
    item_code: string,
    itemCode: string,
    active: boolean,
    ItemCodeDesc: string
    ProductType: string,
    InactiveItem: string
}
