import type {Count, PageInfo} from "./generics.d.ts";


export interface CollectionNode {
    id: string;
    handle: string;
    title: string;
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
    title: string;
    updatedAt: string;
    productsCount: number;
    publicationsCount: number
}
