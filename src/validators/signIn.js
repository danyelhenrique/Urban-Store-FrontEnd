import * as Yup from 'yup';

export const SignUpValidator = Yup.object().shape({
  name: Yup.string().required(),
  email: Yup.string()
    .email()
    .required('E-mail not provider.'),
  password: Yup.string()
    .required('No password provided.')
    .min(2, 'Password is too short - should be 8 chars minimum.'),
  confirmPassword: Yup.mixed().oneOf(
    [Yup.ref('password'), null],
    'Passwords must match'
  )
});

export const SignInValidator = Yup.object().shape({
  email: Yup.string()
    .email()
    .required('E-mail not provider.'),
  password: Yup.string().required('No password provided.')
});
