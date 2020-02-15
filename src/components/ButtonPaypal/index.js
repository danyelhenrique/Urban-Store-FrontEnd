import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PaypalExpressBtn from 'react-paypal-express-checkout';

import { request } from 'graphql-request';
import { mapCartTogetIdAndQnt } from '../../../utils/cart';

import { checkout } from '../../store/modules/cart/actions';

import Spinner from '../Spinner';

import { sucess, error, warn } from '../../toasty';

import { purchase } from '../../graphql/gql/purchase';

function ButtonPaypayl() {
  const [isload, setLoad] = useState(true);
  const { cartValues, cart } = useSelector(state => state.cart);
  const { user } = useSelector(state => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    setLoad(false);
  }, []);

  async function onSuccess(payment) {
    const products = mapCartTogetIdAndQnt(cart);

    try {
      await request('http://localhost:4594/graphql', purchase, {
        userId: user,
        productIds: products
      });
      dispatch(checkout());

      sucess('Payment successful!', payment);
    } catch (err) {
      warn('Fail to Payment!');
    }
  }

  function onCancel() {
    warn('Payment cancelled!');
  }

  function onError() {
    error('Error! Payment');
  }

  const env = 'sandbox';
  const currency = 'USD';
  const { total } = cartValues;

  const client = {
    sandbox:
      'AVVJF3Wz3cs5aId-k_XE_t-fzzrc5KYeVZ04bSf3doLsXBae9SNiB1-QPGUGMzCMreHLT7X-kzWC26Iu',
    production: 'YOUR-PRODUCTION-APP-ID'
  };

  const styleBtn = {
    color: 'gold',
    shape: 'rect',
    label: 'checkout',
    size: 'responsive'
  };

  if (isload) {
    return <Spinner active={isload} />;
  }

  return (
    <PaypalExpressBtn
      style={styleBtn}
      env={env}
      client={client}
      currency={currency}
      total={total}
      onError={onError}
      onSuccess={onSuccess}
      onCancel={onCancel}
    />
  );
}
export default ButtonPaypayl;
