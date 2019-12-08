import styled from 'styled-components';

export const NavContainer = styled.nav`
    
    /* background: red; */
    /* height: 150px; */
    /* height: 80px; */
    height: ${props => props.scroll ? '80px' : '150px'};
    background: ${props => props.scroll ? '#000' : 'transparent'};
    position: ${props => props.scroll && 'fixed'};
    z-index: 10;
    top: 0;

    width: 100%;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    padding: 15px;

     div:first-of-type  {
        display: ${props => props.scroll && 'none'};
    }

    ul {
        li{
            a{
                color: ${props => props.scroll ? '#fff' : '#000'};
                :last-child{
                    margin-right: ${props => props.scroll ? '20px' : '0px'};
                }

                :hover{
                    background:  ${props => props.scroll ? 'rgba(255, 255, 255, 0.1594)' : 'rgba(76, 70, 55, 0.39)'};
                    
                }
            }
        }
    }

`;

export const FirstRow = styled.div`
    width: 100%;

    div {
        display: flex;
        justify-content: space-between;
    }

`;

export const UserArea = styled.div`
    display: flex;

    a {
        display: flex;
        align-items: center;
        margin: 0 30px;
        text-decoration: none;
        color: rgba(0,0,0,0.9);

        img{
            height: 45px ;
            width: 45px;
        }

        span {
            margin: 0 10px;
        }
    }

`;


export const SecondRow = styled.div`
    display: flex;
    width: 100%;
    align-items: center;

    a {

        img{
            height: 45px ;
            width: 45px;
        }
    }

`;
export const SecondRowNav = styled.ul`
    display: flex;
    list-style: none;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    /* flex: 1;  */
    /* ?? flex 1 */
    

    li {
        display: flex;
        justify-content: space-evenly;
        width: 100%;
        height: 100%;

        a {
            text-decoration: none;
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            color: #000;
            color: ${props => props.scroll ? '#fff' : '#000'};
            font-weight: 400;

            :hover{
                background: rgba(76, 70, 55, 0.39);
            }
        }

    }
`;