import React, { useContext } from 'react';
import { Context } from '../../context';

import { Container, Image, ItemDetail, Header, Body, Select, Button, Favorite, Details, ButtonDetails } from './styles';

export default function ItemMore() {
	const [ state, dispatch ] = useContext(Context);

	function addToCart(item) {
		dispatch({ type: '@ADD_CART_ITEM', payload: item });
	}
	return state.userBag.map((item) => {
		return (
			<Container key={item.id}>
				<Image>
					<img src="/item-detail1.jpg" alt="item" />
					<img src="/item-detail2.jpg" alt="item" />
				</Image>
				<ItemDetail>
					<Header>
						<div>
							<span>{item.data_product_display_name}</span>
							<span>$ {item.data_price}</span>
						</div>
						<Favorite>
							<img src="/favorite-red.png" alt="favorite" />
						</Favorite>
					</Header>
					<Body>
						<img src="/icons/First.png" alt="item" />
						<img src="/icons/Second.png" alt="item" />
						<img src="/icons/Third.png" alt="item" />
						<img src="/icons/Four.png" alt="item" />
						<img src="/icons/Five.png" alt="item" />
						<img src="/icons/Six.png" alt="item" />
					</Body>
					<Select>
						<select name="select" defaultValue="DEFAULT">
							<option value="DEFAULT" disabled>
								Choose Size
							</option>
							<option value="valor1">Select Size</option>
							<option value="valor2">Select Size </option>
							<option value="valor3">Select Size </option>
						</select>
						<img src="/icons/select.png" alt="select" />
					</Select>
					<Button onClick={() => addToCart(item)}>
						<div>
							<img src="/icons/bag-btn.png" alt="btnIcon" />
							<strong>ADD</strong>
						</div>
					</Button>
				</ItemDetail>
				<Image secondImage>
					<img src="/item-detail3.jpg" alt="item" />
				</Image>
				<Details>
					<ButtonDetails>
						<span>DETAILS</span>
					</ButtonDetails>

					<ButtonDetails>
						<span>SIMILAR ITEMS</span>
					</ButtonDetails>

					<ButtonDetails>
						<span>REVIEWS(324)</span>
					</ButtonDetails>
					<div>
						<img src="/icons/start-black.png" alt="start" />
						<img src="/icons/start-black.png" alt="start" />
						<img src="/icons/start-black.png" alt="start" />
						<img src="/icons/star-withe-and-black.png" alt="start" />
					</div>
				</Details>
			</Container>
		);
	});
}
