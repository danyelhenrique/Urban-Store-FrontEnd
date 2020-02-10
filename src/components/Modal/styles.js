import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  .fixed,
  .modal {
    width: 50vw;
    box-shadow: ${isBurguer => isBurguer && 'none'};
  }
  .fixed {
    right: ${({ isBurguer }) => isBurguer && '0px'};
    left: ${({ isBurguer }) => !isBurguer && '0px'};

    backdrop-filter: ${({ isBurguer }) => !isBurguer && 'blur(1px)'};

    /* width: ${isBurguer => isBurguer && '100vw'}; */
    width: 100vw;
    background: ${({ isBurguer }) =>
      isBurguer ? '#fffefe52' : 'rgba(0, 0, 0, 0.32)'};
  }

  .modal {
    padding: ${({ isBurguer }) => !isBurguer && '15px'};
    left: ${({ isBurguer }) => isBurguer && '0px'};
    max-width: 300px;

    background: ${({ isBurguer }) =>
      isBurguer ? 'transparent' : 'rgb(255, 255, 255)'};
  }
`;
export const Fixed = styled.div.attrs({
  className: 'fixed'
})`
  position: fixed;

  top: 0px;

  height: 100vh;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  cursor: pointer;
`;

export const Modal = styled.div.attrs({
  className: 'modal'
})`
  width: 30%;

  min-width: 400px;

  height: 100vh;
  background: rgb(255, 255, 255);
  box-shadow: -9px 0px 20px 0px #101010;

  display: flex;
  flex-direction: column;

  position: fixed;
  top: 0;
`;
