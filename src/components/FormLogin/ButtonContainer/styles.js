import styled, { css } from 'styled-components';

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  .BtnMaxWidth {
    display: none;
  }

  @media (max-width: 1024px) {
    justify-content: space-between;

    .BtnMaxWidth {
      display: block;
    }
  }
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

  ${({ BtnMaxWidth }) =>
    BtnMaxWidth &&
    css`
      margin-left: 5px;
      background: transparent;
      border: 1px solid #000;
      color: #000;
      font-weight: 400;
    `}

  @media (max-width: 1024px) {
    flex: 1;
    height: 40px;
    padding: 0;
  }
`;
