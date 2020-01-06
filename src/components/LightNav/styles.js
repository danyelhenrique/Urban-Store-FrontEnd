import styled from "styled-components";

export const Nav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;

  font-weight: 400;

  color: #000;

  div {
    display: flex;
    justify-content: space-between;
  }
`;

export const UserArea = styled.div`
  display: flex;
  font-weight: 300;

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
  }

  a,
  button {
    display: flex;
    align-items: center;

    margin: 0 30px;

    text-decoration: none;

    color: rgba(0, 0, 0, 0.9);

    img {
      height: 45px;
      width: 45px;
    }

    span {
      margin: 0 10px;
    }
  }
`;

export const Bag = styled.div``;

export const Button = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;

  img {
    height: 45px;
    width: 45px;
  }
`;

export const List = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 100%;

  list-style: none;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;

    width: 100%;
    height: 100%;

    a {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 100%;
      height: 100%;

      text-decoration: none;
      color: #000;

      :hover {
        background: rgba(76, 70, 55, 0.39);
      }
    }
  }
`;
