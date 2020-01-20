import styled from 'styled-components';
// double

export const Ul= styled.ul`
    height: 100%;
    width: ${props => props.double ? "calc(200% / 5)" : "calc(100% / 5)"};


    display: flex;

    border-right: 1px solid rgba(240, 94, 35, 0.28);

    .nav-items{
         a {
            font-weight:  ${props => props.default ?  "bold" : "300"};
            letter-spacing: 1px;
         }
    }
`;