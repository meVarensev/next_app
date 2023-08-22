export interface Status {
    emoji?: string;
    message?: string;
}

export interface User {
    id: string;
    name?: string;
    login: string;
    status?: Status;
    avatarUrl?: string;
    __typename: 'User';
}

export interface AutocompleteItem extends User {
    value: string;
}

export interface SearchBoxItemProps {
    avatarUrl: string;
    login: string;
    name?: string;
    status?: Status;
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

export interface GetLoginData {
    user: User;
}



