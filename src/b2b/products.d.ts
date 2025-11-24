import {BooleanLike, LayoutAttributes} from "./generic.d.ts";
import {CustomerPriceRecord} from "./customer.d.ts";

export type ProductSellAsVariants = 0;
export type ProductSellAsSelf = 1;
export type ProductSellAsMix = 3;
export type ProductSellAsColors = 4;

export type ProductSellAs = ProductSellAsVariants | ProductSellAsSelf | ProductSellAsMix | ProductSellAsColors;

export interface ProductSEO {
    changefreq: string,
    descriptionMeta: string,
    priority: number,
}


export interface ProductCategory {
    id: number,
    title: string,
    keyword: string,
    pageText: string,
    descriptionMeta: string,
    parentId: number,
    status: boolean | 1 | 0,
    changefreq: string,
    priority: number,
    timestamp?: string,
    children: ProductCategoryChild[],
    css?: string,
    lifestyle?: string | null,
}

export interface GenericProductCategoryChild {
    id: number,
    parentId: number,
    itemType: 'section' | 'category' | 'product' | 'link',
    sectionTitle: string,
    sectionDescription: string,
    title: string,
    description: string,
    urlOverride: string,
    className: string,
    imageUrl: string,
    productsId: number,     // should always be zero?
    categoriesId: number,   // should always be zero?
    priority: number,
    status: BooleanLike;
    layoutAttributes?: LayoutAttributes;
    timestamp: string,
}

export interface CategoryChildSection extends GenericProductCategoryChild {
    itemType: 'section',
    productsId: 0,     // should always be zero?
    categoriesId: 0,   // should always be zero?
}

export interface CategoryChildCategory extends GenericProductCategoryChild {
    itemType: 'category',
    productsId: 0,
    category: ProductCategory,
}

export interface CategoryChildProduct extends GenericProductCategoryChild {
    itemType: 'product',
    categoriesId: 0,
    product: BasicProduct,
}

export interface CategoryChildLink extends GenericProductCategoryChild {
    itemType: 'link',
    categoriesId: 0,
    urlOverride: string;
}

export type ProductCategoryChild =
    CategoryChildSection
    | CategoryChildCategory
    | CategoryChildProduct
    | CategoryChildLink;

export type ProductType = 'R' | 'F' | 'K' | 'D';

export interface ProductVariant {
    id: number,
    parentProductID: number,
    variantProductID: number,
    title: string,
    isDefaultVariant: boolean,
    status: boolean,
    priority: number,
    timestamp?: string,
    product?: Product
}

export interface ProductBase {
    id: number,
    parentProductID?: number,
    variantProductID?: number,
    itemCode: string,
    status: boolean,
    msrp?: string | number | null,
    stdPrice?: string | number | null,
    priceCode?: string | null,
    stdUM?: string | null,
    salesUM?: string | null,
    salesUMFactor?: number | null,
    shipWeight?: number | string | null,
    productType?: ProductType | null,
    QuantityAvailable?: number,
    inactiveItem?: boolean,
    buffer?: number | null,
    season?:ProductSeason|null;
    timestamp?: string | null,
}

export interface BasicProduct extends ProductBase {
    keyword: string,
    name: string,
    metaTitle: string | null,
    description: string,
    details: string,
    image: string,
    taxClassId: number,
    manufacturersId: number,
    materialsId: number,
    sellAs: ProductSellAs,
    upc: string | null,
    defaultColor: string,
    defaultCategoriesId: number,
    defaultCategoryKeyword: string | null,
    defaultParentProductsId: number,
    options?: string | unknown[],
    requireOptions?: string | unknown[],
    canDome: boolean,
    canScreenPrint: boolean,
    availableForSale: boolean,
    dateAvailable: string,
    redirectToParent: boolean,
    parentProductKeyword: string | null,
    additionalData?: ProductAdditionalData,
    product_season_id: number | null,
    season_code: string | null,
    season_description: string | null,
    season_active: boolean | null,
    season_available: boolean,
    season_teaser: string | null,
    preSeasonMessage?: string | null;
    anticipatedPrice?: string | number | null,
    images?: ProductAlternateImage[],
    productStatus?: string | null;
}

export interface SellAsSelfProduct extends BasicProduct {
    sellAs: ProductSellAsSelf;
}

export interface SellAsVariantsProduct extends BasicProduct {
    sellAs: ProductSellAsVariants;
    variants: ProductVariant[];
}

export interface SellAsMixProduct extends BasicProduct {
    sellAs: ProductSellAsMix;
    mix: ProductMixItem;
}

export interface SellAsColorsProduct extends BasicProduct {
    sellAs: ProductSellAsColors;
    items: ProductColorItem[];
}

