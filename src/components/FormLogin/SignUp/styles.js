import styled from 'styled-components';

import { Form as form } from '@rocketseat/unform';

export const Form = styled(form)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
  color: #fff;

  h1 {
    font-weight: bold;
    font-size: 3rem;
  }

  span,
  p {
    font-weight: 300;
    font-size: 0.8rem;
  }

  p {
    margin: 10px 0;
  }
`;
