import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  background-color: #b2ac9e;
`;


export const Items = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const Item = styled.div`
  width: 65%;
  height: 100%;
  background: transparent;
  margin: 2px 0;
  border-bottom: 4px solid rgba(0, 0, 0, 0.3);

  border-radius: 1%;

  display: flex;
  @media (max-width: 610px) {
      width: 100%;
  }

  img {
    width: 30%;
  }
`;

export const Detail = styled.div`
  /* background: red; */
  letter-spacing: 1px;
  line-height: 20px;
  margin: 0 5px;
  font-weight: 300;
  color: #000;

  display: flex;
  flex-direction: column;

  select {
    background: none;
    height: 30px;
    width: 90px;
    border: 1px solid #000;

    font-size: 1rem;
    font-weight: 300;
  }

  div {
    display: flex;
    justify-self: center;
    height: 35px;
    width: 100%;
    justify-content: space-between;
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 30px;
      width: 50px;
      cursor: pointer;

      padding: 6px;

      background: transparent;
      border: 1px solid #000;
      img {
        height: 100%;
        width: 100%;
        object-fit: contain;
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
  width: 30%;
  height: 400px;
  background: #fff;
  color: #000;


  position: fixed;
  top: 90px;
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


  button {
      border: 1px solid #cecece;
      background: transparent;
      padding: 20px;
      margin: 15px 0 0 3px;
      cursor: pointer;
      font-weight: 300;
  }

  label {
      display: flex;
      flex-direction: column;
     justify-content: center;
      width: 100%;
      font-size: 0.8rem;
      font-weight: 300;
      height: 60px;

      input {
          padding: 20px ;
          height: 100%;
          border: 1px solid #cecece;
          color: rgba(0,0,0,0.9)
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

