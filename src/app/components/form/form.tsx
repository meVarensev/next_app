'use client';

import { ActionIcon, Autocomplete, Box, Flex, Text, useMantineTheme } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconArrowRight, IconBrandGithubFilled, IconSearch } from '@tabler/icons-react';
import { FC } from 'react';


interface FormProps {

}

const Form: FC<FormProps> = () => {
        const form = useForm({
            initialValues: {
                login: '',
            },

        });

        const theme = useMantineTheme();

        return (
            <Box
                sx={() => ({
                    padding: theme.spacing.xl,

                    borderBottom: `1px solid white`,
                })}
                mt='lg'
            >
                <form onSubmit={form.onSubmit((values) => console.log(values))}>
                    <Flex

                        gap='md'
                        justify='center'
                        align='center'
                        direction='row'
                        wrap='nowrap'

                    >
                        <IconBrandGithubFilled size='1.5rem' stroke={1.5} />

                        <Text>GitHub repositories</Text>

                        <Autocomplete
                            data={['React', 'Angular', 'Svelte', 'Vue', 'Riot', 'Next.js', 'Blitz.js']}
                            nothingFound='Nothing found'
                            hoverOnSearchChange
                            icon={<IconSearch size='1.1rem' stroke={1.5} />}
                            radius='xl'
                            size='md'

                            sx={() => ({
                                width: '75%',
                            })}
                            rightSection={
                                <ActionIcon size={32} radius='xl' color={theme.primaryColor} variant='light' type='submit'>
                                    <IconArrowRight size='1.1rem' stroke={1.5} />
                                </ActionIcon>
                            }
                            placeholder='Search'

                            {...form.getInputProps('login')}
                        />
                    </Flex>
                </form>
            </Box>
        );
    }
;


export { Form };
