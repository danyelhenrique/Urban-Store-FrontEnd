import React, { useContext } from 'react';
import { useRouter } from 'next/router';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import Button from '../ColorSelect';

import { NavBarContext } from '../../context/Navbar';

import { Container, Item, Image, Favorite, Icon, NameAndPrice, ColorSelect } from './styles';

const Data = gql`
	{
		indexProduct(page: 1, limit: 10) {
			id
			data_price
			data_product_display_name
			data_brand_name
			data_base_colour
			data_colour1
			data_colour2
			data_colour3
			data_colour4
			data_front_imageURL
		}
	}
`;

export default function Items() {
	const router = useRouter();
	const [ state, dispatch ] = useContext(NavBarContext);

	const { loading, error, data } = useQuery(Data);

	if (loading) return <h1>Loading</h1>;

	if (error) return <h1>Erro</h1>;

	const renderColor = (colors) => {
		return colors.map((ItemColor, index) => {
			if (ItemColor) {
				let color = ItemColor.includes(' ') ? ItemColor.split(' ')[0].toLowerCase() : ItemColor;
				color.includes('White') ? (color = '#d0d0d0') : (color = color);
				return <Button color={color} key={index} />;
			}
		});
	};

	function AddToFavorite() {}

	const handleClick = (e, item) => {
		e.preventDefault();
		dispatch({ type: '@ADD_BAG_ITEM', payload: item });
		router.push('/store/[slug]', `/store/${item.data_product_display_name}`);
	};

	return data.indexProduct.map((item, index) => {
		return (
			<Container key={item.id}>
				<Item onClick={(e) => handleClick(e, item)}>
					<Image src={item.data_front_imageURL} alt="item" />
					<Favorite type="button" onClick={AddToFavorite}>
						<Icon src="/favorites-with-border.png" alt="favorite" />
					</Favorite>
				</Item>
				<NameAndPrice>
					<div>
						<span>{item.data_product_display_name} </span>
					</div>
					<span>$ {item.data_price}</span>
				</NameAndPrice>
				<ColorSelect>
					{renderColor([
						item.data_base_colour,
						item.data_colour1,
						item.data_colour2,
						item.data_colour3,
						item.data_colour4
					])}
				</ColorSelect>
			</Container>
		);
	});
}
