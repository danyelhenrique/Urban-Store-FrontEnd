import React, { useContext } from "react";
import { useRouter } from "next/router";
import { Context } from "../../context";

import {
  Modal,
  ModalItem,
  ModalItemDetail,
  Image,
  EmptyCart,
  Button
} from "./styles";

export default function BagModal() {
  const router = useRouter();
  const [state, dispath] = useContext(Context);
  if (state.cart.length <= 0) {
    return (
      <Modal light={state.isScroll} isEmpty>
        <EmptyCart light={state.isScroll}>
          <div>
            <h1> You cart is empty </h1>
            <span>enjoy our promotions in all store !</span>
          </div>
        </EmptyCart>
      </Modal>
    );
  }

  const handleClick = e => {
    e.preventDefault();
    dispath({ type: "@IS_BAG_OPEN" });
    router.push("/store/cart", "/store/cart");
  };
  return (
    <>
      <Modal light={state.isScroll}>
        {state.cart.map(item => (
          <ModalItem>
            <Image>
              <img src={item.data_front_imageURL} alt="" />
            </Image>
            <ModalItemDetail>
              <span>{item.data_product_display_name}</span>
              <p>1X ${item.data_price}</p>
            </ModalItemDetail>
          </ModalItem>
        ))}
        <Button type="button" onClick={e => handleClick(e)}>
          GO TO CART
        </Button>
      </Modal>
    </>
  );
}
