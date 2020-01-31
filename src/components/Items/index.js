import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Link from 'next/link';

import Button from '../ColorSelect';

import { addItemtoCart } from '../../store/modules/cart/actions';
import { generateKey } from '../../../utils/product';

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
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.products);

  function renderColor(colors) {
    const { key } = generateKey();

    return colors.map(ItemColor => {
      if (ItemColor) {
        const color = ItemColor.includes(' ')
          ? ItemColor.split(' ')[0].toLowerCase()
          : ItemColor;

        return <Button color={color} key={key} />;
      }
    });
  }

  function AddToFavorite() {}

  function addToCart(item) {
    dispatch(addItemtoCart(item));
  }

  return products.map(item => {
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
