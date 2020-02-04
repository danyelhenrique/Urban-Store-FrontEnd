import React from 'react';
import Link from 'next/link';

import Logo from '../Logo';

import { Container, Header, FullHeightContainer, Nav, Image } from './styles';

export default function SidebarHome({ load }) {
  return (
    <Container active={load}>
      <Header>
        <Logo />
        {!load && <span>Clothes for all types of styles.</span>}
      </Header>
      <FullHeightContainer>
        <Nav>
          <span>Clothes for all types of styles.</span>
          <nav>
            <li>
              <Link href="/store" as="/store">
                <a>Wommen's</a>
              </Link>
            </li>
            <li>
              <Link href="/store" as="/store">
                <a>Men's</a>
              </Link>
            </li>
            <li>
              <Link href="/store" as="/store">
                <a>Baby</a>
              </Link>
            </li>
            <li>
              <Link href="/store" as="/store">
                <a>Girls</a>
              </Link>
            </li>
            <li>
              <Link href="/store" as="/store">
                <a>Boys</a>
              </Link>
            </li>
          </nav>
        </Nav>
        <Image>
          <img src="/_models/boy4.jpg" alt="boy" />
          <img src="/_models/girl10.jpg" alt="girl" />
        </Image>
      </FullHeightContainer>
    </Container>
  );
}
