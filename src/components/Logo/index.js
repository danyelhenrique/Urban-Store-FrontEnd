import React from 'react';
import Link from 'next/link';

import { LogoContainer } from './styles';

export default function Logo() {
  return (
    <LogoContainer>
      <Link href="/" as="/">
        <a>URBAN STORE</a>
      </Link>
    </LogoContainer>
  );
}
