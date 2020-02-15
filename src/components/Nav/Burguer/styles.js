import styled from 'styled-components';

export const Container = styled.div`
  display: none;
  flex-direction: column;
  margin-left: 10px;

  background: none;
  border: none;

  position: relative;
  width: 52px;

  @media (max-width: 1024px) {
    display: flex;
  }
`;

export const NavItemsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  width: 100vw;
`;
export const Ul = styled.ul`
  width: 100%;

  list-style: none;
  display: flex;
  flex-direction: column;
`;

export const Btn = styled.button`
  margin: 10px;
  background: none;
  border: none;

  display: flex;
  flex-direction: column;

  cursor: pointer;
  outline: none;

  z-index: ${({ isActive }) => (!isActive ? 1 : -5)};
`;

export const Row = styled.div`
  height: ${({ close }) => (close ? '30px' : '40px')};
  width: ${({ close }) => (close ? '39px' : '70px')};
  margin: 2px 0;

  background: url("${props => props.background}");
  
  background-position: center;
  background-size: 100% 100%;

`;

export const ContainerModal = styled.div`
  pointer-events: ${({ isActive }) => (isActive ? 'all' : 'none')};
  z-index: 99;
  .modal {
    transform: translateX(-100%);

    transform: translateX(${props => (props.isActive ? '0%' : '-100%')});
    opacity: ${props => (!props.isActive ? 0 : 1)};

    transition: all 2s ease;
    background: #000;

    nav {
      pointer-events: ${({ isActive }) => (isActive ? 'all' : 'none')};
    }
  }

  .fixed {
    transform: translateX(${props => (props.isActive ? '0%' : '100%')});
    opacity: ${props => (!props.isActive ? 0 : 1)};
    transition: all 2.5s ease-out;
  }
`;

export const Li = styled.li`
  width: 100%;

  font-size: 1.2rem;
  line-height: calc(1.2rem * 1.5);
  text-align: left;
  text-transform: uppercase;
  background: ${({ select }) => select && '#ff4b2b'};
  padding: 0 15px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  :hover {
    background: #ff4b2b;
  }

  img {
    height: 30%;
    width: 7%;
    opacity: 0.9;
  }

  a {
    padding: 15px;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: #fff;

    :hover {
      background: #ff4b2b;
    }
  }
`;
