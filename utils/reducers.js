import { localForageBag, localForageCart, removeItem, removeToken , storeToken} from "./localForage";

export function clearBagDuplicateItems(state, payload) {
  const isItemtemExists = state.userBag.find(item => item.id === payload.id);

  if (isItemtemExists) return state;

  localForageBag(state, payload);

  return { ...state, userBag: [...state.userBag, payload] };
}

function SumCartItems(state, payload) {
  const cartSum = state.cart.reduce((accumulator, currentValue) => {
    const sum = accumulator + Number(currentValue.data_price);

    return sum;
  }, 0);

  const total = Number(payload.data_price) + cartSum;

  const cartValues = {
    order: state.cartValues.order,
    qnt: state.cartValues.qnt,
    total,
    discont: state.cartValues.discont,
    shipping: state.cartValues.shipping
  };

  return cartValues;
}


function SubCartItems(state) {
  const cartSum = state.cart.reduce((accumulator, currentValue) => {
    const sum = accumulator - Number(currentValue.data_price);

    return sum;
  }, 0);

  const total = Math.abs(cartSum);

  const cartValues = {
    order: state.cartValues.order,
    qnt: state.cartValues.qnt,
    total,
    discont: state.cartValues.discont,
    shipping: state.cartValues.shipping
  };

  return cartValues;
}


export function clearCartDuplicateItems(state, payload) {
  const isItemtemExists = state.cart.find(item => item.id === payload.id);

  if (isItemtemExists) return state;

  localForageCart(state, payload);

  const cartValues = SumCartItems(state, payload);

  payload.qntRequest = 1;

  return {
    ...state,
    cart: [...state.cart, payload],
    cartValues
  };
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

export function checkout(state) {
  if (!state.isLogin) {
    console.log("fail to checkout");
    return { ...state };
  }
  return { ...state };
}

export function removeItemFromCart(state, payload) {
  const items = state.cart.filter(cartItem => cartItem.id !== payload.id);

  removeItem(payload.id)

  const newState = {
    ...state,
    cart: [...items]
  };

  const cartValues = SubCartItems(newState);

  return {
    ...newState,
    cartValues: { ...cartValues }
  };
}


export function intialCartItems(state , data) {
  const total = data.reduce((accumulator, currentValue) => {
    const sum = accumulator + Number(currentValue.data_price);

    return sum;
  }, 0);
  
  const cartValues = {
    order: state.cartValues.order,
    qnt: state.cartValues.qnt,
    total,
    discont: state.cartValues.discont,
    shipping: state.cartValues.shipping
  };


  return {
    ...state,
    cart: data,
    cartValues
  }
}


export function signUp(state){
  removeToken()
  return { ...state, isLogin: false };
}

export  function signIn(state , payload){
  if(!payload || !payload.token) return { ...state, isLogin: false }

   storeToken(payload)

  return { ...state, isLogin: true };
}

export function userkModalOpen (state) {
  const isUserModalOpen = !state.isUserModalOpen;
  
  document.body.style.overflow = isUserModalOpen ? "hidden" : "";

  return { ...state, isUserModalOpen};

}

export function bagModalOpen (state) {
  const isBagModalOpen = !state.isBagModalOpen;
  document.body.style.overflow = isBagModalOpen ? "hidden" : "";

  return { ...state, isBagModalOpen};
}

export function MoreQntItem(state , payload){
  const newState= {...state}

  const index = newState.cart.findIndex(item => item.id === payload.id);

  if (newState.cart[index].qntRequest >= newState.cart[index].qnt ) return state;

  newState.cart[index].qntRequest += 1

  return {
    ...newState,
  };

}