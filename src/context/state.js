const STATE = {
  isScroll: false,
  isUserModalOpen: false,
  isBagModalOpen: false,
  isLogin: false,
  isSignUpSlider: true,
  isSignInSlider: false,
  formBackground: '/login/oito.jpg',
  loginPageBackground: '/login/cinco.jpg',
  lastUrl: '/store',
  products: [],
  cart: [],
  cartValues: {
    order: 0,
    total: 0,
    discont: 0,
    qnt: 1,
    shipping: 'Free',
  },
};


export default STATE;
