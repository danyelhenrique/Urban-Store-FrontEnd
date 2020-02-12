import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useInView } from 'react-intersection-observer';

import client from '../../../services/apollo';

import { products, productLoading } from '../../store/modules/products/actions';

import { products as prodData } from '../../graphql/gql/products';

import Spinner from '../Spinner';

import Items from '../Items';
import { Section, Container } from './styles';

export default function MainStore() {
  const dispatch = useDispatch();
  const { loading } = useSelector(state => state.products);

  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const [ref, inView] = useInView({
    threshold: 0
  });

  useEffect(() => {
    if (inView && hasMore) handleMore();
  }, [inView]);

  async function handleMore() {
    dispatch(productLoading(true));

    setPage(page + 1);

    const data = await client.request(prodData, { page });
    if (data && data.indexProduct) {
      dispatch(products(data.indexProduct));
      dispatch(productLoading(false));
      return;
    }
    setHasMore(false);
  }

  return (
    <Section>
      <Container>
        <Items />
        <Spinner handleMore={ref} active={loading} />
      </Container>
    </Section>
  );
}
