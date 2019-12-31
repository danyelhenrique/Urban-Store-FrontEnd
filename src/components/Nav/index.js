import React, { useEffect, useContext } from 'react';
import { Context } from '../../context';

import { useApolloClient } from '@apollo/react-hooks';
import LightNav from '../LightNav';
import DarkNav from '../DarkNav';

import { NavContainer } from './styles';

export default function Nav() {
	const [ state, dispatch ] = useContext(Context);
	const x = state && state.isScroll ? state.isScroll : state;

	const client = useApolloClient();

	useEffect(() => {
		LocalHistory();
	}, []);

	function LocalHistory() {
		const items = localStorage.getItem('@-apollo-client-get-products@');
		if (items) {
			client.writeData({ data: { items } });
		}
	}

	useEffect(
		() => {
			window.onscroll = function() {
				scrollFunction();
			};
			// return window.onscroll  = null
		},
		[ x ]
	);

	function scrollFunction() {
		if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
			dispatch({ type: '@IS_ISCROLL', payload: true });
			client.writeData({ data: { isScroll: true } });
		} else {
			dispatch({ type: '@IS_ISCROLL', payload: false });

			client.writeData({ data: { isScroll: false } });
		}
	}

	return <NavContainer scroll={state.isScroll}>{!state.isScroll ? <LightNav /> : <DarkNav />}</NavContainer>;
}
