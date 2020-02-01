/* eslint-disable react/jsx-fragments */
import React, { useEffect, Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { useLazyQuery } from '@apollo/react-hooks';
import { Token } from '../../graphql/gql/auth';
import { userToken, invalidUser } from '../../store/modules/user/actions';
import reduxPersit from '../../../utils/reduxPersist';

function Container({ children }) {
  const dispatch = useDispatch();

  const [getToken, { called }] = useLazyQuery(Token, {
    fetchPolicy: 'network-only',
    onCompleted: Tdata => {
      const { validateToken } = Tdata;
      if (validateToken.isValid) {
        dispatch(userToken(validateToken));
      } else {
        dispatch(invalidUser({ isValid: false }));
      }
    }
  });

  useEffect(() => {
    const { accessToken } = reduxPersit.token();

    if (accessToken) {
      getToken({ variables: { token: accessToken } });
    }
  }, [called]);

  return <Fragment>{children}</Fragment>;
}

export default Container;
