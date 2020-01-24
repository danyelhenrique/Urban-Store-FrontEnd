import React, { useContext } from 'react';
// import { useRouter } from 'next/router';
import Link from 'next/link';

import Button from '../ColorSelect';

import { Context } from '../../context';

import {
  Container,
  Item,
  Image,
  Favorite,
  Hover,
  Icon,
  NameAndPrice,
  ColorSelect
} from './styles';

export default function Items() {
  const [state, dispatch] = useContext(Context);

  const renderColor = colors => colors.map((ItemColor, index) => {
      if (ItemColor) {
        let color = ItemColor.includes(' ')
          ? ItemColor.split(' ')[0].toLowerCase()
          : ItemColor;

        // eslint-disable-next-line no-self-assign
        // eslint-disable-next-line no-unused-expressions
        color.includes('White') ? (color = '#d0d0d0') : color;

        return <Button color={color} key={String(index)} />;
      }
    });

  function AddToFavorite() {}

  function addToCart(item) {
    dispatch({ type: '@ADD_CART_ITEM', payload: item });
  }

  return state.products.map(item => {
    const urlAs = item.data_product_display_name.split(' ').join('_');
    return (
      <Container key={item.id}>
        <Item image={item.data_back_image_url}>
          <Image src={item.data_front_imageURL} alt="item" />
          <Favorite type="button" onClick={AddToFavorite}>
            <Icon src="/favorites-with-border.png" alt="favorite" />
          </Favorite>
          <Hover>
            <button type="button" onClick={() => addToCart(item)}>
              ADD TO CART
            </button>
          </Hover>
        </Item>
        <NameAndPrice>
          <div>
            <Link href="/store/[slug]" as={`/store/${urlAs}`}>
              <a>{item.data_product_display_name}</a>
            </Link>
          </div>
          <span>${item.data_price}</span>
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
