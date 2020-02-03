import styled, { keyframes } from 'styled-components';

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
  width: 100%;

  justify-content: center;

  > div > button {
    font-size: 0.8rem;
  }
`;

const border = keyframes`
  0%{
    width: 0%;
  }
  25% {
    width: 25%;

  }
  50% {
    width: 50%;

  }
  75% {
    width:75%;

  }
  100% {
    width: 100%;
  }
`;

export const Border = styled.div.attrs({
  id: 'border-bottom'
})`
  height: 2px;
  width: 100%;
  opacity: 0;
  background-image: linear-gradient(
    to right,
    #ca665c,
    #e07266,
    #733a35,
    #e74c3c,
    #e74c3c
  );
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
    color: #fff;

    background: none;
    border: none;

    :hover {
      #border-bottom {
        animation: ${border} 0.7s ease-in-out backwards;
        opacity: 1;
      }

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
    background: transparent;
    color: #fff;

    ::placeholder {
      color: #dedede;
      font-weight: 300;
      opacity: 0.8;
    }
  }
`;
