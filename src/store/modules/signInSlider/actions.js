import Types from '../../types';

function signInSlider() {
  return {
    type: Types.SIGN_IN_SLIDER
  };
}

function signUpSlider() {
  return {
    type: Types.SIGN_UP_SLIDER
  };
}

function latUrlSingIn(payload) {
  return {
    type: Types.SIGN_UP_SLIDER,
    payload
  };
}

function loadSingInSumit(payload) {
  return {
    type: Types.LOAD_SIGN_IN_SUBMIT,
    payload
  };
}

export { signInSlider, signUpSlider, latUrlSingIn, loadSingInSumit };
