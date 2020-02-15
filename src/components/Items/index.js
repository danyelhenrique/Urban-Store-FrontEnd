/* eslint-disable react/no-array-index-key */
import React from 'react';
import LazyLoad from 'react-lazyload';
import Link from 'next/link';

import { useSelector, useDispatch } from 'react-redux';

// import Button from '../ColorSelect';

import { addItemtoCart } from '../../store/modules/cart/actions';

import {
  Container,
  Item,
  Image,
  Favorite,
  Hover,
  Icon,
  NameAndPrice,
  ColorSelect,
  Button
} from './styles';

export default function Items() {
  const dispatch = useDispatch();
  const { products } = useSelector(state => state.products);

  function AddToFavorite() {}

  function addToCart(item) {
    dispatch(addItemtoCart(item));
  }

  return products.map((item, index) => {
    const urlAs = item.data_product_display_name.split(' ').join('_');
    return (
      <Container key={`${item.id}-_${index}`}>
        <Item image={item.data_back_image_url}>
          <LazyLoad height="100%">
            <Image src={item.data_front_imageURL} alt="item" />
          </LazyLoad>
          <LazyLoad height="100%">
            <Image src={item.data_back_image_url} alt="item" id="back_img" />
          </LazyLoad>
          <Favorite type="button" onClick={AddToFavorite}>
            <div>
              <Icon src="/icons/favorite.png" alt="favorite" id="fav-normal" />
              <Icon
                src="/icons/favorite-red.png"
                alt="favorite"
                id="fav-hover"
              />
            </div>
          </Favorite>
          <Hover>
            {item.qnt > 0 && (
              <button type="button" onClick={() => addToCart(item)}>
                ADD TO CART
              </button>
            )}
          </Hover>
        </Item>
        <NameAndPrice>
          <div>
            <Link href="/store/[slug]" as={`/store/${urlAs}`}>
              {item.data_product_display_name.length > 30 ? (
                <a>
                  {item.data_product_display_name
                    .substring(0, 30)
                    .concat(' ...')}
                </a>
              ) : (
                <a>{item.data_product_display_name}</a>
              )}
            </Link>
          </div>
          <span>${item.data_price}</span>
        </NameAndPrice>
        <ColorSelect>
          {item.data_base_colour && <Button color={item.data_base_colour} />}
          {item.data_colour1 && <Button color={item.data_colour1} />}
          {item.data_colour2 && <Button color={item.data_colour2} />}
          {item.data_colour3 && <Button color={item.data_colour3} />}
          {item.data_colour4 && <Button color={item.data_colour4} />}
        </ColorSelect>
      </Container>
    );
  });
}
