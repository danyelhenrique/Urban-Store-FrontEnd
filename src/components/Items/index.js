import React from 'react';

import Button from '../ColorSelect';

import {
  Container,
  Item,
  Image,
  Favorite,
  Icon,
  NameAndPrice,
  ColorSelect,
} from './styles';

export default function Items() {
  return (
    <Container>
      <Item>
        <Image src="/_models/girl9.jpg" alt="item" />
        <Favorite type="button">
          <Icon src="/favorites-with-border.png" alt="favorite" />
        </Favorite>
      </Item>
      <NameAndPrice>
        <div>
          <span>Jacket Dress </span>
        </div>
        <span>$ 49.99</span>
      </NameAndPrice>
      <ColorSelect>
        <Button />
        <Button />
        <Button />
        <Button />
      </ColorSelect>
    </Container>
  );
}
