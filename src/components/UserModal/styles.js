import styled from 'styled-components';


export const Modal = styled.div`
    width: 30%;
    height: 100vh;
    background: rgb(255,255,255);
    box-shadow: -9px 0px 14px 0px rgba(0,0,0,0.16);

    display: flex;
    flex-direction:column;

    padding: 15px;

    z-index: 200;

    position: fixed;
    top: 0;
   
`

export const MyAccount =  styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;

    font-size: 1.5rem;
    font-weight: 400;
    letter-spacing: 2px;
    color: rgba(0,0,0,0.7);

   > div > button {
        cursor: pointer;
        height: 100%;
        width: 100%;
        background: transparent;
        border:none;
    }
`;

export const Button =styled.button`
    border: none;
    border-bottom: 1px solid #dedede;
    background: transparent;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    padding-top: 10px;
    margin: 5px 0;

    font-size: 0.8rem;
    font-weight: 400;
    letter-spacing: 2px;
    color: #000;

    cursor: pointer;
`;


export const UserData =styled.div`
 display: flex;
flex-direction:column;

`;


export const Avatar =styled.div`
  background: url("${props => props.background}");
  background-position: center;
  background-size: 100% 100%;
  background-color: transparent;

  padding-top: 10px;

  margin: 0 auto;

  height: 60px;
  width: 60px;
  border-radius: 50%;
  box-shadow: 0px 0px 14px 0px rgba(0,0,0,0.10);
`;


