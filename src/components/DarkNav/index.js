import React, { useContext } from 'react';
import { Context } from '../../context';

import BagModal from '../BagModal';

import { Nav, Bag, ListItems } from './styles';

export default function DarkNav() {
	const [ state, dispatch ] = useContext(Context);

	return (
		<Nav>
			<a href="/#">
				<img src="/nav/logo.png" alt="" />
			</a>
			<ListItems>
				<li>
					<a href="/">Men's</a>
					<a href="/">Women's</a>
					<a href="/">Baby</a>
					<a href="/">Girls</a>
					<a href="/">Boys</a>
					<a href="/">H&M</a>
					<a href="/">News</a>
				</li>
			</ListItems>
			<Bag>
				<button type="button" onClick={() => dispatch({ type: '@IS_BAG_OPEN' })}>
					<img src="/nav/bag-scroll-nav.png" alt="" />
				</button>
			</Bag>
			{state.isModalOpen && <BagModal />}
		</Nav>
	);
}
