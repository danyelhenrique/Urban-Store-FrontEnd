import React, { useReducer, useEffect } from 'react';
import localForage ,{localForageToken} from '../../config/localForage'
import useLocalForage from '../hooks/useLocalForage'


import reducer from './reducer'

import TypeOfState from './state';

const INITIAL_STATE = { ...TypeOfState };

export const Context = React.createContext({});

const dbNameCart = '@URBARN-STORAGE-CART';

const dbToken = '@STORE-TOKEN';


export default function context({ children }) {
  const [data]= useLocalForage(dbNameCart, localForage)
  const [token]= useLocalForage(dbToken, localForageToken)

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(()=>{
    dispatch({ type: '@USER_SIGN_IN' , payload: {token} });
  },[token])

  useEffect(()=>{
    dispatch({type: '@@INITIAL_CART' , payload: data})
  },[data])

  return (
      <Context.Provider value={[state, dispatch]} >{children}</Context.Provider>
  );
}

