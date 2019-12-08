import styled from 'styled-components';


export const Container = styled.section`
    display: flex;
    flex-wrap: wrap;

    align-items: center;
    justify-content: center;
    width: 100%;
    /* width 100% para dois items qunad a tela diminuir */
    width: 70%;
    margin: 0 auto;

    @media (max-width: 555px){
        width: 100%;
    }
   
`;