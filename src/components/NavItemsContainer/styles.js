/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const Container = styled.ul.attrs({
  className: 'nav-links',
})`
  background: #fff;

  display: flex;

  width: 100%;
  height: 80vh;

  position: absolute;
  left: 0;

  opacity: 0;

  pointer-events: none;

  padding-top: 20px;
  margin-top: 2px;

  transition: all 0.3s ease;
`;
