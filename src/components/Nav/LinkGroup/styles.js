/* eslint-disable no-confusing-arrow */
import styled from 'styled-components';

export const LinkGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  position: relative;
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  list-style: none;
  width: 100%;
  width: ${({ isDarkNav }) => (isDarkNav ? '70%' : '100%')};

  justify-content: ${({ isDarkNav }) =>
    isDarkNav ? 'space-between' : 'center'};

  > div > button {
    font-size: ${({ isDarkNav }) => (isDarkNav ? '0.7rem' : '0.8rem')};
  }
`;

export const Link = styled.div`
  display: flex;
  align-items: center;

  > button {
    margin: 0 5px;
    display: block;
    padding-right: 10px;
    cursor: pointer;

    font-weight: 400;
    font-size: 0.8rem;
    letter-spacing: 2px;
    color: #000;

    background: none;
    border: none;

    border-bottom: 2px solid #fffefe;

    :hover {
      border-bottom: 2px solid rgba(240, 94, 35, 1);

      nav {
        opacity: 1;
        pointer-events: all;
      }
    }
  }
`;

export const Input = styled.div`
  display: flex;
  padding: 15px;

  input {
    border: none;
    border-bottom: 1px solid rgba(240, 94, 35, 0.5);
    outline: none;
  }
`;
