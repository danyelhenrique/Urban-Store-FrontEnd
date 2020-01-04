import { localForageBag, localForageCart } from "./localForage";

export function clearBagDuplicateItems(state, payload) {
  const isItemtemExists = state.userBag.find(item => item.id === payload.id);

  if (isItemtemExists) return state;

  localForageBag(state, payload);

  return { ...state, userBag: [...state.userBag, payload] };
}

export function clearCartDuplicateItems(state, payload) {
  const isItemtemExists = state.cart.find(item => item.id === payload.id);

  if (isItemtemExists) return state;

  localForageCart(state, payload);

  return { ...state, cart: [...state.cart, payload] };
}

const reverteImage = (value1, value2) => {
  const value1Reverse = value2;
  const value2Reverse = value1;

  return { formBackground: value1Reverse, loginPageBackground: value2Reverse };
};

export function SliderLoginPage(state) {
  const { formBackground, loginPageBackground } = reverteImage(
    state.formBackground,
    state.loginPageBackground
  );
  return {
    ...state,
    isSignInSlider: !state.isSignInSlider,
    isSignUpSlider: !state.isSignUpSlider,
    formBackground,
    loginPageBackground
  };
}
