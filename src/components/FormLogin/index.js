import React, { useReducer, useContext } from "react";
import { Context } from "../../context";
import { gql } from "apollo-boost";
import { localForageToken } from "../../../config/localForage";

import { useMutation, useApolloClient } from "@apollo/react-hooks";

import {
  Form,
  SocialContainer,
  Social,
  Icon,
  Button,
  InputContainer
} from "./styles";

const INITIAL_STATE = {
  email: "",
  name: "",
  password: null,
  confirmPassword: null
};

function reducer(state, action) {
  switch (action.type) {
    case "@EMAIL_CHANGE":
      return { ...state, email: action.payload };
    case "@NAME_CHANGE":
      return { ...state, name: action.payload };
    case "@PASSWORD_CHANGE":
      return { ...state, password: action.payload };
    case "@CONFIRM_PASSWORD_CHANGE":
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
  const [state, dispatch] = useContext(Context);
  const [stateForm, dispatchForm] = useReducer(reducer, INITIAL_STATE);
  const [signUp, { data }] = useMutation(ADD_TODO, {
    onCompleted: TData => dispatch({ type: "@SliderLoginPage" }),
    onError: error => console.log(error)
  });
  const client = useApolloClient();

  const [signIn, { data: signInData }] = useMutation(SIGN_IN, {
    onCompleted: async ({ loginUser }) => {
      try {
        await localForageToken.setItem("@STORE-TOKEN", loginUser.token);
        dispatch({type: '@USER_SIGN_IN'})
        
      } catch (error) {
        console.log('data err')
      }

    },
    onError: error => console.log('error'),
   
  });

  function handleForm(e) {
    e.preventDefault();
    const name = stateForm.name;
    const email = stateForm.email;
    const password = stateForm.password;
    if (state && state.isSignUpSlider) {
      signUp({ variables: { name, email, password } });
    }

    if (state && state.isSignInSlider) {
      signIn({ variables: { email, password } });
    }
  }

  return (
    <Form background={state.formBackground} onSubmit={e => handleForm(e)}>
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
        {state && state.isSignUpSlider && (
          <input
            autoComplete="off"
            type="text"
            name="name"
            placeholder="Name"
            onChange={e =>
              dispatchForm({ type: "@NAME_CHANGE", payload: e.target.value })
            }
          />
        )}
        <input
          autoComplete="off"
          type="email"
          name="email"
          placeholder="Email"
          onChange={e =>
            dispatchForm({ type: "@EMAIL_CHANGE", payload: e.target.value })
          }
        />
      </InputContainer>
      <InputContainer>
        <input
          autoComplete="off"
          type="password"
          name="password"
          placeholder="Password"
          onChange={e =>
            dispatchForm({ type: "@PASSWORD_CHANGE", payload: e.target.value })
          }
        />
      </InputContainer>
      {state && state.isSignUpSlider && (
        <InputContainer>
          <input
            autoComplete="off"
            type="password"
            name="confirm-passwod"
            placeholder="Confirm you Password"
            onChange={e =>
              dispatchForm({
                type: "@CONFIRM_PASSWORD_CHANGE",
                payload: e.target.value
              })
            }
          />
        </InputContainer>
      )}
      <Button> {state && state.isSignUpSlider ? "Sign Up" : "Sign In"}</Button>
    </Form>
  );
}
