import { type AutocompleteItem, type SearchResponse, type User } from '@/graphql/data-types';

const createAutocompleteItems = (data: User[]): AutocompleteItem[] => data.map(user => ({
        ...user,
        value: user.login,
    }));

export const optionsDataUsers = (data: SearchResponse ): AutocompleteItem[] => {
    const users = data?.search.edges?.map(({ node }) => node)?.filter(Boolean) ?? [];
    const filteredUsers = users.filter(user => user.__typename === 'User' && !!user.login);
    return createAutocompleteItems(filteredUsers);
};