export type Product = BasicProduct | SellAsSelfProduct | SellAsVariantsProduct | SellAsMixProduct | SellAsColorsProduct;


export interface ProductMixItem extends ProductBase {
    productId: number,
    mixName: string,
    items: ProductMixComponent[];
    productStatus?: string | null;
}

export type ProductMixVariant = ProductMixItem;

export interface ProductSwatchBase {
    id: number;
    color?: ProductColor;
    additionalData?: ProductSwatchAdditionalData;
    itemQuantity?: number;
}

export interface ProductMixComponent extends ProductSwatchBase {
    id: number,
    mixID: number,
    itemCode: string,
    itemQuantity?: number,
    colorsId: number,
    color_code?: string,
    color_name?: string,
    color?: ProductColor,
    additionalData?: ProductAdditionalData
    productStatus?: string | null;
}

export interface ProductColor {
    id: number,
    code: string,
    name: string,
    swatchCode?: string | null,
    active?: boolean | null,
}

export interface ProductColorItemAdditionalData {
    swatch_code?: string | null,
    image_filename?: string | null,
    season_id?: number | null,
    season?: ProductSeason,
    seasonAvailable?: boolean;
    message?: string;
}

export interface ProductSwatchAdditionalData {
    swatch_format?: string;
    swatch_code?: string | null;
    season?: ProductSeason,
    seasonAvailable?: boolean;
}

export interface ProductAdditionalData extends ProductSwatchAdditionalData {
    size?: string;
    subtitle?: string;
    formatted_name?: string;
    image_filename?: string | null;
    season_id?: number | null;
    season?: ProductSeason;
    seasonAvailable?: boolean;
    best_seller?: boolean | null;
    upcycled?: boolean | null;
    heatTransfer?: boolean|null;
    sublimation?: boolean|null;
    rfidBlocking?: boolean|null;
    newColors?: boolean|null;
    isRedirect?: boolean|null;
}

export interface ProductColorItem extends ProductBase, ProductSwatchBase {
    productId: number,
    colorsId: number,
    colorCode: string,
    colorName: string,
    upc?: string | null,
    additionalData?: ProductColorItemAdditionalData,
    color: ProductColor;
    productStatus?: string | null;
    itemQuantity?: number;
    selfStatus?: boolean;
}

export type ProductColorVariant = ProductColorItem;

export interface B2BProductImage {
    image: string;
    altText: string;
}

export interface ProductAlternateImage extends B2BProductImage {
    id: number,
    productId: number,
    priority: number,
    status: boolean | 1 | 0,
    colorCodes?: string|null;
    timestamp?: string,
}

export interface ProductSeason {
    product_season_id: number,
    code: string,
    description: string,
    product_available: boolean,
    product_teaser: string,
    active: boolean,
    properties?: {
        color?: string,
    },
    preSeasonMessage?: string | null;
    timestamp?: string
}

export interface ProductListItem {
    id: number,
    keyword: string,
    name: string,
    itemCode: string,
    status: boolean,
    sellAs: ProductSellAs,
    image: string,
    manufacturersId: number,
    defaultParentProductsId: number,
    parentProductKeyword: string | null;
    defaultCategoriesId: number | null;
    variantsCount: number,
    selfCount: number,
    mixesCount: number,
    colorsCount: number,
    redirectToParent: boolean,
    availableForSale: boolean,
    minPrice?: string | number,
    maxPrice?: string | number,
    salePrice?: string | number,
    product_season_id: number | null,
    season_code: string | null;
    seasonAvailable: boolean;
    isRedirect?: boolean;
}

export interface ProductList {
    [key: string]: ProductListItem,
}

export interface ColorProductUsage {
    productId: number,
    keyword: string,
    name: string,
    itemCode: string,
    status: boolean,
    swatchCode: string | null,
    image: string | null,
}

export interface CartItem {
    itemCode: string;
    quantity: number;
    discountPercent?: number;
    comment?: string;
    priceLevel?: string;
    lineKey?: string;
    promoCode?: string;
}

export interface CartProduct extends CartItem {
    productId: number,
    name: string,
    colorCode?: string;
    colorName?: string;
    image: string;
    msrp?: string | number | null;
    stdPrice?: string | number | null;
    priceCode?: string | null;
    salesUM?: string | null;
    stdUM?: string | null;
    salesUMFactor?: number | null;
    seasonCode?: string | null;
    seasonAvailable?: boolean | null;
    seasonDescription?: string | null;
    seasonTeaser?: string | null;
    preSeasonMessage?: string|null;
    quantityAvailable?: number;
    priceCodeRecord?: CustomerPriceRecord | null;
    price?: string | null;
    season?: ProductSeason|null;
    message?: string;
    requiresCustomization?: boolean;
}

export interface ProductImage {
    filename: string | null;
    itemCode: string | null;
}
