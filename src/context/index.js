import React, { useReducer, useEffect } from "react";
import localForage from "../../config/localForage";


import {
  clearBagDuplicateItems,
  CalcCartItems,
  SliderLoginPage,
  checkout
} from "../../utils/reducers";

import { formatLocalForagetoState } from "../../utils/localForage";

import Types from "./types";
import TypeOfState from "./state";

const INITIAL_STATE = { ...TypeOfState };

function reducer(state, action) {
  switch (action.type) {
    case "@IS_ISCROLL":
      return { ...state, isScroll: action.payload };
    case "@IS_BAG_OPEN":
      return { ...state, isModalOpen: !state.isModalOpen };
    //
    case "@ADD_BAG_ITEM":
      return clearBagDuplicateItems(state, action.payload);
    case "@ADD_CART_ITEM":
      return CalcCartItems(state, action.payload);
    //
    case "@SliderLoginPage":
      return SliderLoginPage(state);
    //
    case "@USER_SIGN_IN":
      return { ...state,isLogin: true }
    case "@USER_SIGN_UP":
        return { ...state,isLogin: false }
    //
    case "@CHECKOUT":
        return checkout(state)
    default:
      return state;
  }
}

export const Context = React.createContext({});

export default function context({ children }) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  useEffect(() => {
    async function getItemsFromLocalHistorage() {
      const dbNameBag = "@URBARN-STORAGE-BAG";
      const dbNameCart = "@URBARN-STORAGE-CART";

      const localKeys = await localForage.keys();

      const bagExists = localKeys.includes(dbNameBag);
      const CartExists = localKeys.includes(dbNameCart);

      if (bagExists) {
        const items = await localForage.getItem(dbNameBag);
        formatLocalForagetoState(items, Types.ADD_BAG, dispatch);
      }

      if (CartExists) {
        const items = await localForage.getItem(dbNameCart);
        formatLocalForagetoState(items, Types.ADD_CART, dispatch);
      }
    }
    getItemsFromLocalHistorage();
  }, []);

  return (
    <Context.Provider value={[state, dispatch]}>{children}</Context.Provider>
  );
}
