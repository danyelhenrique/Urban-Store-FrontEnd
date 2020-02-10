import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import ButtonPaypal from '../ButtonPaypal';

import {
  removeItemtoCart,
  changeQntItemImput
} from '../../store/modules/cart/actions';

import { warn } from '../../toasty';

import {
  Container,
  Item,
  Bag,
  Detail,
  Items,
  Remove,
  Form,
  OrderAndTotal,
  BtnCheckout,
  Modal,
  OpenModal,
  PaypalContainer,
  EmptyCart
} from './styles';

export default function MainCart() {
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const { cart, cartValues } = useSelector(state => state.cart);
  const { isValid } = useSelector(state => state.user);

  if (cart.length <= 0) {
    return (
      <Container>
        <EmptyCart />
        <h1>YOU CART IS EMPTY</h1>
      </Container>
    );
  }

  function checkout() {
    if (!isValid) {
      warn('please signin ou singout to continue');
      return;
    }
    setModalOpen(true);
  }

  function removeItem(item) {
    dispatch(removeItemtoCart(item));
  }

  function handleSelect(item, e) {
    const value = Number(e);

    const payload = { value, item };

    dispatch(changeQntItemImput(payload));
  }

  return (
    <Container>
      {cart.map(item => {
        const qnt = new Array(item.qnt).fill();

        return (
          <Items>
            <Item key={item.id}>
              <img src={item.data_front_imageURL} alt="model" />
              <Detail>
                <h4>{item.data_product_display_name}</h4>
                <small>${item.data_price}</small>
                <p>Art.no.0755362003</p>
                <p>
                  Color:
                  {item.data_base_colour}
                </p>
                <p>Size: 2</p>
                <p>
                  Total: <strong>${item.total}</strong>
                </p>
                <div>
                  <select
                    name="quantity"
                    onChange={({ target }) => handleSelect(item, target.value)}
                  >
                    <option defaultValue={item.qntRequest} disabled>
                      {item.qntRequest}
                    </option>
                    {qnt.map((_, index) => (
                      <option value={index + 1}>{index + 1}</option>
                    ))}
                  </select>
                </div>
              </Detail>
              <Remove>
                <button type="button" onClick={() => removeItem(item)}>
                  <img src="/icons/remove.png" alt="remove" />
                </button>
              </Remove>
            </Item>
          </Items>
        );
      })}

      <Bag>
        <h3>SHOPPING BAG TOTAL</h3>
        <Form>
          <label htmlFor="discont">
            ADD DISCONT CODE
            <input type="text" placeholder="Cupom" id="discont" />
          </label>
          <button type="button">ADD</button>
        </Form>
        <OrderAndTotal>
          <div>
            <span>ORDER VALUE: </span>
            <span>${cartValues.order}</span>
          </div>
          <div>
            <span>Shipping & Handling: </span>
            <span>{cartValues.shipping}</span>
          </div>
          <div>
            <span>TOTAL: </span>
            <span>${cartValues.total}*</span>
          </div>
          <div>
            <span>DISCOUNT: </span>
            <span>${cartValues.discont}*</span>
          </div>
        </OrderAndTotal>
        <BtnCheckout onClick={checkout}>CONTINUE TO CHECKOUT</BtnCheckout>
      </Bag>
      {modalOpen && (
        <Modal>
          <div>
            <OpenModal>
              <button type="button" onClick={() => setModalOpen(false)}>
                <img src="/icons/remove.png" alt="remove" />
              </button>
            </OpenModal>
            <h1>REMEMBER THIS PROJECT IS ONLY TO TEST.</h1>
            <span>no real money will be spent</span>
            <PaypalContainer>
              <ButtonPaypal />
            </PaypalContainer>
          </div>
        </Modal>
      )}
    </Container>
  );
}
