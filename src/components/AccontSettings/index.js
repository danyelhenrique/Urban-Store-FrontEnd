import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { useMutation } from '@apollo/react-hooks';

import { updateUser } from '../../graphql/gql/user';

import { error, sucess } from '../../toasty';
import { userSigin } from '../../store/modules/user/actions';

import {
  Section,
  Form,
  AvatarPreview,
  Avatar,
  Name,
  Email,
  Password,
  Btn
} from './styles';

export default function AccountSettings() {
  const { avatar_url, user } = useSelector(state => state.user);
  const [formState, setFormState] = useState({});
  const dispatch = useDispatch();

  const [userPassword, setUserPassword] = useState({
    password: '',
    confirmPassword: ''
  });

  const [submit] = useMutation(updateUser, {
    onCompleted: ({ updateUser: userData }) => {
      dispatch(userSigin(userData));
      sucess('Sucess to change profile.');
    },
    onError: () => error('Fail to change profile')
  });

  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  function handlePassword(e) {
    setUserPassword({ ...userPassword, [e.target.name]: e.target.value });
  }

  function handleForm() {
    let input = { ...formState };

    const { password, confirmPassword } = userPassword;

    if (password !== confirmPassword) {
      error('Password dont match');
      return;
    }

    if (password) {
      input = { ...formState, password };
    }

    submit({
      variables: { id: user, input }
    });
    setFormState({});
    setUserPassword({ password: '', confirmPassword: '' });
  }

  return (
    <Section>
      <AvatarPreview>
        <img src={avatar_url} alt="avatar" />
      </AvatarPreview>

      <Form onSubmit={e => handleForm(e)}>
        <Avatar>
          <h4>Avatar Settings</h4>
          <div>
            <label htmlFor="avatar-settings">
              You uri Avatar
              <input
                type="text"
                id="avatar-settings"
                placeholder="You uri Avatar"
                name="avatar_url"
                value={formState.avatar_url || ''}
                onChange={e => handleChange(e)}
              />
            </label>
          </div>
        </Avatar>
        <Name>
          <h4>Name Settings </h4>
          <label htmlFor="name-settings">
            Your Name
            <input
              type="text"
              placeholder="You Name"
              id="name-settings"
              name="name"
              value={formState.name || ''}
              onChange={e => handleChange(e)}
            />
          </label>
        </Name>
        <Email>
          <h4>Email Settings </h4>
          <label htmlFor="email-settings">
            Your Email
            <input
              type="email"
              placeholder="You E-mail"
              id="email-settings"
              name="email"
              value={formState.email || ''}
              onChange={e => handleChange(e)}
            />
          </label>
        </Email>
        <Password>
          <h4>Password Settings </h4>
          <label htmlFor="password">
            Your password
            <input
              type="password"
              placeholder="password"
              id="password"
              name="password"
              value={userPassword.password}
              onChange={e => handlePassword(e)}
            />
          </label>

          <label htmlFor="password-settings">
            Confirm Your password
            <input
              type="password"
              placeholder="confirm-password"
              id="password-settings"
              name="confirmPassword"
              value={userPassword.confirmPassword}
              onChange={e => handlePassword(e)}
            />
          </label>
        </Password>
        <Btn type="submit">Update</Btn>
      </Form>
    </Section>
  );
}
