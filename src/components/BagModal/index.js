import React from 'react';
import { useRouter } from 'next/router';

import Link from 'next/link';

import { useSelector, useDispatch } from 'react-redux';
import { bagModal } from '../../store/modules/modal/actions';
import {
  increaseQntItemMoreOne,
  decreaseQntItemLessOne,
  changeQntItemImput,
  removeItemtoCart
} from '../../store/modules/cart/actions';

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
  const { cart } = useSelector(state => state.cart);

  const isActive = useSelector(state => state.modal.isBagModalOpen);

  const dispatch = useDispatch();

  function handleModal() {
    dispatch(bagModal());
  }

  if (cart.length < 0) return null;

  const handleClick = e => {
    e.preventDefault();
    router.push('/store/cart', '/store/cart');
  };

  function handleChange(e, item) {
    const value = Number(e);

    const payload = { value, item };

    dispatch(changeQntItemImput(payload));
  }

  function removeItem(item) {
    dispatch(removeItemtoCart(item));
  }

  return (
    <ContainerModal isActive={isActive}>
      <Modal onclick={handleModal}>
        <Close>
          <h6>BAG</h6>
          <Icon background="/nav/close.png">
            <button type="button" onClick={handleModal} />
          </Icon>
        </Close>
        <StoreData>
          {cart.map(item => (
            <Item key={item.id}>
              <Image background={item.data_front_imageURL} />
              <Details>
                <ItemName>
                  <Link href="/store/cart" as="/store/cart">
                    <a>{item.data_product_display_name}</a>
                  </Link>
                  <Icon background="/nav/close.png">
                    <button type="button" onClick={() => removeItem(item)} />
                  </Icon>
                </ItemName>

                <small>${item.data_price}</small>

                <Select>
                  <small> qnt: </small>
                  <MoreLess>
                    <button
                      type="button"
                      onClick={() => dispatch(increaseQntItemMoreOne(item))}
                    >
                      <span>+</span>
                    </button>
                  </MoreLess>
                  <input
                    type="text"
                    name={item.id}
                    value={item.qntRequest}
                    onChange={({ target }) => handleChange(target.value, item)}
                  />
                  <MoreLess>
                    <button
                      type="button"
                      onClick={() => dispatch(decreaseQntItemLessOne(item))}
                    >
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
