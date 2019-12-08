import styled from 'styled-components';

export const Button = styled.button`
    height: 12px;
    width: 12px;
    border: 0;
    border-radius: 50%;
    background: #392455;

    & + * {
        margin-left: 0.4rem;
    }
    
`;