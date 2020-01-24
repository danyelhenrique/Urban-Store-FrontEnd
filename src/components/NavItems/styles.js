import styled from 'styled-components';
import Router from 'next/link';

export const Li = styled.li.attrs({
  className: 'nav-items'
})`
  height: 100%;
  width: 100%;

  min-width: 220px;

  margin: 0 20px;

  display: flex;
  flex-direction: column;

  list-style: none;
  font-size: 0.9rem;
  line-height: calc(0.9rem * 1.5);

  > h4 {
    text-align: left;
  }
`;

export const Links = styled(Router)``;

export const Link = styled.a`
  text-decoration: none;
  padding: 9px 0;
  text-align: left;
  :hover {
    text-decoration: underline;
    text-decoration-color: rgb(240, 94, 35);
  }
`;
