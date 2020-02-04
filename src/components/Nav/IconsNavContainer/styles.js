import styled from 'styled-components';

export const IconsContainer = styled.div`
  background: transparent;
  margin-right: 13px;

  position: relative;

  display: flex;

  > div > button {
    cursor: pointer;
    height: 100%;
    width: 100%;
    background: transparent;
    border: none;
  }
`;

export const QntCart = styled.div`
  text-overflow: ellipsis;

  display: flex;
  align-items: center;

  height: 25px;
  width: 25px;

  border-left: 2px solid rgba(240, 94, 35, 1);

  font-weight: 400;
  font-size: 0.9rem;
  font-family: 'Roboto';

  color: #fff;

  padding: 0 8px;

  margin: 2px;
`;
