/* eslint-disable react/jsx-fragments */
import React, { useEffect, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { useLazyQuery } from '@apollo/react-hooks';
import { Token } from '../../graphql/gql/auth';
import { userToken } from '../../store/modules/user/actions';

function Container({ children }) {
  const dispatch = useDispatch();
  const [getToken, { called }] = useLazyQuery(Token, {
    fetchPolicy: 'network-only',
    onCompleted: Tdata => {
      const { validateToken } = Tdata;
      if (validateToken.isValid) {
        dispatch(userToken(validateToken));
      } else {
        localStorage.removeItem('@urban-store-tk');
      }
    }
  });

  useEffect(() => {
    const tokenLocalStorage = localStorage.getItem('@urban-store-tk');
    const { token } = JSON.parse(tokenLocalStorage);

    getToken({ variables: { token } });
  }, [called]);

  return <Fragment>{children}</Fragment>;
}

export default Container;
