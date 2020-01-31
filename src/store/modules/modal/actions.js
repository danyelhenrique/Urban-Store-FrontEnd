import Types from '../../types';

function userModal() {
  return {
    type: Types.IS_USER_MODAL_OPEN
  };
}

function bagModal() {
  return {
    type: Types.IS_BAG_MODAL_OPEN
  };
}

export { userModal, bagModal };
