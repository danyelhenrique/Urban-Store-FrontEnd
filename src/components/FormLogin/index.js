import React, { useReducer, useContext } from 'react';
import { gql } from 'apollo-boost';
import { useMutation } from '@apollo/react-hooks';
import { Context } from '../../context';
import { localForageToken } from '../../../config/localForage';
import {sucess , error} from '../../toasty/singInSingUp';
import { useRouter } from 'next/router'

import {
  Form,
  SocialContainer,
  Social,
  Icon,
  Button,
  InputContainer,
} from './styles';

const INITIAL_STATE = {
  email: '',
  name: '',
  password: null,
  confirmPassword: null,
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

const ADD_TODO = gql`
  mutation signUp($name: String!, $email: String!, $password: String!) {
    storeUser(data: { name: $name, email: $email, password: $password }) {
      id
      name
    }
  }
`;

const SIGN_IN = gql`
  mutation signUp($email: String!, $password: String!) {
    loginUser(data: { email: $email, password: $password }) {
      token
    }
  }
`;

export default function Login() {
  const router = useRouter()

  const [state, dispatch] = useContext(Context);
  const [stateForm, dispatchForm] = useReducer(reducer, INITIAL_STATE);
  const [signUp, { data }] = useMutation(ADD_TODO, {
    onCompleted: ( _ ) => dispatch({ type: '@SliderLoginPage' }),
    onError:( _ )=> console.error('error'),
  });

  const [signIn, { data: signInData }] = useMutation(SIGN_IN, {
    onCompleted: async ({ loginUser }) => {
      const singinSignUpUrl = router.pathname
      const lastUrl = state.lastUrl !== singinSignUpUrl ? state.lastUrl : '/store'

      try {
        dispatch({ type: '@USER_SIGN_IN' , payload:loginUser });
        sucess()
        router.push(lastUrl, lastUrl);
      } catch (error) {
        error()
        console.error('fail to authenticate user.')
      }

    },
    onError: ( _ ) => error()
  });

  function handleForm(e) {
    e.preventDefault();
    const { name , email , password} = stateForm;
    // const { email } = stateForm;
    // const { password } = stateForm;
    if (state && state.isSignUpSlider) {
      signUp({ variables: { name, email, password } });
    }

    if (state && state.isSignInSlider) {
      signIn({ variables: { email, password } });
    }
  }

  return (
    <Form background={state.formBackground} onSubmit={(e) => handleForm(e)}>
      <h1>
        {' '}
        {state && state.isSignUpSlider ? 'Create Account' : 'Sign in'}
      </h1>

      <SocialContainer>
        <Social href="#" class="social">
          <Icon icon="/social/google.svg" />
        </Social>
        <Social href="#" class="social">
          <Icon icon="/social/facebook.svg" />
        </Social>
        <Social href="#" class="social">
          <Icon icon="/social/twiter.svg" />
        </Social>
      </SocialContainer>
      {state && state.isSignUpSlider && (
      <span>or use your email for registration</span>
      )}

      <InputContainer>
        {state && state.isSignUpSlider && (
        <input
          autoComplete="off"
          type="text"
          name="name"
          placeholder="Name"
          onChange={(e) => dispatchForm({ type: '@NAME_CHANGE', payload: e.target.value })}
        />
        )}
        <input
          autoComplete="off"
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) => dispatchForm({ type: '@EMAIL_CHANGE', payload: e.target.value })}
        />
      </InputContainer>
      <InputContainer>
        <input
          autoComplete="off"
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => dispatchForm({ type: '@PASSWORD_CHANGE', payload: e.target.value })}
        />
      </InputContainer>
      {state && state.isSignUpSlider && (
      <InputContainer>
        <input
          autoComplete="off"
          type="password"
          name="confirm-passwod"
          placeholder="Confirm you Password"
          onChange={(e) => dispatchForm({
						  type: '@CONFIRM_PASSWORD_CHANGE',
						  payload: e.target.value,
          })}
        />
      </InputContainer>
      )}
      <Button>
        {' '}
        {state && state.isSignUpSlider ? 'Sign Up' : 'Sign In'}
      </Button>
    </Form>
  );
}
