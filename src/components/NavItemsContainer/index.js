import React from 'react';

import { Container } from './styles';

export default function NavItems({children , active,setActive}) {

  const handleModalLinks = _ =>{
    setActive(!active)
  }
  return (
    <Container 
    active={active}
    onMouseOver={_ => setActive(true)}
    onMouseOut={ _ => setActive(false)}
    >
        {children}
    </Container>
  );
}
