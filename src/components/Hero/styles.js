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

export const Description = styled.div``;
