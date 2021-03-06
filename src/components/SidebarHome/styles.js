import styled from 'styled-components';

export const Container = styled.aside`
  width: 400px;

  border-radius: 0 0 5px 0;

  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.9);

  z-index: 20;

  .full-height {
    opacity: ${props => (props.active ? 1 : 0)};

    transform: translateY(${props => (props.active ? '0%' : '-100%')});
    transition: transform 5s ease-in;
  }

  @media (max-width: 900px) {
    width: 300px;

    span {
      display: none;
    }
  }

  @media (max-width: 600px) {
    width: 200px;

    span {
      display: none;
    }
  }
`;

export const Header = styled.div`
  display: flex;

  background: rgba(0, 0, 0, 0.9);

  height: 100px;
  border-radius: 0 5px 0 0;
  z-index: 30;
  padding: 10px;

  > div {
    margin: 0;
  }
`;

export const FullHeightContainer = styled.div.attrs({
  className: 'full-height'
})`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;

  height: 100%;
  width: 100%;

  padding: 10px;

  background: rgba(0, 0, 0, 0.9);
`;
export const Nav = styled.div`
  display: flex;
  height: 40%;
  width: 100%;

  @media (max-width: 900px) {
    span {
      display: none;
    }
  }

  span {
    width: 50%;
    align-self: center;
    font-size: 1.2rem;
    font-style: italic;
    font-weight: 300;

    color: rgb(253, 129, 78);
    padding: 0 5px;
    text-align: center;
    opacity: 0.7;
  }

  nav {
    width: 50%;
    background: rgba(0, 0, 0, 0.9);

    @media (max-width: 900px) {
      width: 100%;
    }

    li {
      display: flex;
      width: 100%;

      :nth-child(1) {
        background: rgb(220, 87, 33);
        a {
          color: #ffff;
        }
      }

      a {
        padding: 10px;
        text-decoration: none;
        flex: 1;
        color: #fff;
        font-weight: 300;

        display: flex;
        align-items: center;

        :hover {
          background: rgb(220, 87, 33);
          color: #ffff;
        }
      }
    }
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 50%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 49%;
    height: 100%;
  }
`;
