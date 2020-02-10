import React from 'react';
import Link from 'next/link';

import { Container, Description, Error } from './styles';

export default function NotFound() {
  return (
    <Container>
      <Error />
      <Description>
        <strong>404</strong>
        <span>
          RESOURCES NOT FOUND{' '}
          <Link href="/store">
            <a>
              GO BACK TO STORE
              <div />
              <div />
            </a>
          </Link>
        </span>
      </Description>
    </Container>
  );
}
