import React, { useContext } from 'react';
import { Context } from '../../context';

import { Modal, ModalItem, ModalItemDetail, Image } from './styles';

export default function BagModal() {
	const [ state, dispatch ] = useContext(Context);

	return (
		<Modal light={state.isScroll}>
			<ModalItem>
				<Image>
					<img src="/_models/girl5.jpg" alt="" />
				</Image>
				<ModalItemDetail>
					<span>Blue Jean Jacket</span>
					<p>1X $125</p>
				</ModalItemDetail>
			</ModalItem>
			<ModalItem>
				<Image>
					<img src="/_models/girl5.jpg" alt="" />
				</Image>
				<ModalItemDetail>
					<span>Blue Jean Jacket</span>
					<p>1X $125</p>
				</ModalItemDetail>
			</ModalItem>
			<ModalItem>
				<Image>
					<img src="/_models/girl5.jpg" alt="" />
				</Image>
				<ModalItemDetail>
					<span>Blue Jean Jacket</span>
					<p>1X $125</p>
				</ModalItemDetail>
			</ModalItem>
			<ModalItem>
				<Image>
					<img src="/_models/girl5.jpg" alt="" />
				</Image>
				<ModalItemDetail>
					<span>Blue Jean Jacket</span>
					<p>1X $125</p>
				</ModalItemDetail>
			</ModalItem>
			<ModalItem>
				<Image>
					<img src="/_models/girl5.jpg" alt="" />
				</Image>
				<ModalItemDetail>
					<span>Blue Jean Jacket</span>
					<p>1X $125</p>
				</ModalItemDetail>
			</ModalItem>
		</Modal>
	);
}
