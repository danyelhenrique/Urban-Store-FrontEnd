import { useState } from 'react';

import { useMutation } from '@apollo/react-hooks';
import useSignIn from './useSigIn';

import { loadSingInSumit } from '../store/modules/signInSlider/actions';

import { SIGN_UP } from '../graphql/gql/auth';

import { error } from '../toasty';

export default function UseSignUp() {
  const [variables, setVariables] = useState({});
  const [signIn] = useSignIn();

  const [signUp] = useMutation(SIGN_UP, {
    variables,
    onCompleted: () => {
      signIn({ variables: { ...variables } });
    },
    onError: () => {
      error('fail to create accout.');
      loadSingInSumit(false);
    }
  });

  return [signUp, variables, setVariables];
}
