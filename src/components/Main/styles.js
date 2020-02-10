import styled from 'styled-components';

export const MainContainer = styled.main`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: relative;
  top: 150px;
  top: ${props => (props.isFull ? '0px' : '150px')};
  height: ${props => props.isFull && '100vh'};
  width: 100%;

  @media (max-width: 1024px) {
    top: 90px;
  }
`;
