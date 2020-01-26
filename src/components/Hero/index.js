import React, { useState, useEffect } from 'react';

import { Container, Image, Description } from './styles';

export default function Hero() {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);

    return () => setMount(false);
  }, []);
  const url =
    'https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
  return (
    <Container mount={mount}>
      <Image background={url} id="bottom" />
      {/* <Image background="/hero/girl-right.png" id="top" /> */}
      <Description />
    </Container>
  );
}
