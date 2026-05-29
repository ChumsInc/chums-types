export const queryThemes = `
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
