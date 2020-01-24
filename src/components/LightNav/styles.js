import styled from 'styled-components';

export const Header = styled.div`
  width: 100%;

  background: rgb(255, 255, 255);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  overflow: hidden;

  position: relative;
`;
export const Internalization = styled.div`
  height: 15%;
  width: 100%;
  background: #dedede;
`;
export const UserArea = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.8);
  margin: 0 auto;
`;

export const IconsContainer = styled.div`
  background: transparent;
  margin-right: 13px;

  position: relative;

  display: flex;

  > div > button {
    cursor: pointer;
    height: 100%;
    width: 100%;
    background: transparent;
    border: none;
  }
`;

export const QntCart = styled.div`
  text-overflow: ellipsis;

  display: flex;
  align-items: center;

  height: 25px;
  width: 25px;

  border-left: 2px solid rgba(240, 94, 35, 1);

  font-weight: 400;
  font-size: 0.9rem;
  font-family: 'Roboto';

  color: rgba(0, 0, 0, 0.8);

  padding: 0 8px;

  margin: 2px;
`;

export const LinkGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  background: #fff;

  position: relative;
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  list-style: none;
  width: 100%;
  justify-content: center;
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

    border-bottom: 2px solid #fff;

    :hover {
      border-bottom: 2px solid rgba(240, 94, 35, 1);
      z-index: 999;

      ul {
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
