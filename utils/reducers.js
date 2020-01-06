import { localForageBag, localForageCart } from "./localForage";

export function clearBagDuplicateItems(state, payload) {
  const isItemtemExists = state.userBag.find(item => item.id === payload.id);

  if (isItemtemExists) return state;

  localForageBag(state, payload);

  return { ...state, userBag: [...state.userBag, payload] };
}


export function CalcCartItems(state, payload) {
  const isItemtemExists = state.cart.find(item => item.id === payload.id);

  if (isItemtemExists) return state;

  localForageCart(state, payload);


  const cartSum = state.cart.reduce((accumulator, currentValue) =>{
      const sum = accumulator + Number(currentValue.data_price)

      return sum
  }, 0)

  const total = Number( payload.data_price) + cartSum

  return { ...state, cart: [...state.cart, payload] , cartValues: {
    order: state.cartValues.order,
    total,
    discont:  state.cartValues.discont,
    shipping: state.cartValues.shipping
  } };
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


export function checkout(state ) {

  if(!state.isLogin){
    console.log('fail to checkout')
    return  {...state}
  }
  return {...state}
}