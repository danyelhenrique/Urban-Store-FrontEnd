import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';

import { useMutation } from '@apollo/react-hooks';
// import { debounce } from 'lodash';
import { SIGN_IN, SIGN_UP } from '../../graphql/gql/auth';

import { sucess, error } from '../../toasty';
import { userSigin } from '../../store/modules/user/actions';
import InputContainerItem from './InputContainerItem';
import Social from './SocialLogin';

import { Form, Button, InputContainer } from './styles';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
  confirmPassword: ''
};
export default function Login() {
  const router = useRouter();

  const dispatch = useDispatch();

  const [form, setForm] = useState(INITIAL_STATE);

  const {isSignUpSlider, lastUrl } = useSelector(state => state.signInSlider);

  const [signUp] = useMutation(SIGN_UP, {
    onCompleted: () => SignIn(),
    onError: () => error('fail to create accout.')
  });

  const [signIn] = useMutation(SIGN_IN, {
    onCompleted: ({ loginUser: data }) => {
      const singinSignUpUrl = router.pathname;

      const redirectUrl =
        lastUrl && lastUrl !== singinSignUpUrl ? lastUrl : '/store';

      dispatch(userSigin(data));

      sucess('sucess to sing-in wait to redirect.');

      router.push(redirectUrl, redirectUrl);
    },
    onError: () => error('fail to authenticate user.')
  });

  function SignIn() {
    const { email, password } = form;
    signIn({ variables: { email, password } });
    setForm(INITIAL_STATE);
  }

  function SignUp() {
    const { name, email, password } = form;
    signUp({ variables: { name, email, password } });
  }

  function handleForm(e) {
    e.preventDefault();
    return isSignUpSlider ? SignUp() : SignUp();
  }

  function handleInput({ target }) {
    const { value } = target;

    setForm({ ...form, [target.name]: value });
  }

  return (
    <Form onSubmit={e => handleForm(e)} isSignUp={isSignUpSlider}>
      <h1>{isSignUpSlider ? 'Create Account' : 'Sign in'}</h1>

      <Social />
      {isSignUpSlider && <span>or use your email for registration</span>}
      <InputContainer>
        <InputContainerItem
          isVisible={isSignUpSlider}
          autoComplete="off"
          type="name"
          name="name"
          value={form.name}
          placeholder="Name"
          onChange={e => handleInput(e)}
        />
        <InputContainerItem
          isVisible
          autoComplete="off"
          type="email"
          name="email"
          value={form.email}
          placeholder="Email"
          onChange={e => handleInput(e)}
        />
        <InputContainerItem
          isVisible
          autoComplete="off"
          type="password"
          name="password"
          value={form.password}
          placeholder="Password"
          onChange={e => handleInput(e)}
        />
        <InputContainerItem
          isVisible={isSignUpSlider}
          autoComplete="off"
          type="password"
          name="confirmPassword"
          value={form.confirmPassword}
          placeholder="Confirm you Password"
          onChange={e => handleInput(e)}
        />
        <Button>{isSignUpSlider ? 'Sign Up' : 'Sign In'}</Button>
      </InputContainer>
    </Form>
  );
}
