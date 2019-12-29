import React, { useEffect, useState } from 'react';
import { useApolloClient } from '@apollo/react-hooks';

import {
	NavContainer,
	FirstNav,
	UserArea,
	ListAndLogo,
	ListFirstNav,
	ScrollNav,
	ListItems,
	LogoAndBag
} from './styles';

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
			{!onscroll ? (
				<FirstNav>
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
							<a href="/#">
								<img src="/nav/bag.png" alt="" />
								<span>Shopping Bag</span>
							</a>
						</UserArea>
					</div>
					<ListAndLogo>
						<span>Clothes for all types of styles</span>
						<ListFirstNav>
							<li>
								<a href="#">Men's</a>
								<a href="#">Women's</a>
								<a href="#">Baby</a>
								<a href="#">Girls</a>
								<a href="#">Boys</a>
								<a href="#">H&M</a>
								<a href="#">News</a>
							</li>
						</ListFirstNav>
					</ListAndLogo>
				</FirstNav>
			) : (
				<ScrollNav scroll={onscroll}>
					<a href="/#">
						<img src="/nav/logo.png" alt="" />
					</a>
					<ListItems>
						<li>
							<a href="#">Men's</a>
							<a href="#">Women's</a>
							<a href="#">Baby</a>
							<a href="#">Girls</a>
							<a href="#">Boys</a>
							<a href="#">H&M</a>
							<a href="#">News</a>
						</li>
					</ListItems>
					<LogoAndBag>
						<a href="/#">
							<img src="/nav/bag-scroll-nav.png" alt="" />
						</a>
					</LogoAndBag>
				</ScrollNav>
			)}
		</NavContainer>
	);
}
