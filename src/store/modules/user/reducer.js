import Types from '../../types';

const INITIAL_STATE = {
  isValid: false
};

function product(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.VALIDATE_USER:
      return { ...state, ...action.payload };
    case Types.USER_SIGN_IN:
      return { ...state, ...action.payload };
    case Types.USER_SIGN_UP:
      return { ...state, ...action.payload };
    default:
      return state;
  }
}

export default product;
