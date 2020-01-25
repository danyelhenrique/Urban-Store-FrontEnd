import React, { useReducer, useContext, useCallback } from 'react';
import { useRouter } from 'next/router';

import { useMutation } from '@apollo/react-hooks';
import { debounce } from 'lodash';
import { SIGN_IN, SIGN_UP } from '../../graphql/gql/auth';

import { Context } from '../../context';

import { sucess, error } from '../../toasty';

import {
  Form,
  SocialContainer,
  Social,
  Icon,
  Button,
  InputContainer,
  InputContainerItem
} from './styles';

const INITIAL_STATE = {
  email: '',
  name: '',
  password: null,
  confirmPassword: null
};

function reducer(state, action) {
  switch (action.type) {
    case '@EMAIL_CHANGE':
      return { ...state, email: action.payload };
    case '@NAME_CHANGE':
      return { ...state, name: action.payload };
    case '@PASSWORD_CHANGE':
      return { ...state, password: action.payload };
    case '@CONFIRM_PASSWORD_CHANGE':
      return { ...state, confirmPassword: action.payload };
    default:
      return state;
  }
}

export default function Login({ isSignUp }) {
  const router = useRouter();

  const [state, dispatch] = useContext(Context);
  const [stateForm, dispatchForm] = useReducer(reducer, INITIAL_STATE);

  const [signUp] = useMutation(SIGN_UP, {
    onCompleted:() => {
      SignIn();
    },
    onError:() => error('fail to create accout.')
  });

  const [signIn] = useMutation(SIGN_IN, {
    onCompleted: async ({ loginUser }) => {
      const singinSignUpUrl = router.pathname;
      const lastUrl =
        state.lastUrl !== singinSignUpUrl ? state.lastUrl : '/store';
      // dispatch({ type: '@USER_SIGN_IN', payload: loginUser });
      sucess('sucess to sing-in wait to redirect.');

      // router.push(lastUrl, lastUrl);
    },
    onError:() => error('fail to authenticate user.')
  });

  const SignIn = useCallback(() => {
    const { email, password } = stateForm;
    signIn({ variables: { email, password } });
  }, [stateForm]);

  const SignUp = useCallback(() => {
    const { name, email, password } = stateForm;
    signUp({ variables: { name, email, password } });
  }, [stateForm]);

  const handleForm = useCallback(
    e => {
      e.preventDefault();
      if (state && state.isSignUpSlider) {
        return SignUp();
      }
      if (state && state.isSignInSlider) {
        return SignIn();
      }
    },
    [SignIn, SignUp]
  );

  const debounceDispatch = debounce(
    ({ type, payload }) => dispatchForm({ type, payload }),
    500
  );

  return (
    <Form
      background={state.formBackground}
      onSubmit={e => handleForm(e)}
      isSignUp={state.isSignUpSlider}
    >
      <h1>{state && state.isSignUpSlider ? 'Create Account' : 'Sign in'}</h1>

      <SocialContainer>
        <Social href="#" className="social">
          <Icon icon="/social/google.png" />
        </Social>
        <Social href="#" className="social">
          <Icon icon="/social/facebook.png" />
        </Social>
        <Social href="#" className="social">
          <Icon icon="/social/twiter.png" />
        </Social>
      </SocialContainer>
      {state && state.isSignUpSlider && (
        <span>or use your email for registration</span>
      )}
      <InputContainer>
        <InputContainerItem>
          {state && state.isSignUpSlider && (
            <input
              autoComplete="off"
              type="email"
              name="name"
              placeholder="Name"
              onChange={e =>
                debounceDispatch({
                  type: '@NAME_CHANGE',
                  payload: e.target.value
                })
              }
            />
          )}
          <input
            autoComplete="off"
            type="email"
            name="email"
            placeholder="Email"
            onChange={e =>
              debounceDispatch({
                type: '@EMAIL_CHANGE',
                payload: e.target.value
              })
            }
          />
        </InputContainerItem>
        <InputContainerItem>
          <input
            autoComplete="off"
            type="password"
            name="password"
            placeholder="Password"
            onChange={e =>
              debounceDispatch({
                type: '@PASSWORD_CHANGE',
                payload: e.target.value
              })
            }
          />
        </InputContainerItem>
        {state && state.isSignUpSlider && (
          <InputContainerItem>
            <input
              autoComplete="off"
              type="password"
              name="confirm-passwod"
              placeholder="Confirm you Password"
              onChange={e =>
                debounceDispatch({
                  type: '@CONFIRM_PASSWORD_CHANGE',
                  payload: e.target.value
                })
              }
            />
          </InputContainerItem>
        )}
        <Button>{state && state.isSignUpSlider ? 'Sign Up' : 'Sign In'}</Button>
      </InputContainer>
    </Form>
  );
}
