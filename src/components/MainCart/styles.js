import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  z-index: 20;
`;

export const Items = styled.div`
  width: 100%;
  max-height: 400px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  /* align-items: center; */

  @media (max-width: 610px) {
    position: static;
    width: 100%;
  }
`;

export const Item = styled.div`
  width: 65%;
  height: 100%;
  background: transparent;
  margin: 4px 0;
  border-bottom: 1px solid rgb(0, 0, 0);
  /* min-width: 610px; */

  padding: 10px;

  display: flex;

  > img {
    width: 30%;
    min-width: 220px;
    /* max-width: 220px; */
    border-radius: 6px;
  }

  @media (max-width: 1024px) {
    width: 56%;
  }

  @media (max-width: 900px) {
    width: 100%;
  }

  @media (max-width: 630px) {
    position: static;
    width: 100%;
    margin: 16px 10px;

    img {
      width: 40%;
    }
  }
`;

export const Detail = styled.div`
  width: 45%;

  letter-spacing: 1px;
  line-height: 20px;
  font-weight: 300;

  padding: 0 13px;

  color: #fff;

  display: flex;
  flex-direction: column;

  font-size: 1rem;
  line-height: calc(1rem * 1.5);

  h4 {
    font-size: 1.2rem;
    color: #ffffff;
    font-weight: 400;
    line-height: calc(1.2rem * 1.5);
  }

  p {
    font-size: 1rem;
    line-height: calc(1rem * 1.5);
    color: #bdbbbb;
    padding: 2px 0px !important;

    strong {
      color: #fff;
      font-weight: 400;
    }
  }

  small {
    font-size: 0.9rem;
    color: #d2cdcd;
    line-height: calc(0.9rem * 1.5);
  }

  div {
    display: flex;
    justify-self: center;
    height: 35px;
    width: 100%;

    select {
      background: none;

      height: 30px;
      width: 90px;

      border: 1px solid #e74c3c;
      border-radius: 2px;

      font-size: 1rem;
      font-weight: 300;

      color: #989696;
      font-weight: 300;
      font-family: 'Roboto';

      margin-top: 5px;

      option {
        &:disabled {
          color: #010101;
          background: #ff4b2b;
          font-weight: 400;
        }
      }

      :focus {
        outline-color: #ff4b2b;
      }
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
  width: 31%;
  min-width: 370px;
  height: 400px;
  color: #000;
  background: #ff4b2b;

  position: fixed;
  top: 160px;

  right: 20px;
  border-radius: 1%;
  padding: 10px 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    font-weight: 400;
  }

  @media (max-width: 900px) {
    position: static;
    width: 70%;
    margin: 16px 10px;
    width: 70%;
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

  @media (max-width: 900px) {
    margin-bottom: 10px;
  }
`;

export const Modal = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.52);

  backdrop-filter: blur(3px);

  position: fixed;
  top: 0;
  z-index: 99;

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background: #ff4b2b;
    width: 50%;
    text-align: center;
    line-height: 2.5rem;

    border-radius: 5px;

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
  align-items: center;
  justify-content: flex-end;

  width: 100%;
  height: 20%;
  border-bottom: 1px solid #000;

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
