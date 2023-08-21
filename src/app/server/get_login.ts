import { gql } from '@apollo/client';

export const GET_LOGIN = gql`
    query GetLogin($login: String!) {
        user(login: $login) {
            login
            name
        }
    }
`;
