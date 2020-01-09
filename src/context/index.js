import React, { useReducer, useEffect } from 'react';
import {localForageToken} from '../../config/localForage'
import reducer from './reducer'

import TypeOfState from './state';

const INITIAL_STATE = { ...TypeOfState };

export const Context = React.createContext({});

export default function context({ children }) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(()=>{
    async function getToken(){
      const token = await localForageToken.getItem('@STORE-TOKEN');
      dispatch({ type: '@USER_SIGN_IN' , payload: {token} });
  }
  getToken()
  },[])

  return (
      <Context.Provider value={[state, dispatch]} >{children}</Context.Provider>
  );
}

