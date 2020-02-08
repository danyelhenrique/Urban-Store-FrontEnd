import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-height: 620px;

  display: flex;
  flex-wrap: wrap;

  background: #000;

  @media (max-width: 1024px) {
    flex-direction: column;
    height: 100%;
    max-height: 100%;
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 50%;

  @media (max-width: 1024px) {
    width: 100%;
    padding: 20px 20px 0px 20px;
  }
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

  @media (max-width: 1024px) {
    width: 100%;
    flex-direction: row;
    padding: 50px 20px;
  }

  @media (max-width: 600px) {
    flex-direction: column;

    img {
      margin-top: 10px;
    }
  }
`;

export const Quote = styled.div`
  width: 100%;

  @media (max-width: 1024px) {
    margin-rith: 15px;
  }
`;
