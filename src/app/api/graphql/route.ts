import { createYoga, createSchema } from 'graphql-yoga';

const { handleRequest } = createYoga({
	schema: createSchema({
		typeDefs: `#graphql
            type Query {
                greetings(word: String): String
            }
        `,
		resolvers: {
			Query: {
				greetings: (_, { word }) => `Hello ${word}`,
			},
		},
	}),
	graphqlEndpoint: '/api/graphql',
	fetchAPI: { Response },
});

export { handleRequest as GET, handleRequest as POST };
