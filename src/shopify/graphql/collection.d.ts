import {Count} from "./generics.js";
import type {PageInfo} from "./page-info.js";

export interface CollectionNode {
    id: string;
    handle: string;
    updatedAt: string;
    legacyResourceId: string;
    productsCount: Count;
    resourcePublicationsCount: Count;
}

export interface CollectionEdge {
    node: CollectionNode;
}

export interface PagedCollectionResponse {
    collections: {
        edges: CollectionEdge[];
        pageInfo: PageInfo;
    }
}

export interface Collection {
    gid: string;
    id: string;
    handle: string;
    updatedAt: string;
    productsCount: number;
    publicationsCount: number
}
