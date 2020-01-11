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

  const handleClick = e => {
    e.preventDefault();
    router.push("/store/cart", "/store/cart");
  };
  return (
    <Modal onclick={()=> dispatch({type: "@IS_BAG_OPEN"})}>
      <Close>
        <h6>BAG</h6>
        <Icon background="/nav/close.png" >
          <button onClick={()=> dispatch({type: "@IS_BAG_OPEN"})}></button>
        </Icon>
      </Close>
       <StoreData>
         <Item >
              <Image background="/_models/girl8.jpg"/>
              <Details>
                <ItemName>
                  <span>name of product here</span>
                  <Icon background="/user_modal_bag/trash.png" >
                    <button></button>
                  </Icon>
                </ItemName>

                <small>$ 69.99</small>

                <Select>
                <small> qnt: </small>
                  <Icon background="/user_modal_bag/more.png" >
                      <button></button>
                  </Icon>
                  <input  type="text" value={state.cartValues.qnt}/>
                  <Icon background="/user_modal_bag/less.png" >
                      <button></button>
                  </Icon>
                </Select>
              </Details>
          </Item>

          <Item >
              <Image background="/_models/girl8.jpg"/>
              <Details>
                <ItemName>
                  <span>name of product here</span>
                  <Icon background="/user_modal_bag/trash.png" >
                    <button></button>
                  </Icon>
                </ItemName>

                <small>$ 69.99</small>

                <Select>
                <small> qnt: </small>
                  <Icon background="/user_modal_bag/more.png" >
                      <button></button>
                  </Icon>
                  <input  type="text" value={state.cartValues.qnt}/>
                  <Icon background="/user_modal_bag/less.png" >
                      <button></button>
                  </Icon>
                </Select>
              </Details>
          </Item>

          <Item >
              <Image background="/_models/girl8.jpg"/>
              <Details>
                <ItemName>
                  <span>name of product here</span>
                  <Icon background="/user_modal_bag/trash.png" >
                    <button></button>
                  </Icon>
                </ItemName>

                <small>$ 69.99</small>

                <Select>
                <small> qnt: </small>
                  <Icon background="/user_modal_bag/more.png" >
                      <button></button>
                  </Icon>
                  <input  type="text" value={state.cartValues.qnt}/>
                  <Icon background="/user_modal_bag/less.png" >
                      <button></button>
                  </Icon>
                </Select>
              </Details>
          </Item>

          <Item >
              <Image background="/_models/girl8.jpg"/>
              <Details>
                <ItemName>
                  <span>name of product here</span>
                  <Icon background="/user_modal_bag/trash.png" >
                    <button></button>
                  </Icon>
                </ItemName>

                <small>$ 69.99</small>

                <Select>
                <small> qnt: </small>
                  <Icon background="/user_modal_bag/more.png" >
                      <button></button>
                  </Icon>
                  <input  type="text" value={state.cartValues.qnt}/>
                  <Icon background="/user_modal_bag/less.png" >
                      <button></button>
                  </Icon>
                </Select>
              </Details>
          </Item>

          <Item >
              <Image background="/_models/girl8.jpg"/>
              <Details>
                <ItemName>
                  <span>name of product here</span>
                  <Icon background="/user_modal_bag/trash.png" >
                    <button></button>
                  </Icon>
                </ItemName>

                <small>$ 69.99</small>

                <Select>
                <small> qnt: </small>
                  <Icon background="/user_modal_bag/more.png" >
                      <button></button>
                  </Icon>
                  <input  type="text" value={state.cartValues.qnt}/>
                  <Icon background="/user_modal_bag/less.png" >
                      <button></button>
                  </Icon>
                </Select>
              </Details>
          </Item>
        </StoreData>
    </Modal>
  );
}
