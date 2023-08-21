'use client';

import { gql, useQuery } from '@apollo/client';
import { FC } from 'react';

interface FormProps {

}
const GET_LOCATIONS = gql`
  query GetLocations {
    viewer { 
    login
  }
  }
`;

const Form: FC<FormProps> = () => {
    const { loading, error, data } = useQuery(GET_LOCATIONS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;

    console.log(data)

        // const form = useForm({
        //     initialValues: {
        //         login: '',
        //     },
        //
        // });
        //
        // const theme = useMantineTheme();
        //
        // return (
        //     <Box
        //         sx={() => ({
        //             padding: theme.spacing.xl,
        //             borderBottom: `1px solid white`,
        //             display: 'flex',
        //             justifyContent: 'center',
        //             alignItems: 'center',
        //             textAlign: 'center',
        //             width: '100%',
        //         })}
        //         mt='lg'
        //     >
        //         <form onSubmit={form.onSubmit((values) => console.log(values))} style={{ width: '75%' }}>
        //
        //             <Group mb='md'>
        //                 <IconBrandGithubFilled size='1.5rem' stroke={1.5} />
        //                 <Text>GitHub repositories</Text>
        //             </Group>
        //
        //             <Autocomplete
        //                 data={['React', 'Angular', 'Svelte', 'Vue', 'Riot', 'Next.js', 'Blitz.js']}
        //                 nothingFound='Nothing found'
        //                 hoverOnSearchChange
        //                 icon={<IconSearch size='1.1rem' stroke={1.5} />}
        //                 radius='xl'
        //                 size='md'
        //
        //
        //                 rightSection={
        //                     <ActionIcon size={32} radius='xl' color={theme.primaryColor} variant='light' type='submit'>
        //                         <IconArrowRight size='1.1rem' stroke={1.5} />
        //                     </ActionIcon>
        //                 }
        //                 placeholder='Search'
        //
        //                 {...form.getInputProps('login')}
        //             />
        //
        //         </form>
        //     </Box>
        // );
    }
;


export { Form };
