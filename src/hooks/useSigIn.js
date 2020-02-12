import { useSelector, useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

import { userSigin } from '../store/modules/user/actions';
import { loadSingInSumit } from '../store/modules/signInSlider/actions';

import { SIGN_IN } from '../graphql/gql/auth';

import { sucess, error } from '../toasty';

import client from '../../services/apollo';

export default function UseSignIn() {
  const router = useRouter();
  const dispatch = useDispatch();

  const { lastUrl } = useSelector(state => state.signInSlider);

  async function signIn({ variables }) {
    try {
      const user = await client.request(SIGN_IN, { ...variables });
      const { loginUser: data } = user;

      const singinSignUpUrl = router.pathname;

      const redirectUrl =
        lastUrl && lastUrl !== singinSignUpUrl ? lastUrl : '/store';

      sucess('sucess to sing-in wait to redirect.');

      dispatch(userSigin(data));

      router.push(redirectUrl, redirectUrl);
    } catch (err) {
      error('fail to authenticate user.');
    } finally {
      dispatch(loadSingInSumit(false));
    }
  }
  return [signIn];
}
