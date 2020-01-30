import React from 'react';

import { SocialContainer, Social, Icon } from './styles';

export default function SocialLogin() {
  return (
    <SocialContainer>
      <Social href="#" className="social">
        <Icon icon="/social/google.png" />
      </Social>
      <Social href="#" className="social">
        <Icon icon="/social/facebook.png" />
      </Social>
      <Social href="#" className="social">
        <Icon icon="/social/twiter.png" />
      </Social>
    </SocialContainer>
  );
}
