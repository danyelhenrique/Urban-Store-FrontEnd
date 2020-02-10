import React from 'react';

import { useRouter } from 'next/router';

import { useSelector, useDispatch } from 'react-redux';

import { Tooltip } from 'react-tippy';

import FormLogin from '../FormLogin';
import SignIn from '../FormLogin/SignIn';
import SignUp from '../FormLogin/SignUp';

// import Icon from '../Icon';

import {
  signInSlider,
  signUpSlider
} from '../../store/modules/signInSlider/actions';

import {
  Section,
  Back,
  Btn,
  Container,
  Image,
  SignUpContainer,
  SignInContainer,
  Ghost,
  Button
} from './styles';

export default function Login() {
  const dispatch = useDispatch();

  const router = useRouter();

  const { isSignInSlider, isSignUpSlider } = useSelector(
    state => state.signInSlider
  );

  return (
    <Section>
      <Back>
        <Tooltip
          title="Back to store"
          position="bottom"
          trigger="mouseenter"
          arrow="true"
          theme="dark"
        >
          <Btn type="button" onClick={() => router.push('/store', '/store')}>
            <img src="/arrow_back.png" alt="icon-back" />
            <span> Back to store </span>
          </Btn>
        </Tooltip>
      </Back>

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
          <SignIn />
        </SignInContainer>

        <SignUpContainer signUp={isSignUpSlider}>
          <SignUp />
        </SignUpContainer>
      </Container>
    </Section>
  );
}
