import React from 'react';
import { useSelector } from 'react-redux';

import InputContainer from '../InputContainer';
import Social from '../SocialLogin';

import userSingUp from '../../../hooks/userSingUp';

import { Form } from './styles';

export default function SignUp() {
  const { isSignUpSlider } = useSelector(state => state.signInSlider);
  const [signUp, , setVariables] = userSingUp();

  function handleSubmit(data) {
    setVariables(data);
    signUp({ variables: { ...data } });
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h1> Create Account</h1>
      <span>or use your email for registration</span>
      <Social />
      {isSignUpSlider && <InputContainer SingUp />}
    </Form>
  );
}
