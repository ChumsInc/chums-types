"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryThemes = void 0;
exports.queryThemes = `
#graphql
query GetThemes {
    themes(first:50) {
        edges {
            node {
                id
                name
                role
                createdAt
                updatedAt
            }
        }
    }
}`;
