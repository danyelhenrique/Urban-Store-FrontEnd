import styled from 'styled-components';

export const MainContainer = styled.main`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  position: relative;
  top: 150px;
  top: ${props => (props.isFull ? '0px' : '150px')};
  width: 100%;

  background: ${props => (props.store ? 'rgba(0, 0, 0, 0.8)' : 'transparent')};

  /* overflow: hidden; */
`;
