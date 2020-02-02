import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  align-items: center;
  justify-content: center;
  z-index: 20;
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  align-items: center;
  justify-content: center;
  /* width 100% para dois items qunad a tela diminuir */
  width: 70%;
  z-index: 23;

  @media (max-width: 555px) {
    width: 100%;
  }
`;
