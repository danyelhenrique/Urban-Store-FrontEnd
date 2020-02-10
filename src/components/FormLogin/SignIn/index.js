import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import InputContainer from '../InputContainer';
import Social from '../SocialLogin';

import { loadSingInSumit } from '../../../store/modules/signInSlider/actions';

import { SignInValidator as validator } from '../../../validators/signIn';

import useSigIn from '../../../hooks/useSigIn';
import { warn } from '../../../toasty';

import { Form } from './styles';

export default function SignIn() {
  const { isSignInSlider } = useSelector(state => state.signInSlider);
  const dispatch = useDispatch();

  const [signIn] = useSigIn();

  async function handleSubmit(data) {
    const isValid = await validator.isValid(data);

    if (!isValid) return warn('Not valid filds.');

    dispatch(loadSingInSumit(true));
    return signIn({ variables: { ...data } });
  }
  return (
    <Form onSubmit={handleSubmit}>
      <h1>Sign in</h1>
      <Social />
      {isSignInSlider && <InputContainer />}
    </Form>
  );
}
