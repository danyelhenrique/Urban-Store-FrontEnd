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

// export const FirstNav = styled.div`
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: space-between;

// 	width: 100%;

// 	font-weight: 400;

// 	color: #000;

// 	div {
// 		display: flex;
// 		justify-content: space-between;
// 	}
// `;

// export const UserArea = styled.div`
// 	display: flex;
// 	font-weight: 300;

// 	a {
// 		display: flex;
// 		align-items: center;

// 		margin: 0 30px;

// 		text-decoration: none;

// 		color: rgba(0, 0, 0, 0.9);

// 		img {
// 			height: 45px;
// 			width: 45px;
// 		}

// 		span {
// 			margin: 0 10px;
// 		}
// 	}
// `;

// export const ListAndLogo = styled.div`
// 	display: flex;
// 	align-items: center;
// 	justify-content: space-between;
// `;

// export const ListFirstNav = styled.ul`
// 	display: flex;
// 	justify-content: space-between;
// 	align-items: center;

// 	width: 100%;
// 	height: 100%;

// 	list-style: none;

// 	li {
// 		display: flex;
// 		justify-content: center;
// 		align-items: center;
// 		flex: 1;

// 		width: 100%;
// 		height: 100%;

// 		a {
// 			display: flex;
// 			justify-content: center;
// 			align-items: center;

// 			width: 100%;
// 			height: 100%;

// 			text-decoration: none;
// 			color: #000;

// 			:hover {
// 				background: rgba(76, 70, 55, 0.39);
// 			}
// 		}
// 	}
// `;

// export const ScrollNav = styled.div`
// 	display: flex;
// 	align-items: center;
// 	justify-content: space-evenly;

// 	position: relative;

// 	width: 100%;
// 	height: 100%;

// 	img {
// 		height: 45px;
// 		width: 45px;
// 	}
// `;

// export const ListItems = styled.ul`
// 	display: flex;
// 	justify-content: space-between;
// 	align-items: center;
// 	flex: 1;

// 	height: 100%;

// 	margin-left: 15px;

// 	list-style: none;

// 	li {
// 		display: flex;
// 		align-items: center;

// 		width: 100%;
// 		height: 100%;

// 		a {
// 			display: flex;
// 			align-items: center;
// 			justify-content: center;

// 			height: 100%;
// 			width: 100%;

// 			color: #ffff;
// 			text-decoration: none;

// 			:hover {
// 				background: rgba(76, 70, 55, 0.39);
// 			}
// 		}
// 	}
// `;

// export const Bag = styled.div`
// 	display: flex;
// 	align-items: center;
// 	justify-content: center;

// 	width: 20%;
// 	height: 100%;

// 	button {
// 		border: none;
// 		background: transparent;
// 		cursor: pointer;
// 	}
// `;
