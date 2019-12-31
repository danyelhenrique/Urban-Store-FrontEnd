import React, { useContext } from 'react';
import { Context } from '../../context';

import { MainContainer } from './styles';

export default function Main({ children }) {
	const [ state ] = useContext(Context);

	return <MainContainer isScroll={state.isScroll}>{children}</MainContainer>;
}
