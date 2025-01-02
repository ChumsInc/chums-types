import type {PageInfo} from "./page-info.js";
import {ImageEdge} from "./image.js";
import {ProductVariant, ProductVariantsConnection} from "./variant.js";
import {Edge} from "./generics.js";


export interface ProductEdge<T> {
    node: T;
}

export interface PagedProductResponse<T> {
    products: {
        edges: Edge<T>[];
        pageInfo: PageInfo;
    }
}

export interface ProductStatus {
    id: string;
    handle: string;
    updatedAt: string;
}

export type ProductStatusResponse = PagedProductResponse<ProductStatus>;

export interface ProductNode {
    id: string;
    legacyResourceId: string;
    title: string;
    handle: string;
    createdAt: string;
    updatedAt: string;
    status: string;
    hasOnlyDefaultVariant: boolean;
    collections: ProductCollectionsConnection;
    variants: ProductVariantsConnection;
}

export interface ProductCollectionsConnection {
    edges: ProductCollectionEdge[];
}

export interface ProductCollectionEdge {
    node: ProductCollectionNode;
}

export interface ProductCollectionNode {
    handle: string;
}

export type ProductResponse = PagedProductResponse<ProductNode>;

export interface ProductImageInfo {
    id: string;
    featuredImage: {
        id: string;
    }
    images: {
        edges: ImageEdge[];
    }
}

export type ProductImagesResponse = PagedProductResponse<ProductImageInfo>;

export interface Product extends Omit<ProductNode, 'collections'|'variants'> {
    collections: string[];
    variants: ProductVariant[]
}
