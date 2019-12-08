import styled from 'styled-components';

export const Container = styled.div`
    background: #fff;
    width: 100%;
    height: calc( 600px + 1.9rem);
    width: 80%;
    min-width:  250px;
    padding: 10px;
    padding-bottom: 0;
    /* remove P bottom */
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;


    @media (min-width: 500px){
        width: 100%;
    }

    @media (min-width: 600px){
            width: 100%;
    }
    @media (min-width: 700px){
        width: 65%;
    }
    
`;

export const Title = styled.div`
    align-self: flex-start;
    justify-self: flex-start;
    width: 100%;
    margin-left: 15%; 
    
    display: flex;
    align-items: center;
    justify-content: center;

    background: red;
    background: url('/web-ban.jpg') center;
    background-size: cover;
    height: 20%;


    img {
        height: 100%;
        width: 100%;

    }
`;
