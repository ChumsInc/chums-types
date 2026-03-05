/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import type * as AdminTypes from './admin.types.d.ts';

export type GetThemesQueryVariables = AdminTypes.Exact<{ [key: string]: never; }>;


export type GetThemesQuery = { themes?: AdminTypes.Maybe<{ edges: Array<{ node: Pick<AdminTypes.OnlineStoreTheme, 'id' | 'name' | 'role' | 'createdAt' | 'updatedAt'> }> }> };

interface GeneratedQueryTypes {
  "\n#graphql\nquery GetThemes {\n    themes(first:50) {\n        edges {\n            node {\n                id\n                name\n                role\n                createdAt\n                updatedAt\n            }\n        }\n    }\n}": {return: GetThemesQuery, variables: GetThemesQueryVariables},
}

interface GeneratedMutationTypes {
}
declare module '@shopify/admin-api-client' {
  type InputMaybe<T> = AdminTypes.InputMaybe<T>;
  interface AdminQueries extends GeneratedQueryTypes {}
  interface AdminMutations extends GeneratedMutationTypes {}
}
