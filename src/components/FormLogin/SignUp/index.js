import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import InputContainer from '../InputContainer';
import Social from '../SocialLogin';
import { loadSingInSumit } from '../../../store/modules/signInSlider/actions';

import userSingUp from '../../../hooks/userSingUp';
import { warn } from '../../../toasty';

import { SignUpValidator as validator } from '../../../validators/signIn';

import { Form } from './styles';

export default function SignUp() {
  const { isSignUpSlider } = useSelector(state => state.signInSlider);
  const dispatch = useDispatch();

  const [signUp, , setVariables] = userSingUp();

  async function handleSubmit(data) {
    const isValid = await validator.isValid(data);
    
    if (!isValid) return warn('Not valid filds.');

    dispatch(loadSingInSumit());
    setVariables(data);

    return signUp({ variables: { ...data } });
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
