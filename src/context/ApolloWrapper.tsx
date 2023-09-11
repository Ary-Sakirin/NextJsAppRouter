"use client"

import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { PropsWithChildren } from 'react';

export const ApolloWrapper = ({children}: PropsWithChildren) => {
    const client = new ApolloClient({
        uri: process.env.NEXT_PUBLIC_API_URL,
        cache: new InMemoryCache(),
      });

    return (
        <ApolloProvider client={client}>
        {children}
      </ApolloProvider>
    )
}

export default ApolloWrapper