import React, { useContext } from 'react';
import { Context } from '../../context';

import { Modal, ModalItem, ModalItemDetail, Image, EmptyCart } from './styles';

export default function BagModal() {
	const [ state, dispatch ] = useContext(Context);

	if(state.cart.length <= 0){
		return (
			<Modal light={state.isScroll} isEmpty>
			<EmptyCart light={state.isScroll}>
				<div>

				<h1> You cart is empty </h1>
				<span>enjoy our promotions in all store !</span>
				</div>

			</EmptyCart>
			</Modal>
		)
	}

	state.cart.map(item => (
		<Modal light={state.isScroll}>
		<ModalItem>
			<Image>
				<img src={item.data_front_imageURL} alt="" />
			</Image>
			<ModalItemDetail>
			<span>{item.data_product_display_name}</span>
				<p>1X ${item.data_price}</p>
			</ModalItemDetail>
		</ModalItem>
	</Modal>
	))
}
