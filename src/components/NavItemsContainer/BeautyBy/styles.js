import styled from 'styled-components';

export const Ul = styled.ul.attrs({
  className: 'women-ul-container'
})`
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
  height: 70%;
  width: 100%;
  background: url("${props => props.background && `${props.background}`}");
  background-size: cover;
  background-repeat: no-repeat;
`;
