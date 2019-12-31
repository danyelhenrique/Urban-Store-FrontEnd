import React, { useContext } from 'react';

import Link from 'next/link';

import { NavBarContext } from '../../context/Navbar';

import BagModal from '../BagModal';

import { Nav, UserArea, Button, Bag, List, Ul } from './styles';

export default function LightNav() {
	const [ state, dispatch ] = useContext(NavBarContext);

	return (
		<Nav>
			<div>
				<div>
					<img src="/logo.png" alt="logo" />
				</div>
				<UserArea>
					<a href="/#">
						<img src="/nav/profile.png" alt="" />
						<span>Signin</span>
					</a>
					<a href="/#">
						<img src="/nav/favorites.png" alt="" />
						<img src="/nav/bag-scroll-nav.png" alt="" />
						<span>Favorites</span>
					</a>
					<Bag>
						<Button onClick={() => dispatch({ type: '@IS_BAG_OPEN' })}>
							<img src="/nav/bag.png" alt="" />
						</Button>
						<Link href="/store/cart" as="/store/cart">
							<a>Shopping Cart</a>
						</Link>
						{state.isModalOpen && <BagModal />}
					</Bag>
				</UserArea>
			</div>
			<List>
				<span>Clothes for all types of styles</span>
				<Ul>
					<li>
						<Link href="/store">
							<a>Men's</a>
						</Link>
						<Link href="/store">
							<a>Women's</a>
						</Link>
						<Link href="/store">
							<a>Baby</a>
						</Link>
						<Link href="/store">
							<a>Girls</a>
						</Link>
						<Link href="/store">
							<a>Boys</a>
						</Link>
						<Link href="/store">
							<a>H&M</a>
						</Link>
						<Link href="/store">
							<a>News</a>
						</Link>
					</li>
				</Ul>
			</List>
		</Nav>
	);
}
