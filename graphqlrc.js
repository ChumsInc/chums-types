import { shopifyApiProject, ApiType } from '@shopify/api-codegen-preset';

export default {
    // For syntax highlighting / auto-complete when writing operations
    schema: 'https://shopify.dev/admin-graphql-direct-proxy/2023-10',
    documents: ['./shopify-dev-query/**/*.ts'],
    projects: {
        // To produce variable / return types for Admin API operations
        default: shopifyApiProject({
            apiType: ApiType.Admin,
            apiVersion: '2026-01',
            // documents: ['./src/**/*.ts'],
            outputDir: './src/shopify-graphql',
        }),
    },
};
