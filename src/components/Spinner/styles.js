import styled from 'styled-components';

export const SpinnerItem = styled.div`
  height: ${({ center }) => (center ? '100%' : '100px')};

  width: 100%;
  background: transparent;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  opacity: ${({ active }) => (active ? 1 : 0)};
  margin: ${({ center }) => center && 'auto'};
`;
