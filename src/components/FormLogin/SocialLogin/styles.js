import styled from 'styled-components';

export const SocialContainer = styled.div`
  margin: 20px 0;
`;

export const Social = styled.a`
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  margin: 0 5px;
  height: 40px;
  width: 40px;
`;

export const Icon = styled.i`
	background: url('${props => props.icon}');
	background-position: center;
	background-size: contain;
	background-size: 100% 100%;

	height: 100%;
	width: 100%;
`;
