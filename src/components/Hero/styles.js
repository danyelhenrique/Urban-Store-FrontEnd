import styled from 'styled-components';

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

export const Description = styled.div`
  height: 100%;
  width: 50%;
  font-size: 1.5rem;
  font-family: 'Playfair Display', serif;
  font-weight: 400;

  font-style: italic;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 50px 40px;

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
    border: 2px solid #e74c3c;
    border-radius: 5px;
  }
`;

export const Quote = styled.div`
  width: 100%;
`;
