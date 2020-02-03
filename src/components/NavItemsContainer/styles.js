import styled from 'styled-components';

export const Container = styled.nav.attrs({
  className: 'nav-links'
})`
  background: #fff;
  background: #000;

  display: flex;

  width: 100%;
  height: 80vh;

  position: absolute;
  left: 0;

  opacity: 0;

  pointer-events: none;

  padding: 30px;
  margin-top: 2px;

  transition: all 0.3s ease;
`;
