import styled, { css, keyframes } from 'styled-components';

export const Section = styled.section`
  height: 100%;
  width: 100%;
  background: linear-gradient(
    to left top,
    #000000,
    #411720,
    #802230,
    #c13134,
    #ff4b2b
  );
  place-items: center center;
  place-content: center center;
  display: flex;
  flex-direction: column;
`;

const leftAndRight = keyframes`
  0% {
    transform: translateX(80px);
    opacity: 0;
  }
  
  100% {
    transform: translateX(0px);
    opacity: 1;
  }

`;

export const Back = styled.div`
  display: flex;
  width: 100%;
`;

export const Btn = styled.button`
  display: flex;
  width: 100%;
  height: 40px;
  animation: ${leftAndRight} 2s infinite forwards;

  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;

  cursor: pointer;
  text-transform: uppercase;

  img {
    height: 100%;
    width: 37px;
  }

  span {
    color: #fff;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 70%;
  width: 70%;
  min-height: 500px;

  position: relative;
  place-items: center center;

  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

export const Image = styled.div`
  height: 100%;
  width: 50%;
  transform: translateX(-50%);
  position: absolute;
  z-index: 10;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

  background: linear-gradient(to right, rgb(23, 24, 25), rgb(33, 31, 30));

  background-repeat: no-repeat;
  background-position: center center;

  background-size: 100% 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  position: relative;

  transition: all 1.7s ease;

  :hover {
    ::before {
      content: '';
      position: absolute;
      top: 0;
      height: 100%;
      width: 100%;
      background: transparent;
    }
  }

  ${props =>
    props.signIn &&
    css`
      transform: translateX(50%);
      div:last-child {
        display: none;
      }
    `};

  ${props =>
    props.signUp &&
    css`
      transform: translateX(-50%);
      div:first-child {
        display: none;
      }
    `};
`;
export const Ghost = styled.div`
  height: 150px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  color: #fff;
  text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.47);

  button {
    z-index: 20;
  }

  h2 {
    font-weight: bold;
    font-size: 3rem;
  }

  span {
    font-weight: 300;
    font-size: 1rem;
  }
`;

export const SignUpContainer = styled.div`
  height: 100%;
  width: 50%;

  position: absolute;
  right: 0;

  display: flex;
  flex-direction: column;
  position: absolute;

  opacity: 0;
  transition: all 2s ease;
  background: rgb(255, 75, 43);

  ${props =>
    props.signUp &&
    css`
      opacity: 1;
    `};
`;

export const SignInContainer = styled.div`
  height: 100%;
  width: 50%;
  background: red;

  display: flex;
  flex-direction: column;
  position: absolute;

  transform: translateX(-50%);
  opacity: 0;
  transition: transform 2s ease;
  background: rgb(255, 75, 43);

  ${props =>
    props.signIn &&
    css`
      opacity: 1;
    `};
`;

export const Button = styled.button`
  border-radius: 2px;
  border: 1px solid rgba(240, 94, 35, 1);
  background-color: rgba(240, 94, 35, 1);
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 12px 45px;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  cursor: pointer;
  z-index: 90;

  ${props =>
    props.ghost &&
    css`
      background: rgba(240, 94, 35, 1);
    `};

  :active {
    transform: scale(0.95);
  }

  :focus {
    outline: none;
  }

  ${props =>
    props.ghost &&
    css`
      background-color: transparent;
    `};
`;
