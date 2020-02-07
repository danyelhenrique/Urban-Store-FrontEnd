export function SumCartItems(state) {
  const cartSum = state.cart.reduce((accumulator, currentValue) => {
    const sum = accumulator + Number(currentValue.total);

    return sum;
  }, 0);

  const cartValues = { ...state.cartValues, total: cartSum };

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
