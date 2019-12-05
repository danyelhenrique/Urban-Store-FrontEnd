import styled from 'styled-components';


export const Container = styled.aside`
    height: 200px;
    height: ${props => props.active ? '100%' : '200px'};
    background: #fff;
    width: 400px;
    border-radius: 0 0 5px 0;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
 
`;

export const Links = styled.div`
  display: flex;
  justify-content: space-between;

`;

export const LinksContainer = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    text-align: center;

    a {
        flex: 1;
        padding: 11px;
        padding-top: 15px;
        height: 50px;
        color: #795F4D;
        color: #000;
        font-weight: 400;
        text-decoration: none;

        :hover{
            background: #cecece;
            background: rgba(76, 70, 55, 0.69);

        }
    }

`;


export const FullHeightContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 100%;
    padding: 10px;

    span {
        width: 50%;
        align-self: center;
        font-size: 1.5rem;
        font-style: italic;
        font-weight: 400;
        color: rgba(0,0,0,0.5);
    }

    img{
        width: 50%;
        height: 40%;
    }
    nav {
        width: 50%;
        height: 50%;
             li {
                 display: flex;
                 flex-direction: column;
                 height: 100%;
                 width: 100%;
                 background: #fefefe;
                 justify-content: space-between;

                 a {
                     padding: 10px;
                     text-decoration: none;
                     flex: 1;
                     color: #ffff;
                     color: #795F4D;
                     font-weight: 600;

                     display: flex;
                     align-items: center;

                     transition: background 0.2s ease-out;

                     &:hover{
                         background: rgba(76, 70, 55, 0.69);
                         color: #ffff;
                     }
                 }
                 

             }
        
    }
`;
export const Span = styled.div`
    align-self: center;
    justify-self: center;
    height: 100px;
    span {
        font-size: 1.5rem;
        font-style: italic;
        font-weight: 400;
        color: rgba(0,0,0,0.5);
    }
`;