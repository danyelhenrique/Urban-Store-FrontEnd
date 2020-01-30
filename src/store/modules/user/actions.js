import Types from '../../types';

function userToken(payload) {
  return {
    type: Types.VALIDATE_USER,
    payload
  };
}

export { userToken };
