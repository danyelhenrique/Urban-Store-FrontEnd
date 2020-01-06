import React, { useContext, Fragment } from 'react';
import { Context } from '../../context';
import Link from 'next/link'


import { Modal, ModalItem, ModalItemDetail, Image, EmptyCart } from './styles';

export default function BagModal() {
	const [ state, dispatch ] = useContext(Context);
	console.log('state', state)
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
	return (
		<Fragment>
			<Modal light={state.isScroll}>
		{
		state.cart.map(item => (
			<ModalItem>
				<Image>
					<img src={item.data_front_imageURL} alt="" />
				</Image>
				<ModalItemDetail>
				<Link href="/store/cart" as="/store/cart">
					<a>{item.data_product_display_name}</a>
				</Link>
					<p>1X ${item.data_price}</p>
				</ModalItemDetail>
			</ModalItem>
		))
		}
		</Modal>

		</Fragment>
	)




}
