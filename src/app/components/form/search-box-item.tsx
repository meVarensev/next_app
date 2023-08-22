import { type SearchBoxItemProps } from '@/graphql/data-types';
import { Avatar, Box, Flex, Text } from '@mantine/core';
import { forwardRef } from 'react';


export const SearchBoxItem = forwardRef<HTMLDivElement, SearchBoxItemProps>(
    ({ avatarUrl, login, name, status, ...props }, ref) => (
        <Flex ref={ref} {...props} gap='sm'>
            <Avatar src={avatarUrl} />
            <Box>
                <Text>{login}</Text>
                {name && (
                    <Text color='dimmed' size='xs'>
                        {name} {status && <Box>{status.message}</Box>}
                    </Text>
                )}
            </Box>
        </Flex>
    )
);
