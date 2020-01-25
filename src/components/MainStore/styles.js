/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  background: rgba(0, 0, 0, 0.8);
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  align-items: center;
  justify-content: center;
  width: 100%;
  /* width 100% para dois items qunad a tela diminuir */
  width: 70%;
  /* margin: 0 auto; */
  height: 100%;

  @media (max-width: 555px) {
    width: 100%;
  }
`;
