import styled from 'styled-components';

export const NavContainer = styled.nav`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;

	height: ${(props) => (props.scroll ? '80px' : '150px')};
	width: 100%;

	background: ${(props) => (props.scroll ? '#000' : 'transparent')};

	position: ${(props) => props.scroll && 'fixed'};
	top: 0;

	z-index: 10;

	padding: 15px;
`;
