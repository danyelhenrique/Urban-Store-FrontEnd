import React from 'react';

import { useSelector } from 'react-redux';

import InputContainer from '../InputContainer';
import Social from '../SocialLogin';

import useSigIn from '../../../hooks/useSigIn';

import { Form } from './styles';

export default function SignIn() {
  const { isSignInSlider } = useSelector(state => state.signInSlider);
  const [signIn] = useSigIn();

  function handleSubmit(data) {
    signIn({ variables: { ...data } });
  }
  return (
    <Form onSubmit={handleSubmit}>
      <h1>Sign in</h1>
      <Social />
      {isSignInSlider && <InputContainer />}
    </Form>
  );
}
