import styled from 'styled-components';


export const Container = styled.div`
    width: 100vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

`;
export const Fixed = styled.div`
    position : fixed;

    top: 0px;
    left: 0px;

    height: 100vh;
    width: 100%;

    background:  rgba(255,255,255, 0.4);

    display: flex;
    flex-direction: column;
    align-items: flex-end;

    cursor: pointer;

`;

export const Modal = styled.div.attrs({
    className: "modal"
})`
    width: 30%;
    height: 100vh;
    background: rgb(255,255,255);
    box-shadow: -9px 0px 14px 0px rgba(0,0,0,0.16);

    display: flex;
    flex-direction:column;

    padding: 15px;


    position: fixed;
    top: 0;
   
`
