import type { Metadata } from 'next';
import { inter } from '@/ui/fonts';
import './globals.css';

import clsx from 'clsx';

export const metadata: Metadata = {
	title: 'Graphql Tasks',
	description: 'Generated by create next app and GraphQL Yoga',
	authors: {
		name: 'Arthur Gabriel Fernandes de Oliveira',
		url: 'https://www.linkedin.com/in/art2354/',
	},
};

import ApolloProviderContext from '@/components/ApolloProvider';

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body className={clsx(inter.className, 'h-screen antialiased')}>
				<ApolloProviderContext>{children}</ApolloProviderContext>
			</body>
		</html>
	);
}
