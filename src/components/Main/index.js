import React, { useContext , useEffect, useRef} from 'react';
import { useInView } from 'react-intersection-observer'
import {Context} from '../../context';
import { MainContainer } from './styles';




export default function Main({ children }) {
  const isBrowser = typeof window !== `undefined`
  const element = useRef(null);
  const[state]= useContext(Context);

 
  
 

  return <MainContainer isScroll={state.isScroll}  >{children}</MainContainer>;
}
