function mapCartTogetIdAndQnt(cart) {
  const state = [];

  cart.map(({ id, qntRequest }) => {
    const data = state.push({ id: Number(id), qnt: Number(qntRequest) });
    return data;
  });

  return state;
}

export { mapCartTogetIdAndQnt };
