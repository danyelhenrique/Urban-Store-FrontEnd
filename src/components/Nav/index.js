import React, { useEffect, useState, Fragment } from 'react';
import { useApolloClient } from '@apollo/react-hooks';

import { NavContainer, FirstRow, UserArea, SecondRow, SecondRowNav } from './styles';

export default function Nav() {
	const [ onscroll, setOnscroll ] = useState(false);
	const client = useApolloClient();

	useEffect(() => {
		const items = localStorage.getItem('@-apollo-client-get-products@');
		client.writeData({ data: { items } });
	}, []);

	useEffect(
		() => {
			window.onscroll = function() {
				scrollFunction();
			};
			// return window.onscroll  = null
		},
		[ onscroll ]
	);

	function scrollFunction() {
		if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
			setOnscroll(true);
			client.writeData({ data: { isScroll: true } });
		} else {
			setOnscroll(false);
			client.writeData({ data: { isScroll: false } });
		}
	}

	return (
		<NavContainer scroll={onscroll}>
			<FirstRow>
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
							<span>Favorites</span>
						</a>
						<a href="/#">
							<img src="/nav/bag.png" alt="" />
							<span>Shopping Bag</span>
						</a>
					</UserArea>
				</div>
			</FirstRow>

			<SecondRow>
				{!onscroll && <span>Clothes for all types of styles</span>}
				<SecondRowNav>
					<li>
						<a href="#">Men's</a>
						<a href="#">Women's</a>
						<a href="#">Baby</a>
						<a href="#">Girls</a>
						<a href="#">Boys</a>
						<a href="#">H&M</a>
						<a href="#">News</a>
					</li>
				</SecondRowNav>

				{onscroll && (
					<Fragment>
						<a href="/#">
							<img src="/nav/bag-light.png" alt="bag" />
						</a>
					</Fragment>
				)}
			</SecondRow>
		</NavContainer>
	);
}
