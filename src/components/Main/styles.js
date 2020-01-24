import styled from 'styled-components';

export const MainContainer = styled.main`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: relative;
  top: 150px;
  top: ${props => (props.isFull ? '0px' : '150px')};
  width: 100%;
  background: transparent;

  height: 100%;

  /* overflow: hidden; */
`;
