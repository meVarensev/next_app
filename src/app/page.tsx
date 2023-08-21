'use client';

import { Form } from '@/components/form/form';
import { ApolloProvider } from '@apollo/client';
import { Container } from '@mantine/core';
import { client } from './server/server';


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
