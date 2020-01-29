import React, { useContext, useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import styled from 'styled-components';
import Items from '../Items';
import { Section, Container } from './styles';
import { Context } from '../../context';

export const Div = styled.div`
  width: 100%;
  height: 40px;
  background: transparent;

  display: flex;
  align-items: center;
  justify-content: center;
`;

const Data = gql`
  query getProducts($page: Int) {
    indexProduct(page: $page, limit: 10) {
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

export default function MainStore() {
  const [, dispatch] = useContext(Context);
  const [page, setPage] = useState(1);

  const [ref, inView] = useInView({
    threshold: 0
  });

  const { fetchMore, client } = useQuery(Data, {
    onCompleted: items => {
      populateSateWithProducts(items);
    },
    variables: { page }
  });

  useEffect(() => {
    if (inView) handleMore();
  }, [inView]);

  function populateSateWithProducts(items) {
    const ITEM_WITH_MOCK_QNT = items.indexProduct.map(item => {
      item.qnt = Math.floor(Math.random() * 10);
      return item;
    });
    dispatch({
      type: '@PRODUCT_STATE',
      payload: ITEM_WITH_MOCK_QNT
    });
  }

  async function handleMore() {
    await client.resetStore();
    setPage(page + 1);

    fetchMore({
      query: Data,
      variables: { page },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult.indexProduct.length <= 0) {
          return { ...prev };
        }
        return { ...prev, ...fetchMoreResult };
      }
    });
  }

  return (
    <Section>
      <Container>
        <Items />
        <Div ref={ref} />
      </Container>
    </Section>
  );
}
