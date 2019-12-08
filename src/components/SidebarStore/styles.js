import styled from 'styled-components';

export const Aside = styled.aside`
    display: flex;
    flex-direction: column;
    background: transparent;
    height: 600px;
    width: 15%;
    min-width: 190px;

    margin-left: 20px;
    @media (max-width: 700px){
        display: none;
    }

    box-shadow: -20px -10px 44px -19px rgba(173,173,173,1) inherit;


    nav {
        height: 100%;
        display: flex;
        flex-direction: column;
        width: 100%;
        line-height: 1.9rem;


        li {

            display: flex;
            flex-direction: column;
            margin-top: 20px;

            h3 {
                font-weight: 400;
            }

            a{
                text-decoration: none;
                display: block;
                font-weight: 300;
                font-size: 0.9rem;
                color: #000000;

                :hover{
                    text-decoration: underline;
                    text-decoration-color: rgba(76, 70, 55, 0.69)
                }
            }

        }

    }
`;