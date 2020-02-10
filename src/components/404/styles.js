import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  width: 100%;

  height: calc(100vh - 150px);
`;

const animatedBorder = keyframes`
  from {
    width: 0%;
    opacity: 1;
  }

  to {
    width: 100%;
    opacity: 1;
  }
`;

export const Description = styled.div`
  position: absolute;
  top: 50%;
  right: 25%;
  transform: translate(50%, -50%);
  display: flex;
  flex-direction: column;

  @media (max-width: 1280px) {
    right: 50%;
  }

  @media (max-width: 640px) {
  }

  strong,
  a,
  span {
    color: #ffff;
    font-size: 2.5rem;
    display: flex;
    overflow-wrap: break-word;
    display: block;
    font-weight: 500;
    line-height: calc(2.5rem * 1.5);
  }

  strong {
    font-weight: 600;
    color: #ff1700;
    font-size: 6.9rem;
    line-height: calc(6.9rem * 1.5);
  }

  a {
    text-decoration: none;

    div {
      opacity: 0;
      background: #c52213;
      height: 4px;
      margin-bottom: 4px;
    }

    :hover {
      div {
        animation-duration: 1s;
        animation-name: ${animatedBorder};
        animation-fill-mode: forwards;
      }
    }
  }
`;

export const Error = styled.div`
  width: 100%;

  background: url('/404/large.jpg') no-repeat;
  height: 100%;

  background-position: center;
  background-size: 100% 100%;
  background-color: transparent;

  opacity: 0.5;

  @media (max-width: 2500px) {
    background: url('/404/hight.jpg');

    background-position: center;
    background-size: 100% 100%;
    background-color: transparent;
  }

  @media (max-width: 1920px) {
    background: url('/404/large.jpg');

    background-position: center;
    background-size: 100% 100%;
    background-color: transparent;
  }
  @media (max-width: 1280px) {
    background: url('/404/medium.jpg');

    background-position: center;
    background-size: 100% 100%;
    background-color: transparent;
  }

  @media (max-width: 640px) {
    background: url('/404/small.jpg');

    background-position: center;
    background-size: 100% 100%;
    background-color: transparent;
  }
`;
