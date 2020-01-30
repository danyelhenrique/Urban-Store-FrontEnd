import React, { useContext, useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';

import { useMutation } from '@apollo/react-hooks';
import { debounce } from 'lodash';
import { SIGN_IN, SIGN_UP } from '../../graphql/gql/auth';

import { Context } from '../../context';

import { sucess, error } from '../../toasty';
import { userSigin } from '../../store/modules/user/actions';
import InputContainerItem from './InputContainerItem';
import Social from './SocialLogin';

import { Form, Button, InputContainer } from './styles';

export default function Login() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [form, setForm] = useState({});

  const [state] = useContext(Context);

  const [signUp] = useMutation(SIGN_UP, {
    onCompleted: () => {
      SignIn();
    },
    onError: () => error('fail to create accout.')
  });

  const [signIn] = useMutation(SIGN_IN, {
    onCompleted: ({ loginUser: data }) => {
      const singinSignUpUrl = router.pathname;
      const lastUrl =
        state.lastUrl !== singinSignUpUrl ? state.lastUrl : '/store';
      dispatch(userSigin(data));
      sucess('sucess to sing-in wait to redirect.');
      // router.push(lastUrl, lastUrl);
    },
    onError: () => error('fail to authenticate user.')
  });

  function SignIn() {
    const { email, password } = form;
    signIn({ variables: { email, password } });
  }

  function SignUp() {
    const { name, email, password } = form;
    signUp({ variables: { name, email, password } });
  }

  function handleForm(e) {
    e.preventDefault();
    if (state && state.isSignUpSlider) {
      return SignUp();
    }
    if (state && state.isSignInSlider) {
      return SignIn();
    }
  }

  const debounceDispatch = debounce(
    ({ type, payload }) => dispatchForm({ type, payload }),
    500
  );

  function handleInput({ target }) {
    const { value } = target;

    setForm({ ...form, [target.name]: value });
  }

  return (
    <Form
      background={state.formBackground}
      onSubmit={e => handleForm(e)}
      isSignUp={state.isSignUpSlider}
    >
      <h1>{state && state.isSignUpSlider ? 'Create Account' : 'Sign in'}</h1>

      <Social />
      {state && state.isSignUpSlider && (
        <span>or use your email for registration</span>
      )}
      <InputContainer>
        <InputContainerItem
          isVisible={state.isSignUpSlider}
          autoComplete="off"
          type="name"
          name="name"
          placeholder="Name"
          onChange={e => handleInput(e)}
        />
        <InputContainerItem
          isVisible
          autoComplete="off"
          type="email"
          name="email"
          placeholder="Email"
          onChange={e => handleInput(e)}
        />
        <InputContainerItem
          isVisible
          autoComplete="off"
          type="password"
          name="password"
          placeholder="Password"
          onChange={e => handleInput(e)}
        />
        <InputContainerItem
          isVisible={state.isSignUpSlider}
          autoComplete="off"
          type="password"
          name="confirm-passwod"
          placeholder="Confirm you Password"
          onChange={e => handleInput(e)}
        />
        <Button>{state && state.isSignUpSlider ? 'Sign Up' : 'Sign In'}</Button>
      </InputContainer>
    </Form>
  );
}
