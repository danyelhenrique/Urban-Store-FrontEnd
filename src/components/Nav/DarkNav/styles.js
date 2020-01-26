import styled from 'styled-components';

export const Container = styled.div`
  height: 100px;
  width: 100%;

  background: #fff;

  display: flex;
  flex-direction: column;

  position: relative;
`;

export const Offer = styled.div`
  height: 20%;
  width: 100%;
  background: rgba(0, 0, 0, 0.9);
`;

export const Logo = styled.div`
  height: 70px;
  width: 90px;
  background: blue;
`;

export const Nav = styled.div`
  display: flex;
  width: 100%;

  position: absolute;
  bottom: 0;
  top: 0;
  transform: translateY(10%);
`;

export const UserArea = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
`;
