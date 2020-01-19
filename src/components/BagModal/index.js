import React, { useContext } from "react";
import { useRouter } from "next/router";
import { Context } from "../../context";

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
} from "./styles";

import Icon from '../Icon'
import Modal from '../Modal'

export default function BagModal() {
  const router = useRouter();
  const [state, dispatch] = useContext(Context);
  const isActive = state.isBagModalOpen

  if(state.cart.length <= 0){
    return (
      <ContainerModal isActive={isActive}>
        <Modal onclick={()=> dispatch({type: "@IS_BAG_OPEN"})}>
          <h1>OI</h1>
        </Modal>
      </ContainerModal>
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
    <ContainerModal isActive={isActive}>
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
                  <MoreLess>
                      <button onClick={() => dispatch({type:"@IncreaseItemQuantityMoreOne" , payload: item})}>
                        <span>+</span>
                      </button>
                  </MoreLess>
                  <input  type="text" value={item.qntRequest} onChange={() => handleChange(item)}/>
                  <MoreLess>
                      <button onClick={() => dispatch({type:"@DecreaseItemQuantityMoreOne"})}>
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
