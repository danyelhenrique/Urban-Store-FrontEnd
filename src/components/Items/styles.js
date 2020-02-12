import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px auto 40px auto;

  @media (max-width: 555px) {
  }
`;

export const Item = styled.a`
  height: 300px;
  width: 220px;
  height: 350px;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  color: rgb(193, 183, 181);
  font-weight: 300;
  text-align: left;

  #back_img {
    display: none;
    opacity: 0;
    transition: opacity 1s ease;
  }

  :hover {
    #back_img {
      display: block;
      font-weight: 300;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      opacity: 1;
    }
    div {
      display: flex;
    }
    > img {
      display: none;
    }
  }
`;

export const Hover = styled.div`
  display: none;
  width: 100%;
  margin: auto;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);

  button {
    background: transparent;
    border: none;
    width: 80%;
    padding: 10px;
    margin: 5px auto;
    color: #fefefe;
    background: #000;
    cursor: pointer;
    border-radius: 2px;
  }
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 5px;
`;

export const Favorite = styled.button`
  position: absolute;
  bottom: 66px;
  right: 3px;
  border: none;
  outline: none;
  background: transparent;
  cursor: pointer;

  > div {
    width: 100%;
    height: 100%;
    position: relative;

    #fav-hover {
      opacity: 0;
    }

    :hover {
      #fav-hover {
        opacity: 1;
      }
      #fav-normal {
        opacity: 0;
      }
    }
  }
`;

export const Icon = styled.img`
  height: 30px;
  width: 30px;
  position: absolute;
  top: 0;
  right: 0;
`;

export const NameAndPrice = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  a,
  span {
    font-weight: 300;
    display: block;
    letter-spacing: 0.1rem;
    text-decoration: none;

    color: rgb(193, 183, 181);
    font-weight: 300;
    text-align: left;
    font-size: 0.9rem;
    line-height: calc(1rem * 1.5);
  }

  a {
    font-weight: 400;
    color: #fff;
    :hover {
      text-decoration: underline;
      text-decoration-color: rgba(255, 75, 43, 0.56);
    }
  }

  div {
    display: flex;
    flex-wrap: wrap;
    max-width: 200px;
    line-height: 1.6rem;
  }
`;

export const ColorSelect = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.4rem;
`;

export const Button = styled.button`
	height: 12px;
	width: 12px;
	border: 0;
	border-radius: 50%;
	background: #392455;
	background ${({ color }) => (!color ? 'transparent' : color)} ;
  & + * {
		margin-left: 0.4rem;
	}
`;
