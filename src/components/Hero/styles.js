import styled,{css} from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-width: 250px;

  display: flex;
  flex-wrap: wrap;
 

  height: 100%;

	background: #000;


	background: #fff;


  #top, #bottom{
      transform: translateY(${props => props.mount ? "0%" : "100%"});
      opacity: ${props => !props.mount ? 0 : 1};

      transition: all 5s ease;
  }

  #bottom{
    transform: translateY(${props => props.mount ? "0%" : "-100%"});
  }


  @media (min-width: 500px) {
    /* width: 100%; */
  }

  @media (min-width: 600px) {
    /* width: 100%; */
  }
  @media (min-width: 700px) {
    /* width: 65%; */
  }
`;

export const Image = styled.div`
  height: 100%;
  width: 25%;

  /* width:50%; */



  background: url("${props => props.background}");
  background-position: center;
  background-size: 100% 100%;

`;


export const Description = styled.div``;