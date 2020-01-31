import Types from '../../types';

function userToken(payload) {
  return {
    type: Types.VALIDATE_USER,
    payload
  };
}

function userSigin(payload) {
  return {
    type: Types.USER_SIGN_IN,
    payload
  };
}

function userSigUp(payload) {
  return {
    type: Types.USER_SIGN_UP,
    payload
  };
}

function userSigOut(payload) {
  return {
    type: Types.USER_SIGN_OUT,
    payload
  };
}

export { userToken, userSigin, userSigUp, userSigOut };
