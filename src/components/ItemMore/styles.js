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

  @media (max-width: 610px) {
    padding: 10px;
  }
`;

export const Image = styled.div`
  display: flex;
  width: 55%;
  align-items: center;
  flex-wrap: nowrap;

  @media (max-width: 610px) {
    width: 100%;
    justify-content:  center;
  }
  
  margin-top: ${props => props.secondImage && "40px"};

  img {
    width: 50%;
    height:${props => props.secondImage ? "70vh" : "80vh"} ;
    margin: 0 1px;

    @media (max-width: 610px) {
      width: ${props => props.secondImage ? "80%" : "40%"};
    }
  }
`;

export const ItemDetail = styled.div`
  display: flex;
  flex-direction: column;
  height: 80vh;
  width: 40%;
  background: #fff;
  border-radius: 1%;
  margin-left: 30px;
  padding: 30px 15px;

  position: sticky;
  top: 105px;

  justify-content: space-between;

  @media (max-width: 610px) {
    position: static;
    width: 80%;
    margin-left: 0px;
    margin: 20px 0;
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
export const Details = styled.div`
  width: 100%;
  margin-right: 42%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media (max-width: 610px) {
    }

  div {
      display: flex;
      align-items: center;
    img {
      height: 25px;
      width: 25px;
      margin: 0 1px;
    }
  }

`;

export const ButtonDetails = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  padding: 10px;
  margin: 0 10px;
  /* flex: 1; */

  display: flex;
  align-items: center;
  
  img {
    height: 10%;
    width: 10%;
    margin: 0 1px;
  }

  span {
    color: #000;
    font-weight: 400;
    font-size: 1rem;
    text-transform: uppercase;
  }
`;