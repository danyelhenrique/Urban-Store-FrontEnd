import styled from 'styled-components';

export const Header = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  overflow: hidden;

  position: relative;
`;
export const Internalization = styled.div`
  height: 15%;
  width: 100%;
  background: rgba(0, 0, 0, 0.9);
`;
export const UserArea = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.8);
  margin: 0 auto;

  span {
    color: #010101;
    font-family: 'Playfair Display', serif;
    font-style: italic;
    background-image: linear-gradient(
        to left top,
        #fefefe,
        #fffefe,
        #dedede,
        #6d6362,
        #fefefe
      ),
      linear-gradient(
        to right bottom,
        #e74c3d61,
        #f6796e30,
        #fea49e94,
        #ffcecc,
        #fbf8f8
      );

    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const LinkGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;

  position: relative;
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  list-style: none;
  width: 100%;
  justify-content: center;
`;

export const Link = styled.div`
  display: flex;
  align-items: center;

  > button {
    margin: 0 5px;
    display: block;
    padding-right: 10px;
    cursor: pointer;

    font-weight: 400;
    font-size: 0.8rem;
    letter-spacing: 2px;
    color: #000;

    background: none;
    border: none;

    border-bottom: 2px solid #fffefe;

    :hover {
      border-bottom: 2px solid rgba(240, 94, 35, 1);

      nav {
        opacity: 1;
        pointer-events: all;
      }
    }
  }
`;

export const Input = styled.div`
  display: flex;
  padding: 15px;

  input {
    border: none;
    border-bottom: 1px solid rgba(240, 94, 35, 0.5);
    outline: none;
  }
`;
