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
	const { data } = useQuery(scroll);
	console.log(data);

	return <MainContainer isScroll={data.isScroll}>{children}</MainContainer>;
}
