import Types from '../../types';

const INITIAL_STATE = {
  isSignInSlider: false,
  isSignUpSlider: true,
  loadSignSubmit: false,
  lastUrl: null
};

function signInSlider(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SIGN_IN_SLIDER:
      return { ...state, isSignInSlider: true, isSignUpSlider: false };
    case Types.SIGN_UP_SLIDER:
      return { ...state, isSignInSlider: false, isSignUpSlider: true };
    case Types.LAST_URL:
      return { ...state, lastUrl: action.payload };
    case Types.LOAD_SIGN_IN_SUBMIT:
      return { ...state, loadSignSubmit: action.payload };
    default:
      return state;
  }
}

export default signInSlider;
