import styled from 'styled-components';

export const Nav = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;

	width: 100%;
	height: 100%;

	img {
		height: 45px;
		width: 45px;
	}
`;

export const ListItems = styled.ul`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex: 1;

	height: 100%;

	margin-left: 15px;

	list-style: none;

	li {
		display: flex;
		align-items: center;

		width: 100%;
		height: 100%;

		a {
			display: flex;
			align-items: center;
			justify-content: center;

			height: 100%;
			width: 100%;

			color: #ffff;
			text-decoration: none;

			:hover {
				background: rgba(76, 70, 55, 0.39);
			}
		}
	}
`;

export const Bag = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-evenly;

	width: 20%;
	height: 100%;

	button {
		border: none;
		background: transparent;
		cursor: pointer;
	}

	a {
		color: #fff;
		text-decoration: none;
		filter: brightness(50%);
		font-weight: 400;

		:hover {
			filter: brightness(100%);
		}
	}
`;
