import React, { useContext } from "react";
import { useRouter } from "next/router";
import { Context } from "../../context";

import {
  StoreData,
  Button,
  Close,
  Item,
  Details,
  ItemName,
  Select,
  Image
} from "./styles";

import Icon from '../Icon'
import Modal from '../Modal'

export default function BagModal() {
  const router = useRouter();
  const [state, dispatch] = useContext(Context);

  if(state.cart.length <= 0){
    return (
      <Modal onclick={()=> dispatch({type: "@IS_BAG_OPEN"})}>
        <h1>OI</h1>
      </Modal>
    )
  }

  const handleClick = e => {
    e.preventDefault();
    router.push("/store/cart", "/store/cart");
  };

  const handleChange = item => {
    dispatch({ type: "@InputQuantityItem", payload: item });

  }

  function removeItem(item) {
    dispatch({ type: "@REMOVE_ITEM_CART", payload: item });
  }

  

  return (
    <Modal onclick={()=> dispatch({type: "@IS_BAG_OPEN"})}>
      <Close>
        <h6>BAG</h6>
        <Icon background="/nav/close.png" >
          <button onClick={()=> dispatch({type: "@IS_BAG_OPEN"})}></button>
        </Icon>
      </Close>
       <StoreData>
         {state.cart.map(item => (
            <Item >
              <Image background={item.data_front_imageURL}/>
              <Details>
                <ItemName>
                  <span>{item.data_product_display_name}</span>
                  <Icon background="/user_modal_bag/trash.png" >
                    <button onClick={() => removeItem(item)}></button>
                  </Icon>
                </ItemName>

                <small>${item.data_price}</small>

                <Select>
                <small> qnt: </small>
                  <Icon background="/user_modal_bag/more.png" >
                      <button onClick={() => dispatch({type:"@IncreaseItemQuantityMoreOne"})}></button>
                  </Icon>
                  <input  type="text" value={state.cartValues.qnt} onChange={() => handleChange(item)}/>
                  <Icon background="/user_modal_bag/less.png" >
                      <button onClick={() => dispatch({type:"@DecreaseItemQuantityMoreOne"})}></button>
                  </Icon>
                </Select>
              </Details>
          </Item>
         ))}
         
       
        </StoreData>
    </Modal>
  );
}
