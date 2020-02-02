import React from 'react';

import { MainContainer } from './styles';

export default function Main({ children, isFullPage, store }) {
  return (
    <MainContainer store={store} isFull={isFullPage}>
      {children}
    </MainContainer>
  );
}
