'use client';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { memo } from 'react';

const client = new ApolloClient({
	uri: 'http://localhost:3000/api/graphql',
	cache: new InMemoryCache({}),
});

const ApolloProviderContext = memo(function ApolloContext({
	children,
}: {
	children: React.ReactNode;
}) {
	return <ApolloProvider client={client}>{children}</ApolloProvider>;
});

export default ApolloProviderContext;
