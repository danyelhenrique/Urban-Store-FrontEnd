import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
::-webkit-scrollbar {
  width: 10px;
}


::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #888;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html,body, #__next {
  height: 100vh;
}


html,body, #__next, Main {
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    background: #010101e3;

    h1,h2,h3,h4,h5,h6,p{
        margin: 0;
        padding: 0
    };

    input , button {
      font-family: 'Roboto', sans-serif;
    }

}
`;
