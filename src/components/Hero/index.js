import React, { useState, useEffect } from 'react';

import { Container, Image, Description } from './styles';

export default function Hero() {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);

    return () => setMount(false);
  }, []);

  return (
    <Container mount={mount}>
      <Image background="/hero/girl-left.png" id="bottom" />
      <Image background="/hero/girl-right.png" id="top" />
      <Description />
    </Container>
  );
}
