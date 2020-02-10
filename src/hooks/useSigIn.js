import { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useMutation } from '@apollo/react-hooks';
import { useRouter } from 'next/router';

import { userSigin } from '../store/modules/user/actions';
import { loadSingInSumit } from '../store/modules/signInSlider/actions';

import { SIGN_IN } from '../graphql/gql/auth';

import { sucess, error } from '../toasty';

export default function UseSignIn() {
  const [variables, setVariables] = useState({});
  const router = useRouter();
  const dispatch = useDispatch();

  const { lastUrl } = useSelector(state => state.signInSlider);

  const [signIn] = useMutation(SIGN_IN, {
    onCompleted: ({ loginUser: data }) => {
      dispatch(loadSingInSumit(false));
      const singinSignUpUrl = router.pathname;

      const redirectUrl =
        lastUrl && lastUrl !== singinSignUpUrl ? lastUrl : '/store';

      dispatch(userSigin(data));

      sucess('sucess to sing-in wait to redirect.');

      router.push(redirectUrl, redirectUrl);
    },
    onError: () => {
      dispatch(loadSingInSumit(false));
      error('fail to authenticate user.');
    }
  });

  return [signIn, variables, setVariables];
}
