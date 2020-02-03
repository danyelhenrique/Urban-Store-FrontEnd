import styled from 'styled-components';

export const Ul = styled.ul`
  height: 100%;
  width: ${props => (props.double ? 'calc(200% / 5)' : 'calc(100% / 5)')};

  display: flex;

  border-right: ${({ lastChild }) =>
    lastChild ? 'none' : '1px solid rgba(240, 94, 35, 0.28)'};

  .nav-items {
    a {
      font-weight: ${props => (props.default ? 'bold' : '300')};
      letter-spacing: 1px;
    }
  }
`;

export const Image = styled.div`
   background: url("${props => props.background && `${props.background}`}");
  background-size: cover;
  background-repeat: no-repeat;
  background-size: 100% 100%;

  width: 100%;
  height: 100%;
  border-radius: 5px;
`;
