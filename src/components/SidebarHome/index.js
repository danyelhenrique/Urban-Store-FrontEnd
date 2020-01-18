import React from 'react';

import {
  Container, Logo, FullHeightContainer, Span,
} from './styles';

const full = false;


function fullSidebar({load}) {
  if (!load) {
    return (
      <Span>
        <span>Clothes for all types of styles</span>
      </Span>
    );
  }
  return (
    <FullHeightContainer active={load}>
      <span>Clothes for all types of styles</span>
      <nav>
        <li>
          <a href="#/">Wommen's</a>
          <a href="#/">Men's</a>
          <a href="#/">Baby</a>
          <a href="#/">Girls</a>
          <a href="#/">Boys</a>
        </li>
      </nav>
      <img src="/boy.jpg" alt="boy" />
      <img src="/girl.jpg" alt="girl" />
    </FullHeightContainer>
  );
}

export default function SidebarHome({load}) {
  return (
    <Container active={load}>
      <Logo>
          <img src="/logo.png" alt="logo" />
      </Logo>
      <FullHeightContainer>
      <span>Clothes for all types of styles</span>
      <nav>
        <li>
          <a href="#/">Wommen's</a>
          <a href="#/">Men's</a>
          <a href="#/">Baby</a>
          <a href="#/">Girls</a>
          <a href="#/">Boys</a>
        </li>
      </nav>
      <img src="/boy.jpg" alt="boy" />
      <img src="/girl.jpg" alt="girl" />
    </FullHeightContainer>

    </Container>
  );
}
