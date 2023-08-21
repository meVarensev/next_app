import { gql } from '@apollo/client';

interface Status {
    emoji: string;
    message: string;
}

export interface User {
    id: string;
    name: string;
    login: string;
    status: Status;
    avatarUrl: string;
    __typename: "User"
}

interface Node {
    node: User;
}

interface Edge {
    edges: Node[];
}

export interface SearchResponse {
    search: Edge;
}

export const GET_SEARCH_RESPONSE = gql`
    query Search(
        $after: String
        $before: String
        $first: Int
        $last: Int
        $query: String!
        $type: SearchType!
    ) {
        search(after: $after, before: $before, first: $first, last: $last, query: $query, type: $type) {
            edges {
                node {
                    ... on User {
                        id
                        name
                        login
                        status {
                            emoji
                            message
                        }
                        avatarUrl(size: 100)
                    }
                }
            }
        }
    }
`;
