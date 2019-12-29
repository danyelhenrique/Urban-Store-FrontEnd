import styled from 'styled-components';

export const MainContainer = styled.main`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	position: relative;
	/* top: 80px; */
	top: ${(props) => props.isScroll && '80px'};
	width: 100%;
	background: transparent;
`;
