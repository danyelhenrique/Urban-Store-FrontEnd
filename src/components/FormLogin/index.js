import React, { useReducer, useContext } from "react";
import { Context } from "../../context";

import { useMutation } from "@apollo/react-hooks";

import {
  Form,
  SocialContainer,
  Social,
  Icon,
  Button,
  InputContainer
} from "./styles";

const INITIAL_STATE = {
  email: '',
  password: null,
  confirmPassword: null
}

function reducer(state, action) {
  switch (action.type) {
    case '@EMAIL_CHANGE':
      return { ...state, email: action.payload };
    case '@PASSWORD_CHANGE':
      return { ...state, password: action.payload };
    case '@CONFIRM_PASSWORD_CHANGE':
      return { ...state, confirmPassword: action.payload };
    default:
      return state;
  }
}

export default function Login() {
  const [state] = useContext(Context);
	const [ stateForm, dispatchForm ] = useReducer(reducer, INITIAL_STATE);

  console.log(stateForm)
  return (
    <Form background={state.formBackground}>
      <h1> {state && state.isSignUpSlider ? "Create Account" : "Sign in"}</h1>

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
        <input
          autoComplete="off"
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) => dispatchForm({ type: '@EMAIL_CHANGE' , payload: e.target.value})}
      />
      </InputContainer>
      <InputContainer>
        <input
          autoComplete="off"
          type="password"
          name="password"
          placeholder="Password"
          onChange={(e) => dispatchForm({ type: '@PASSWORD_CHANGE' , payload: e.target.value})}
        />
      </InputContainer>
      {state && state.isSignUpSlider && (
        <InputContainer>
          <input
            autoComplete="off"
            type="password"
            name="confirm-passwod"
            placeholder="Confirm you Password"
            onChange={(e) => dispatchForm({ type: '@CONFIRM_PASSWORD_CHANGE' , payload: e.target.value})}
          />
        </InputContainer>
      )}
      <Button> {state && state.isSignUpSlider ? "Sign Up" : "Sign In"}</Button>
    </Form>
  );
}
