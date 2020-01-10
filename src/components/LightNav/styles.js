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
`;

export const Icon = styled.button`
  height: 25px;
  width: 25px;
  background: url("${props => props.background}");
  background-position: center;
  background-size: 100% 100%;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin: 0 5px;
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
      border-bottom: 1px solid #dedede;
      outline-color: rgba(240, 94, 35, 1);

    }

`;
