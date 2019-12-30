import React, { useContext } from 'react';
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
						<a href="#">Shopping Bag</a>
						{state.isModalOpen && <BagModal />}
					</Bag>
				</UserArea>
			</div>
			<List>
				<span>Clothes for all types of styles</span>
				<Ul>
					<li>
						<a href="#">Men's</a>
						<a href="#">Women's</a>
						<a href="#">Baby</a>
						<a href="#">Girls</a>
						<a href="#">Boys</a>
						<a href="#">H&M</a>
						<a href="#">News</a>
					</li>
				</Ul>
			</List>
		</Nav>
	);
}
