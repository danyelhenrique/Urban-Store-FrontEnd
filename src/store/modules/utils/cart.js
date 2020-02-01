export function SumCartItems(state, payload) {
  const cartSum = state.cart.reduce((accumulator, currentValue) => {
    const sum = accumulator + Number(currentValue.data_price);

    return sum;
  }, 0);

  const total = Number(payload.data_price) + cartSum;
  const cartValues = { ...state.cartValues, total };

  return cartValues;
}

export function SubCartItems(state) {
  const cartSum = state.cart.reduce((accumulator, currentValue) => {
    const sum = accumulator - Number(currentValue.data_price);

    return sum;
  }, 0);

  const total = Math.abs(cartSum);

  const cartValues = { ...state.cartValues, total };

  return cartValues;
}
