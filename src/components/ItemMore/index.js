import React from 'react';

import { useDispatch } from 'react-redux';
import useItemMore from '../../hooks/useItemMore';

import Spinner from '../Spinner';

import { addItemtoCart } from '../../store/modules/cart/actions';
import { productByName } from '../../graphql/gql/products';

import { error } from '../../toasty';

import NotFound from '../404';

import {
  Container,
  Image,
  ItemDetail,
  Header,
  Body,
  Select,
  Button,
  Favorite,
  Details,
  ButtonDetails
} from './styles';

export default function ItemMore() {
  const dispatch = useDispatch();

  const [product, isLoading, err] = useItemMore(productByName);

  if (err) {
    error('fail to fetch product.');
    return <NotFound />;
  }

  if (isLoading) return <Spinner active={isLoading} />;

  const {
    id,
    data_front_imageURL,
    data_product_display_name,
    data_back_image_url,
    data_price
  } = product;

  function addToCart(item) {
    dispatch(addItemtoCart(item));
  }

  return (
    <Container key={id}>
      <Image>
        <img src={data_front_imageURL} alt="item" />
        <img src={data_back_image_url} alt="item" />
      </Image>
      <ItemDetail>
        <Header>
          <div>
            <span>{data_product_display_name}</span>
            <strong>${data_price}</strong>
          </div>
          <Favorite>
            <img src="/icons/favorite.png" alt="favorite" id="favorite" />
            <img
              src="/icons/favorite-red.png"
              id="favorite-red"
              alt="favorite-hover"
            />
          </Favorite>
        </Header>
        <Body>
          <img src="/icons/First.png" alt="item" />
          <img src="/icons/Second.png" alt="item" />
          <img src="/icons/Third.png" alt="item" />
          <img src="/icons/Four.png" alt="item" />
          <img src="/icons/Five.png" alt="item" />
          <img src="/icons/Six.png" alt="item" />
        </Body>
        <Select>
          <select name="select" defaultValue="DEFAULT">
            <option value="DEFAULT" disabled>
              Choose Size
            </option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
          </select>
          <img src="/icons/select.png" alt="select" />
        </Select>
        <Button onClick={() => addToCart(product)}>
          <div>
            <img src="/icons/bag-btn.png" alt="btnIcon" />
            <strong>ADD</strong>
          </div>
        </Button>
      </ItemDetail>

      <Details>
        <ButtonDetails>
          <span>DETAILS</span>
        </ButtonDetails>

        <ButtonDetails>
          <span>SIMILAR ITEMS</span>
        </ButtonDetails>

        <ButtonDetails>
          <span>REVIEWS(324)</span>
        </ButtonDetails>
        <div>
          <img src="/icons/start-black.png" alt="start" />
          <img src="/icons/start-black.png" alt="start" />
          <img src="/icons/start-black.png" alt="start" />
          <img src="/icons/star-withe-and-black.png" alt="start" />
        </div>
      </Details>
    </Container>
  );
}
