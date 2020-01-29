import React, { useEffect } from 'react';
import { gql } from 'apollo-boost';
import { useLazyQuery } from '@apollo/react-hooks';

const Data = gql`
  query validateToken($token: String) {
    validateToken(token: $token)
  }
`;

const useToken = () => {
  const [getToken] = useLazyQuery(Data, {
    fetchPolicy: 'network-only',
    onCompleted: data => {
      console.log('data', data);
    },
    onError: () => console.log('err')
  });

  useEffect(() => {
    const tokenLocalStorage = localStorage.getItem('@urban-store-tk');

    const { token } = JSON.parse(tokenLocalStorage);

    getToken({ variables: { token } });
  }, []);

  return null;
};


export default useToken;
