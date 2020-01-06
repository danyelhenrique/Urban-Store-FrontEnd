import React, { useContext } from "react";
import { useRouter } from "next/router";
import Link from 'next/link'

import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import Button from "../ColorSelect";

import { Context } from "../../context";

import {
  Container,
  Item,
  Image,
  Favorite,
  Hover,
  Icon,
  NameAndPrice,
  ColorSelect
} from "./styles";

const Data = gql`
  {
    indexProduct(page: 1, limit: 10) {
      id
      data_price
      data_product_display_name
      data_brand_name
      data_base_colour
      data_colour1
      data_colour2
      data_colour3
      data_colour4
      data_front_imageURL
      data_back_image_url
    }
  }
`;

export default function Items() {
  const router = useRouter();
  const [state, dispatch] = useContext(Context);

  const { loading, error, data } = useQuery(Data);

  if (loading) return <h1>Loading</h1>;

  if (error) return <h1>Erro</h1>;

  const renderColor = colors => {
    return colors.map((ItemColor, index) => {
      if (ItemColor) {
        let color = ItemColor.includes(" ")
          ? ItemColor.split(" ")[0].toLowerCase()
          : ItemColor;
        color.includes("White") ? (color = "#d0d0d0") : (color = color);
        return <Button color={color} key={index} />;
      }
    });
  };

  function AddToFavorite() {}

  function addToCart(item) {
    dispatch({ type: "@ADD_CART_ITEM", payload: item });
  }

  return data.indexProduct.map((item, index) => {
    return (
      <Container key={item.id}>
        <Item
          image={item.data_back_image_url}
        >
          <Image src={item.data_front_imageURL} alt="item" />
          <Favorite type="button" onClick={AddToFavorite}>
            <Icon src="/favorites-with-border.png" alt="favorite" />
          </Favorite>
          <Hover>
            <button onClick={() => addToCart(item)}>ADD TO CART</button>
          </Hover>
        </Item>
        <NameAndPrice>
          <div>
          <Link href="/store/[slug]" as={`/store/${item.data_product_display_name}`}>
            <a>{item.data_product_display_name} </a>
            </Link>
          </div>
          <span>$ {item.data_price}</span>
        </NameAndPrice>
        <ColorSelect>
          {renderColor([
            item.data_base_colour,
            item.data_colour1,
            item.data_colour2,
            item.data_colour3,
            item.data_colour4
          ])}
        </ColorSelect>
      </Container>
    );
  });
}
