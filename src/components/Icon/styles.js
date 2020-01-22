import styled from 'styled-components';

export const Container = styled.div`
  height: 25px;
  width: 25px;
  background: url("${props => props.background}");
  background-position: center;
  background-size: 100% 100%;
  background-color: transparent;
  border: none;
  cursor: ${props => !props['btn-no-cursor'] && 'pointer'};
  margin: 0 5px;

  display: inline-block;
`;
