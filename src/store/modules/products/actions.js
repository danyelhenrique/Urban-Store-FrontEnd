import Types from '../../types';

function products(payload) {
  return {
    type: Types.PRODUCT_STATE,
    payload
  };
}

function product(payload) {
  return {
    type: Types.REQUEST_PRODUCT,
    payload
  };
}

function productLoading(payload) {
  return {
    type: Types.PRODUCT_LOADING,
    payload
  };
}

export { products, product, productLoading };
