import type {PageInfo} from "./page-info.d.ts";


export interface GraphQLResponse<T> {
    errors: ShopifyError|string;
    data: T;
    extensions?: {
        cost?: {
            requestedQueryCost: number;
            actualQueryCost: number;
            throttleStatus?: {
                currentlyAvailable?: number;
            }
        }
    }
}

export interface ShopifyError {
    networkStatusCode: number;
    message?: string;
    graphQLErrors?: ShopifyGraphQLError;
}

export interface ShopifyGraphQLError {
    message?: string;
    locations?: {
        line: string;
        column: string;
    }[];
    path: string[];
}

export type NextCursorFunction<T> = (response: GraphQLResponse<T>) => PageInfo;
