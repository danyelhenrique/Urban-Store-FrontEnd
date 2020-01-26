import Types from '../../types';

function isNavDarkActive(payload) {
  return {
    type: Types.IS_DARK_NAV_VISIVLE,
    payload
  };
}

export { isNavDarkActive };
