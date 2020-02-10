import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import {
  signInSlider,
  signUpSlider
} from '../../../store/modules/signInSlider/actions';

import { ButtonContainer as Container, Button } from './styles';

export default function ButtonContainer() {
  const dispatch = useDispatch();
  const { loadSignSubmit, isSignInSlider, isSignUpSlider } = useSelector(
    state => state.signInSlider
  );

  function handleSilder() {
    if (isSignInSlider) {
      return dispatch(signUpSlider());
    }
    return dispatch(signInSlider());
  }

  return (
    <Container>
      {isSignUpSlider && (
        <Button
          type="submit"
          disabled={loadSignSubmit}
          onClick={() => dispatch(signUpSlider())}
        >
          Sign Up
        </Button>
      )}
      {isSignInSlider && (
        <Button
          type="submit"
          disabled={loadSignSubmit}
          onClick={() => dispatch(signInSlider())}
        >
          Sign In
        </Button>
      )}

      <Button
        type="submit"
        disabled={loadSignSubmit}
        BtnMaxWidth
        className="BtnMaxWidth"
        onClick={handleSilder}
      >
        {isSignUpSlider ? 'Sign In' : 'Sign Up'}
      </Button>
    </Container>
  );
}
