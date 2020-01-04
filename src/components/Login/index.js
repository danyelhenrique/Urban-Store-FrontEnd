import React, { useState, useContext } from "react";
import { Context } from "../../context";
import { useMutation } from "@apollo/react-hooks";
import FormLogin from "../FormLogin";

import {
  Container,
  Image,
  SignUpContainer,
  SignInContainer,
  Ghost,
  Button
} from "./styles";

import { gql } from "apollo-boost";

const ADD_TODO = gql`
  mutation AddTodo($type: String!) {
    addTodo(type: $type) {
      id
      type
    }
  }
`;

export default function Login() {
  const [state, dispatch] = useContext(Context);

  return (
    <Container>
      <Image
        signIn={state.isSignInSlider}
        signUp={state.isSignUpSlider}
        background={state.loginPageBackground}
      >
        <Ghost>
          <h2>Hello, Friend!</h2>
          <span>Enter your personal details and start journey with us</span>
          <Button ghost onClick={() => dispatch({ type: "@SliderLoginPage" })}>
            Sing Up
          </Button>
        </Ghost>

        <Ghost>
          <h2> Welcome Back!</h2>
          <span>
            To keep connected with us please login with your personal info
          </span>
          <Button ghost onClick={() => dispatch({ type: "@SliderLoginPage" })}>
            Sing In
          </Button>
        </Ghost>
      </Image>
      <SignInContainer signIn={state.isSignInSlider}>
        <FormLogin />
      </SignInContainer>

      <SignUpContainer signUp={state.isSignUpSlider}>
        <FormLogin />
      </SignUpContainer>
    </Container>
  );
}
