import styled from 'styled-components';

export const Container = styled.nav.attrs({
  className: 'nav-links'
})`
  background: #000;

  display: flex;

  width: 100%;
  height: 80vh;
  max-height: 600px;

  position: absolute;
  left: 0;

  opacity: 0;

  pointer-events: none;

  padding: 30px;
  margin-top: 2px;

  transition: all 0.3s ease;

  @media (max-width: 1024px) {
    flex-direction: column;

    background: #000;

    opacity: 1;

    position: static;

    padding: 0;

    pointer-events: all;
    z-index: 99;

    height: 100%;
    width: 100%;

    margin-top: 0px;
  }
`;
