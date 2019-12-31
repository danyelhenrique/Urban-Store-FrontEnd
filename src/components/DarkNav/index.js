import React, { useContext } from 'react';
import Link from 'next/link';

import { Context } from '../../context';

import BagModal from '../BagModal';

import { Nav, Bag, ListItems } from './styles';

export default function DarkNav() {
	const [ state, dispatch ] = useContext(Context);

	return (
		<Nav>
			<Link href="/" as="/">
				<a>
					<img src="/nav/logo.png" alt="" />
				</a>
			</Link>

			<ListItems>
				<li>
					<Link href="/" as="/">
						<a>Men's</a>
					</Link>

					<Link href="/" as="/">
						<a>Women's</a>
					</Link>

					<Link href="/" as="/">
						<a>Baby</a>
					</Link>

					<Link href="/" as="/">
						<a>Girls</a>
					</Link>

					<Link href="/" as="/">
						<a>Boys</a>
					</Link>
					<Link href="/" as="/">
						<a>H&M</a>
					</Link>
					<Link href="/" as="/">
						<a>News</a>
					</Link>
				</li>
			</ListItems>
			<Bag>
				<button type="button" onClick={() => dispatch({ type: '@IS_BAG_OPEN' })}>
					<img src="/nav/bag-scroll-nav.png" alt="" />
				</button>
				<Link href="/store/cart" as="/store/cart">
					<a>Shopping Cart</a>
				</Link>
			</Bag>
			{state.isModalOpen && <BagModal />}
		</Nav>
	);
}
