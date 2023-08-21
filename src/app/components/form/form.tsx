'use client';

import { useQuery } from '@apollo/client';
import { ActionIcon, Autocomplete, Box, Group, Text, useMantineTheme } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconArrowRight, IconBrandGithubFilled, IconSearch } from '@tabler/icons-react';
import { FC } from 'react';
import { GET_LOGIN } from '../../server/get_login';

interface FormProps {

}

interface ViewerData {
    user: {
        login: string;
        name: string;
    };
}


const Form: FC<FormProps> = () => {
        const form = useForm({
            initialValues: {
                login: 'meVarensev',
            },

        });
        const { loading, error, data } = useQuery<ViewerData>(GET_LOGIN, {
            variables: { login: form.values.login },

        });
        
        const theme = useMantineTheme();

        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error : {error.message}</p>;


        if (!data?.user) return null;
        const { login, name } = data?.user;

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
                <Text>{login}</Text>
                <Text>{name}</Text>

                <form onSubmit={form.onSubmit((value) => form.setValues(value))} style={{ width: '75%' }}>

                    <Group mb='md'>
                        <IconBrandGithubFilled size='1.5rem' stroke={1.5} />
                        <Text>GitHub repositories</Text>
                    </Group>

                    <Autocomplete
                        data={['React', 'Angular', 'Svelte', 'Vue', 'Riot', 'Next.js', 'Blitz.js']}
                        nothingFound='Nothing found'
                        hoverOnSearchChange
                        icon={<IconSearch size='1.1rem' stroke={1.5} />}
                        radius='xl'
                        size='md'


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
;


export { Form };
