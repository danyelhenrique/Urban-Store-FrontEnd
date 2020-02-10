import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PaypalExpressBtn from 'react-paypal-express-checkout';

import { checkout } from '../../store/modules/cart/actions';

import Spinner from '../Spinner';

import { sucess, error, warn } from '../../toasty';

function ButtonPaypayl() {
  const [isload, setLoad] = useState(true);
  const { cartValues } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoad(false);
  }, []);

  function onSuccess(payment) {
    sucess('Payment successful!', payment);
    dispatch(checkout());
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
    label: 'checkout'
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
