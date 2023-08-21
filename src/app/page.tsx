'use client';

import { Form } from '@/components/form/form';
import { client } from '@/graphql/server';
import { ApolloProvider } from '@apollo/client';
import { Container } from '@mantine/core';


function Home() {

    return (
        <ApolloProvider client={client}>
            <main>
                <Container size='md'>
                    <Form />
                </Container>
            </main>
        </ApolloProvider>
    );
}

export default Home;
