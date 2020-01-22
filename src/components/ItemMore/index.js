import React, { useContext, useState, useEffect } from 'react';

import { useRouter } from 'next/router';

import { useLazyQuery } from '@apollo/react-hooks';

import { gql } from 'apollo-boost';
import { Context } from '../../context';

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
  ButtonDetails,
} from './styles';

const Data = gql`
  query getData($name: String!) {
    showProduct(where: { data_product_display_name: $name }) {
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

export default function ItemMore() {
  const router = useRouter();

  const urlAs = router.query.slug.split('_').join(' ');

  const [state, dispatch] = useContext(Context);
  const [isLoading, setIsLoading] = useState(true);
  const [item, setItem] = useState({});

  const [getData] = useLazyQuery(Data, {
    fetchPolicy: 'network-only',
    onCompleted: item => {
      setItem(item.showProduct);
      setIsLoading(false);
    },
    onError: _ => error('fail to create accout.'),
  });

  useEffect(() => {
    const product = state.products.find(
      produc => produc.data_product_display_name === urlAs,
    );
    if (!product) return getData({ variables: { name: urlAs } });

    setItem(product);
    setIsLoading(false);
  }, []);

  if (isLoading) return <h1>Loading</h1>;

  const {
    id,
    data_front_imageURL,
    data_product_display_name,
    data_back_image_url,
    data_price,
  } = item;

  function addToCart(item) {
    dispatch({ type: '@ADD_CART_ITEM', payload: item });
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
            <span>
${data_price}</span>
          </div>
          <Favorite>
            <img src="/favorite-red.png" alt="favorite" />
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
            <option value="valor1">Select Size</option>
            <option value="valor2">Select Size </option>
            <option value="valor3">Select Size </option>
          </select>
          <img src="/icons/select.png" alt="select" />
        </Select>
        <Button onClick={() => addToCart(item)}>
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
