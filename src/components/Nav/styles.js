import styled from 'styled-components';

export const NavContainer = styled.header`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  height: 150px;

  width: 100%;

  z-index: 100;

  position: fixed;
  top: 0;
  background: #000;

  @media (max-width: 1024px) {
    height: 90px;
    align-items: center;
  }
`;
