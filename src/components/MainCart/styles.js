import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.05);
  z-index: 20;
`;

export const Items = styled.div`
  width: 100%;
  max-height: 230px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const Item = styled.div`
  width: 65%;
  height: 100%;
  background: transparent;
  margin: 4px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);

  display: flex;
  @media (max-width: 610px) {
    width: 100%;
  }

  > img {
    width: 30%;
    max-width: 20%;
  }
`;

export const Detail = styled.div`
  width: 45%;

  letter-spacing: 1px;
  line-height: 20px;
  font-weight: 300;

  padding: 0 10px;

  color: #000;

  display: flex;
  flex-direction: column;

  div {
    display: flex;
    justify-self: center;
    height: 35px;
    width: 100%;

    select {
      background: none;

      height: 30px;
      width: 90px;

      border: 1px solid rgb(234, 165, 138);
      border-radius: 2px;

      font-size: 1rem;
      font-weight: 300;

      color: rgb(76, 59, 52);
      font-weight: 300;
      font-family: 'Roboto';
    }
  }
`;

export const Remove = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;

  button {
    cursor: pointer;
    height: 30px;
    width: 30px;
    border: none;
    background: transparent;
    img {
      height: 100%;
      width: 100%;
    }
  }
`;

export const Bag = styled.div`
  width: 30%;
  height: 400px;
  color: #000;
  background: #ff4b2b;

  position: fixed;
  top: 160px;

  right: 0;
  border-radius: 1%;
  padding: 10px 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    font-weight: 400;
  }

  @media (max-width: 610px) {
    position: static;
    width: 100%;
  }
`;

export const Form = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  height: 60px;

  button {
    border: 1px solid rgba(0, 0, 0, 0.9);

    background: transparent;

    height: 100%;
    width: 20%;

    cursor: pointer;

    font-weight: 300;
    font-family: 'Roboto';
  }

  label {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    font-size: 0.8rem;
    font-weight: 300;
    height: 100%;

    input {
      height: 100%;
      border: 1px solid #cecece;
      color: rgba(0, 0, 0, 0.9);

      border: none;
      border-bottom: 1px solid rgba(0, 0, 0, 0.9);
      color: rgba(0, 0, 0, 0.9);
      background: transparent;
      outline: none;

      ::placeholder {
        color: rgba(0, 0, 0, 0.5);
        font-family: Arial, Helvetica, sans-serif;
        text-transform: uppercase;
      }
    }
  }
`;

export const OrderAndTotal = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 25px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      font-size: 0.9rem;
      font-weight: 400;
      display: flex;
    }
  }
`;

export const BtnCheckout = styled.button`
  color: #fff;
  height: 25%;
  transform: translateY(50%);
  cursor: pointer;

  background: #000;
  border: none;
  font-weight: 700;
  font-size: 1.2rem;
  text-transform: uppercase;
  border-radius: 2%;
`;

export const Modal = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);

  position: fixed;
  top: 0;
  z-index: 99;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #fff;
    width: 50%;
    text-align: center;
    line-height: 2.5rem;

    span {
      font-weight: 300;
    }

    h1 {
      font-weight: 400;
    }
  }
`;

export const OpenModal = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;

  width: 100% !important;
  height: 20%;
  border-bottom: 1px solid #cecece;

  button {
    background: transparent;
    border: none;
    cursor: pointer;

    img {
      height: 30px;
      width: 30px;
      margin: 5px;
    }
  }
`;

export const PaypalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 50px;
  width: 100% !important;
`;
