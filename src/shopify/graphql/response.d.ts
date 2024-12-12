import type {PageInfo} from "./page-info.d.ts";


export interface GraphQLResponse<T> {
    errors: ShopifyGraphQLError[]|string;
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

export interface ShopifyGraphQLError {
    message?: string;
    locations?: {
        line: string;
        column: string;
    }[];
    path: string[];
}

export type NextCursorFunction<T> = (response: GraphQLResponse<T>) => PageInfo;
