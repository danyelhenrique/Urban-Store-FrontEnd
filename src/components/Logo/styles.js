import styled from 'styled-components';

export const LogoContainer = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.8);
  margin: 0 auto;

  a {
    text-decoration: none;

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
