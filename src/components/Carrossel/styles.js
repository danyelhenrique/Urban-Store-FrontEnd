import styled from 'styled-components';
import { ButtonBack, ButtonNext } from 'pure-react-carousel';

export const Container = styled.div`
    position: relative;
    background: #fff;
    height: 100%;
    width: 100%;

`;

export const Wrap = styled.div`

    height: 100%;
    width: 100%;
    padding:  90px 10px 0px 10px;
    background: rgba(0,0,0,0.8);
    
    img{
        padding: 10px;
        
    }


`;

export const Arrow = styled.div`
    height: 100%;
    width: 100%;
    color: #333;
    background: red;

    button:disabled{
        opacity: 0;
        pointer-events: none;
    }
   
`

export const BtnPrev = styled(ButtonBack)`
    position: absolute;
    transform: translateY(-180px);
    left: 0;
    border: none;
    background: transparent;
    color: transparent;
`;
export const BtnNext = styled(ButtonNext)`
    position: absolute;
    transform: translateY(-180px);
    right: 0;
    border: none;
    background: transparent;
    color: transparent;

    img {
        transform: rotate(180deg);
    }
`;