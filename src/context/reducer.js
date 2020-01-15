import {
  intialCartItems,
    clearBagDuplicateItems,
    clearCartDuplicateItems,
    removeItemFromCart,
    userkModalOpen,
    bagModalOpen,
    SliderLoginPage,
    checkout,
    signUp,
    signIn
  } from '../../utils/reducers';


import Types from './types'

function reducer(state, action) {
    switch (action.type) {
      case Types.INITIAL_CART:
        return intialCartItems(state ,action.payload )
      case Types.IS_SCROLL:
        return { ...state, isScroll: action.payload };
      case Types.IS_USER_MODAL_OPEN:
        return userkModalOpen(state);
      case Types.IS_BAG_OPEN:
        return bagModalOpen(state);
      //
      case Types.ADD_BAG:
        return clearBagDuplicateItems(state, action.payload);
      case Types.ADD_CART:
        return clearCartDuplicateItems(state, action.payload);
      case Types.ROOVE_ITEM_FROM_CART:
        return removeItemFromCart(state, action.payload);
      //
      case Types.PRODUCT_STATE:
        return {...state, products:[...action.payload]}
      case Types.SliderLoginPage:
        return SliderLoginPage(state);
      //
      case Types.USER_SIGN_IN:
        return signIn(state, action.payload)
      case Types.USER_SIGN_UP:
        return signUp(state)
      //
      case Types.CHECKOUT:
        return checkout(state);
      //
      case Types.LAST_URL :
        return {...state , lastUrl: action.payload}
      default:
        return state;
    }
  }

export default reducer;