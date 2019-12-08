import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  height: 100%;
  background-color: #b2ac9e;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;

  padding: 30px 0px;
`;

export const Image = styled.div`
  display: flex;
  width: 55%;
  flex-wrap: nowrap;

  img {
    width: 50%;
    height: 80vh;
    margin: 0 1px;
  }
`;

export const ItemDetail = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  width: 40%;
  background: #fff;
  border-radius: 5%;
  margin-left: 30px;
  padding: 30px 15px;

  justify-content: space-between;

  @media (max-width: 610px) {
    width: 70%;
    margin: 10px auto;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 10%;
  max-height: 15%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;

    span {
      font-weight: 400;
    }
  }

  img {
    height: 100%;
  }
`;


export const Favorite = styled.button`
    border: none;
    background: transparent;
    height: 100%;
    cursor: pointer;

    img {
    height: 100%;
  }

`;

export const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  img {
    flex: 1;
    margin: 3px;
    width: calc(100% / 7);
  }
`;

export const Select = styled.div`
  display: flex;
  position: relative;
  height: 50px;
  padding: 3px;
  font-weight: 300;
  font-family: 'Roboto';

  img {
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    pointer-events: none;
  }

  select {
    width: 100%;
    height: 100%;

    font-weight: 300;
    font-family: 'Roboto';

    color: rgba(0, 0, 0, 0.9);
    font-size: 0.9rem;
    display: inline-block;
    cursor: pointer;
    padding: 10px 15px;
    outline: 0;
    border: 0;
    border-radius: 0;
    background: rgba(178, 172, 158, 0.5);
    appearance: none;

    &::-ms-expand {
      display: none;
      background: url('/icons/select.png');
    }

    &:hover,
    &:focus {
      color: #000;
      font-weight: 400;
    }

    option {
      font-size: 0.9rem;
      color: #000;
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background: #000;
    padding: 5px;
    cursor: pointer;

    div {
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            margin: 0 10px;
        }


        strong{
            color: #fff;
            font-size: 1.2rem;
            margin: 0 10px;
        }
    }

`;

