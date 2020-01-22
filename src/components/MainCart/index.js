import React, { useContext, useState } from 'react';
import { Context } from '../../context';

import ButtonPaypal from '../ButtonPaypal';

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
} from './styles';

export default function MainCart() {
  const [state, dispatch] = useContext(Context);
  const [modalOpen, setModalOpen] = useState(false);

  if (state.cart.length <= 0) {
    return <div />;
  }

  function checkout() {
    setModalOpen(true);
    const isLoggin = state.isLogin;
    if (isLoggin) {
      console.log('user not loggin');
      return;
    }
    dispatch({ type: '@CHECKOUT' });
  }

  function removeItem(item) {
    dispatch({ type: '@REMOVE_ITEM_CART', payload: item });
  }

  return (
    <Container>
      {state.cart.map((item, index) => {
        const qnt = new Array(item.qnt).fill();

        return (
          <Items key={item.id}>
            <Item>
              <img src={item.data_front_imageURL} alt="model" />
              <Detail>
                <span>{item.data_product_display_name}</span>
                <small>
${item.data_price}</small>
                <p>Art.no.0755362003</p>
                <p>
                  Color:
                  {item.data_base_colour}
                </p>
                <p>Size: 2</p>
                <p>
Total: ${item.data_price}</p>
                <div>
                  <select name="quantity">
                    <option value="choice">quantity</option>
                    {qnt.map((_, index) => (
                      <option value="one">{index + 1}</option>
                    ))}
                  </select>
                </div>
              </Detail>
              <Remove>
                <button onClick={() => removeItem(item)}>
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
            <span>
${state.cartValues.order}</span>
          </div>
          <div>
            <span>Shipping & Handling: </span>
            <span>{state.cartValues.shipping}</span>
          </div>
          <div>
            <span>TOTAL: </span>
            <span>
${state.cartValues.total}
*
</span>
          </div>
          <div>
            <span>DISCOUNT: </span>
            <span>
${state.cartValues.discont}
*
</span>
          </div>
        </OrderAndTotal>
        <BtnCheckout onClick={checkout}>CONTINUE TO CHECKOUT</BtnCheckout>
      </Bag>
      {modalOpen && (
        <Modal>
          <div>
            <OpenModal>
              <button onClick={() => setModalOpen(false)}>
                <img src="/icons/remove.png" />
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
