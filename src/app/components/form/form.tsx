'use client';

import { SearchBoxItem } from '@/components/form/search-box-item';
import { GET_LOGIN } from '@/graphql/get_login';
import { GET_SEARCH_RESPONSE, type SearchResponse } from '@/graphql/get_search_response';
import { optionsDataUsers } from '@/helpers/options_data_users';
import { useQuery } from '@apollo/client';
import { ActionIcon, Autocomplete, Box, Group, Text, useMantineTheme } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDebouncedValue } from '@mantine/hooks';
import { IconArrowRight, IconBrandGithubFilled, IconSearch } from '@tabler/icons-react';


function Form() {
    const form = useForm({
        initialValues: {
            login: 'mevarensev',
        },
    });
    const [debouncedLoginValue] = useDebouncedValue(form.values.login.trim(), 1000);
    const { loading, error, data } = useQuery<SearchResponse>(GET_SEARCH_RESPONSE, {
        variables: {
            first: 10,
            query: debouncedLoginValue,
            type: 'USER',
        },
        notifyOnNetworkStatusChange: true,
    });

    const getLogin = useQuery(GET_LOGIN, {
        variables: {
            login: form.values.login.trim(),
        },
    });

    const theme = useMantineTheme();
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    if (!data) return null;
    const options = optionsDataUsers(data);
// TODO : in progress
    if (getLogin.data) {
        return <>
            <Text>{getLogin.data?.login}</Text>
            <Text>{getLogin.data?.name}</Text>
        </>;
    }

    return (
        <Box
            sx={() => ({
                padding: theme.spacing.xl,
                borderBottom: `1px solid white`,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                width: '100%',
            })}
            mt='lg'
        >


            <form onSubmit={form.onSubmit((value) => form.setValues(value))} style={{ width: '75%' }}>

                <Group mb='md'>
                    <IconBrandGithubFilled size='1.5rem' stroke={1.5} />
                    <Text>GitHub repositories</Text>
                </Group>

                <Autocomplete
                    data={options}
                    nothingFound='Nothing found'
                    hoverOnSearchChange
                    icon={<IconSearch size='1.1rem' stroke={1.5} />}
                    radius='xl'
                    size='md'
                    itemComponent={SearchBoxItem}

                    rightSection={
                        <ActionIcon size={32} radius='xl' color={theme.primaryColor} variant='light' type='submit'>
                            <IconArrowRight size='1.1rem' stroke={1.5} />
                        </ActionIcon>
                    }
                    placeholder='Search'

                    {...form.getInputProps('login')}
                />

            </form>

        </Box>
    );
}


export { Form };
