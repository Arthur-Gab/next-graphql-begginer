'use client';

import { gql, useQuery } from '@apollo/client';

const GREETINGS = gql`
	query ($word: String) {
		greetings(word: $word)
	}
`;

const Greetings = () => {
	const { data, loading, error } = useQuery(GREETINGS, {
		variables: {
			word: 'from, GraphQL Task API',
		},
	});

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error : {error.message}</p>;

	return <h1>{data.greetings}</h1>;
};
export default Greetings;

/**
 * Without ApolloClient - Only with fetch API
 *
 * const greetings = async () => {
 * 	const res = await fetch('http://localhost:3000/api/graphql, {
 *		method: 'POST',
 *		body: JSON.stringify({
 *			query: `#graphql
 *				query ($word: String) {
 *					greetings(word: $word)
 *				}
 *			`,
 *			variables: {
 *				word: 'from, GraphQL Task API',
 *			}
 *		})
 * 	})
 *
 *	const {data, errors} = await res.jsont()
 *
 *	return {
 *		data,
 *		errors
 *	}
 * }
 */
