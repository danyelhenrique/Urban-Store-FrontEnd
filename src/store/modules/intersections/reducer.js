import Types from '../../types';

const INITIAL_STATE = {
  isDarkNav: false
};
function intersections(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.IS_DARK_NAV_VISIVLE:
      return { ...state, isDarkNav: action.paylod };
    default:
      return state;
  }
}

export default intersections;
