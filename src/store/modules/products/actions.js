import Types from '../../types';

function products(payload) {
  return {
    type: Types.PRODUCT_STATE,
    payload
  };
}

export { products };
