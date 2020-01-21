import styled from 'styled-components';


export const Container= styled.nav`
    height:calc(100vh - 152px);
    width: 100%;
    position: fixed;
    top: 140px;
    background: red;

    display: flex;
    z-index: 99;
    
    padding: 0 50px;

    overflow: scroll;

    display: ${props => props.active ? "flex" : "none"}
`;