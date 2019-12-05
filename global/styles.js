import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');


*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html,body, #__next, .page-layout {
    height: 100vh;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    h1,h2,h3,h4,h5,h6,p{
        margin: 0;
        padding: 0
    }
}

`;

