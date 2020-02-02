import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useQuery } from '@apollo/react-hooks';

import { useInView } from 'react-intersection-observer';

import { products } from '../../store/modules/products/actions';
import { products as prodData } from '../../graphql/gql/products';

import { fetchMoreItems, mockItemsWithQnt } from '../../../utils/product';
import Spinner from '../Spinner';

import Items from '../Items';
import { Section, Container } from './styles';


export default function MainStore() {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const [ref, inView] = useInView({
    threshold: 0
  });

  const { fetchMore, client } = useQuery(prodData, {
    onCompleted: items => {
      if (items && items.indexProduct) {
        populateSateWithProducts(items);
      }
    },
    variables: { page }
  });

  useEffect(() => {
    if (inView) handleMore();
  }, [inView]);

  function populateSateWithProducts({ indexProduct }) {
    const productsItems = mockItemsWithQnt(indexProduct);
    dispatch(products(productsItems));
  }

  async function handleMore() {
    await client.resetStore();
    setPage(page + 1);

    const data = { fetchQuery: fetchMore, query: prodData, page };

    fetchMoreItems(data);
  }

  return (
    <Section>
      <Container>
        <Items />
        <Spinner handleMore={ref} />
      </Container>
    </Section>
  );
}
