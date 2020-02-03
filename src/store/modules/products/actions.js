import Types from '../../types';

function products(payload) {
  return {
    type: Types.PRODUCT_STATE,
    payload
  };
}

function productLoading(payload) {
  return {
    type: Types.PRODUCT_LOADING,
    payload
  };
}

export { products, productLoading };
