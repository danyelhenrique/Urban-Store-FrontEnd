import Types from '../../types';

const INITIAL_STATE = {
  isUserModalOpen: false,
  isBagModalOpen: false
};
function modal(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.IS_USER_MODAL_OPEN:
      return { ...state, isUserModalOpen: !state.isUserModalOpen };
    case Types.IS_BAG_MODAL_OPEN:
      return { ...state, isBagModalOpen: !state.isBagModalOpen };
    default:
      return state;
  }
}

export default modal;
