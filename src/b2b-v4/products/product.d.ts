import type { ImageBase } from "../ui/images.js";

export interface Product {
    id: number;
    name: string;
    keyword: string;
    active: boolean;
    baseSKU: string;
    baseUPC: string;
    attributes: ProductAttributes|null;
    variants: ProductVariant[];
    defaultItemCode?: string;
    images: ProductItemImage[];
    description: string;
    features: string;
    defaultCategoryId: number;
    defaultItemCode: string;
}

export interface ProductSageItem {
    itemCode: string;
    warehouseCode: string;
    standardUM: string;
    salesUM: string;
    salesUMConvFactor: number;
    suggestedRetailPrice: number|string|null;
    standardPrice: number|string|null;
    priceCode: string|null;
    price: number|string|null;
    quantityAvailable: number;
    itemUPC: string|null;
    status: string|null;
}

export interface ProductVariant {
    id: number;
    active: boolean;
    name: string;
    itemCode: string;
    sageItem: ProductSageItem|null;
    itemType: 'item'|'mix'|'kit';
    attributes: ProductAttributes|null;
    images: ProductItemImage[];
    components?: ProductMixComponent[];
}

export interface ProductAttributes {
    new?: boolean;
    season?: string;
    preSeason?: boolean;
    message?: string;
    bestSeller?: boolean;
    screenPrint?: boolean;
    dome?: boolean;
    upcycled?: boolean;
    heatTransfer?: boolean;
    sublimation?: boolean;
    rfidBlocking?: boolean;
    colorCode?: string;
    swatchCode?: string;
    formattedName?: string;
    sizes?: string[];
    subtitle?: string;
    lifestyleImage?: ImageBase;
    salesDisabled?: boolean;
    anticipatedPrice?: string|number|null;
    requiresCustomization?: boolean;
}

export interface ProductImage extends ImageBase {
    id: number;
    productId: number;
    itemCode: string;
    priority: number;
    preferredImage: boolean;
}

export interface ProductItemImage extends ProductImage {
    itemCode: string;
}

export interface ProductMixComponent {
    itemCode: string;
    mixQuantity: number;
    attributes: Pick<ProductAttributes, 'colorCode'|'swatchCode'>
}
