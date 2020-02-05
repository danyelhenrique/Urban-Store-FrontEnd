import styled, { css } from 'styled-components';

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  text-align: center;
  color: #fff;

  input {
    color: ${props => (props.isSignUp ? '#fff' : '#000')};
  }

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

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 100%;
`;

export const Button = styled.button`
  border: none;
  border-radius: 2px;
  background: rgb(33, 31, 30);
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  cursor: pointer;
  z-index: 90;

  &:disabled {
    cursor: progress;
    background: rgba(0, 0, 0, 0.24);
    color: #f1f1f1;
  }
  ${({ ghost }) =>
    ghost &&
    css`
      background: rgba(240, 94, 35, 1);
    `};

  :active {
    transform: scale(0.95);
  }

  :focus {
    outline: none;
  }

  ${({ ghost }) =>
    ghost &&
    css`
      background-color: transparent;
      border-color: #ffffff;
    `};
`;
