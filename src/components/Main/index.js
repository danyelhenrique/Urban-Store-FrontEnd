import React from "react";

import { MainContainer } from './styles';
 
export default function Main({ children ,isFullPage}) {
 
  return <MainContainer isFull={isFullPage}>{children}</MainContainer>;
}

