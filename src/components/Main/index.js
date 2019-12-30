import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { MainContainer } from './styles';

const scroll = gql`
	{
		isScroll @client
	}
`;

export default function Main({ children }) {
	const { data, loading } = useQuery(scroll);

	if (loading) return <h1>Main Loading</h1>;

	return <MainContainer isScroll={data.isScroll}>{children}</MainContainer>;
}
