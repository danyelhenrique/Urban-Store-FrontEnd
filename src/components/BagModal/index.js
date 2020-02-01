import React from 'react';
import { useRouter } from 'next/router';

import { useSelector, useDispatch } from 'react-redux';
import { bagModal } from '../../store/modules/modal/actions';

import {
  ContainerModal,
  StoreData,
  Close,
  Item,
  Details,
  ItemName,
  Select,
  MoreLess,
  Image
} from './styles';

import Icon from '../Icon';
import Modal from '../Modal';

export default function BagModal() {
  const router = useRouter();

  const isActive = useSelector(state => state.modal.isBagModalOpen);
  const { cart } = useSelector(state => state.cart);

  const dispatch = useDispatch();

  function handleModal() {
    dispatch(bagModal());
  }

  if (cart.length <= 0) {
    return (
      <ContainerModal isActive={isActive}>
        <Modal onclick={handleModal}>
          <h1>OI</h1>
        </Modal>
      </ContainerModal>
    );
  }

  const handleClick = e => {
    e.preventDefault();
    router.push('/store/cart', '/store/cart');
  };

  const handleChange = item => {
    dispatch({ type: '@InputQuantityItem', payload: item });
  };

  function removeItem(item) {
    dispatch({ type: '@REMOVE_ITEM_CART', payload: item });
  }

  return (
    <ContainerModal isActive={isActive}>
      <Modal onclick={handleModal}>
        <Close>
          <h6>BAG</h6>
          <Icon background="/nav/close.png">
            <button onClick={handleModal} />
          </Icon>
        </Close>
        <StoreData>
          {cart.map(item => (
            <Item>
              <Image background={item.data_front_imageURL} />
              <Details>
                <ItemName>
                  <span>{item.data_product_display_name}</span>
                  <Icon background="/user_modal_bag/trash.png">
                    <button onClick={() => {}} />
                  </Icon>
                </ItemName>

                <small>${item.data_price}</small>

                <Select>
                  <small> qnt: </small>
                  <MoreLess>
                    <button onClick={() => {}}>
                      <span>+</span>
                    </button>
                  </MoreLess>
                  <input
                    type="text"
                    value={item.qntRequest}
                    onChange={() => {}}
                  />
                  <MoreLess>
                    <button onClick={() => {}}>
                      <span>-</span>
                    </button>
                  </MoreLess>
                </Select>
              </Details>
            </Item>
          ))}
        </StoreData>
      </Modal>
    </ContainerModal>
  );
}
