import styled from "styled-components";

export const Header =styled.div`
  width: 100%;
  background:rgb(255,255,255);
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
`;
export const Internalization = styled.div`
  height: 15%;
  width: 100%;
  background: #dedede;

`;
export const  UserArea = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: rgba(0,0,0,0.8);
  margin: 0 auto;
`;

export const IconsContainer = styled.div`
  background: transparent;
  margin-right:  13px;

  position: relative;
 
  > div > button {
    cursor: pointer;
    height: 100%;
    width: 100%;
    background: transparent;
    border: none;
  }
`;

export const Count =  styled.span`
  position: absolute;
  top: 7px;
  margin-left: 5px;
 

  height: 25px;
  width: 20px;

  background:transparent;
  font-size: 0.7rem;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-bottom: 15px;


`;

export const LinkGroup = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-weight: 300;
  font-size: 0.9rem;
  letter-spacing: 2px;


  a{
      margin: 0 5px;
      display: block;
      padding: 15px;
      text-decoration: none;
      cursor: pointer;

      :hover{
        border-bottom: 1px solid rgba(240, 94, 35, 1);
      }
    }
`;
export const Input = styled.div`
    display: flex;
    padding: 15px;


    input{
      border: none;
      border-bottom: 1px solid rgba(240, 94, 35, 0.5);
      outline: none;

    }

`;
