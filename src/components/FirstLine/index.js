import React from 'react';

import Image from '../Image';
import Sidebar from '../SidebarStore';

import { Container } from './styles';

export default function FirstLine() {
  return (
    <Container>
      <Sidebar />
      <Image />
    </Container>
  );
}
