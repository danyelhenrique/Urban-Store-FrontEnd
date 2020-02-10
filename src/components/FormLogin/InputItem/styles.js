import styled from 'styled-components';
import { Input as Inp } from '@rocketseat/unform';

export const InputItem = styled.div`
  width: 100%;

  flex-direction: column;

  opacity: 1;

  input:-webkit-autofill,
  input:focus:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 100px rgba(0, 0, 0, 0.01) inset;
    box-shadow: 0 0 0 100px rgba(0, 0, 0, 0.01) inset;
  }
`;

export const Input = styled(Inp)`
  padding: 12px 15px;

  margin: 8px 0;

  width: 100%;

  outline: none;

  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);

  background: transparent;

  font-family: 'Roboto';

  ::placeholder {
    color: #fff;
  }
`;
