import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import FormLogin from '../FormLogin';

import {
  signInSlider,
  signUpSlider
} from '../../store/modules/signInSlider/actions';

import {
  Section,
  Container,
  Image,
  SignUpContainer,
  SignInContainer,
  Ghost,
  Button
} from './styles';

export default function Login() {
  const dispatch = useDispatch();
  const { isSignInSlider, isSignUpSlider } = useSelector(
    state => state.signInSlider
  );

  return (
    <Section>
      <Container>
        <Image signIn={isSignInSlider} signUp={isSignUpSlider}>
          <Ghost>
            <h2>Hello, Friend!</h2>
            <span>Enter your personal details and start journey with us</span>
            <Button ghost onClick={() => dispatch(signUpSlider())}>
              Sing Up
            </Button>
          </Ghost>

          <Ghost>
            <h2> Welcome Back!</h2>
            <span>
              To keep connected with us please login with your personal info
            </span>
            <Button ghost onClick={() => dispatch(signInSlider())}>
              Sing In
            </Button>
          </Ghost>
        </Image>
        <SignInContainer signIn={isSignInSlider}>
          <FormLogin />
        </SignInContainer>

        <SignUpContainer signUp={isSignUpSlider}>
          <FormLogin />
        </SignUpContainer>
      </Container>
    </Section>
  );
}
