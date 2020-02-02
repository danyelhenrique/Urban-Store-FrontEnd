import React from 'react';
import LazyLoad from 'react-lazyload';

import { Container, Image, Description } from './styles';

export default function Hero() {
  const url =
    'https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
  return (
    <Container>
      <LazyLoad height="100%">
        <Image src={url} />
      </LazyLoad>
      <Description />
    </Container>
  );
}
