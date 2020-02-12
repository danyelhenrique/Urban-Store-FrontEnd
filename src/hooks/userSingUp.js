import { useState } from 'react';
import { useDispatch } from 'react-redux';

import client from '../../services/apollo';

import useSignIn from './useSigIn';

import { loadSingInSumit } from '../store/modules/signInSlider/actions';

import { SIGN_UP } from '../graphql/gql/auth';

import { error } from '../toasty';

export default function UseSignUp() {
  const [signIn] = useSignIn();
  const dispatch = useDispatch();

  async function signUp({ variables }) {
    try {
      await client.request(SIGN_UP, { ...variables });
      signIn({ variables: { ...variables } });
    } catch (err) {
      error('fail to create accout.');
      dispatch(loadSingInSumit(false));
    } finally {
      dispatch(loadSingInSumit(false));
    }
  }

  return [signUp];
}
