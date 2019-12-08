import styled from 'styled-components';
import { ButtonBack, ButtonNext } from 'pure-react-carousel';

export const Container = styled.div`
    position: relative;
    width: 100%;
    background: #fff;
    margin-left: 15%; 
    
    img{
        /* padding: 10px; */
        object-fit: cover;
    }


`;

export const Arrow = styled.div`
    height: 100%;
    width: 100%;
 
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