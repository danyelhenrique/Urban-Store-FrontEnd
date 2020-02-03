import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-width: 250px;

  display: flex;
  flex-wrap: wrap;

  height: 100%;

  background: #000;

  @media (min-width: 500px) {
    /* width: 100%; */
  }

  @media (min-width: 600px) {
    /* width: 100%; */
  }
  @media (min-width: 700px) {
    /* width: 65%; */
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 50%;
`;

const silderTop = keyframes`
  from {
      transform: translateY(100px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }

`;

export const Description = styled.div`
  height: 100%;
  width: 50%;
  font-size: 1.5rem;
  line-height: calc(1.5rem * 1.5);
  font-family: 'Playfair Display', serif;
  font-weight: 400;

  font-style: italic;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 50px 40px;
  animation: ${silderTop} 3s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;

  span {
    color: #fff;

    strong {
      color: #e74c3c;
      font-weight: 500;
    }
  }

  img {
    height: 250px;
    width: 250px;
    justify-self: flex-start;
    align-self: flex-start;
    border: 4px double #e74c3c;
    border-radius: 5px;
  }
`;

export const Quote = styled.div`
  width: 100%;
`;
