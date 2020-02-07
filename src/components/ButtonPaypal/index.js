import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import PaypalExpressBtn from 'react-paypal-express-checkout';

function ButtonPaypayl() {
  const [isload, setLoad] = useState(false);
  const { cartValues } = useSelector(state => state.cart);

  useEffect(() => {
    setLoad(true);
  }, []);

  function onSuccess(payment) {
    console.log('Payment successful!', payment);
  }

  function onCancel(data) {
    console.log('Payment cancelled!', data);
  }

  function onError(err) {
    console.log('Error!', err);
  }

  const env = 'sandbox'; // you can set this string to 'production'
  const currency = 'USD'; // you can set this string from your props or state
  const { total } = cartValues; // this is the total amount (based on currency) to charge
  // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/

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
  // In order to get production's app-ID, you will have to send your app to Paypal for approval first
  // For your sandbox Client-ID (after logging into your developer account, please locate the "REST API apps" section, click "Create App" unless you have already done so):
  //   => https://developer.paypal.com/docs/classic/lifecycle/sb_credentials/
  // Note: IGNORE the Sandbox test AppID - this is ONLY for Adaptive APIs, NOT REST APIs)
  // For production app-ID:
  //   => https://developer.paypal.com/docs/classic/lifecycle/goingLive/

  // NB. You can also have many Paypal express checkout buttons on page, just pass in the correct amount and they will work!
  if (!isload) {
    return <h1>loading</h1>;
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
