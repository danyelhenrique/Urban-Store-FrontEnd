import React from 'react';

import {
  Section,
  Container,
  AvatarPreview,
  Avatar,
  Email,
  Password
} from './styles';

export default function AccountSettings() {
  return (
    <Section>
      <AvatarPreview>
        <img src="/boy.jpg" alt="avatar" />
      </AvatarPreview>

      <Container>
        <Avatar>
          <h4>Avatar Settings</h4>
          <div>
            <label htmlFor="avatar-settings">
              <input
                type="text"
                id="avatar-settings"
                placeholder="Yor uri Avatar"
              />
            </label>
          </div>
        </Avatar>
        <Email>
          <h4>Email Settings </h4>
          <label htmlFor="email-settings">
            Your Email
            <input
              type="email"
              placeholder="danyelhenriquefidel@gmail.com"
              id="email-settings"
            />
          </label>
        </Email>
        <Password>
          <h4>Password Settings </h4>
          <label htmlFor="password-settings">
            Your password
            <input
              type="password"
              placeholder="password"
              id="password-settings"
            />
          </label>

          <label htmlFor="password-settings">
            Confirm Your password
            <input
              type="password"
              placeholder="confirm-password"
              id="password-settings"
            />
          </label>
        </Password>
      </Container>
    </Section>
  );
}
