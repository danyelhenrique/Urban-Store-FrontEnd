import styled, { css } from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	margin: 10px auto 40px auto;

	@media (max-width: 555px) {
	}
`;

export const Item = styled.a`
	height: 300px;
	width: 200px;
	width: 220px;
	height: 350px;
	position: relative;
	cursor: pointer;
	transform: scale(0.8, 0.8);

	display: flex;
	flex-direction: column;
	align-items: flex-end;

	background-image: url(${({ image }) => image});
	background-repeat: no-repeat;
	background-size: cover;
	border-radius: 2%;

	:hover {
		transform: scale(1, 1);
		box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.75);

		::before {
			content: '';
			position: absolute;
			height: 100%;
			width: 100%;
			background: rgba(#fefefe, #000, #fefefe, 0.1);
		}

		> div {
			display: block;
			font-weight: 300;
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: 100%;

			button {
				border: 1px solid #000;
				background: transparent;
				width: 80%;
				padding: 10px;
				margin: 5px 0;
				color: #fefefe;
				border-radius: 2%;
				background: #000;
			}
		}
		> img {
			display: none;
			height: 75%;
		}
	}
`;

export const Hover = styled.div`display: none;`;

export const Image = styled.img`
	height: 100%;
	width: 100%;
`;

export const Favorite = styled.button`
	position: absolute;
	bottom: 10px;
	right: 10px;
	border: none;
	outline: none;
	background: transparent;
	cursor: pointer;

	:hover {
	}
`;

export const Icon = styled.img`
	height: 30px;
	width: 30px;
`;

export const NameAndPrice = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;

	span {
		font-weight: 300;
		display: block;
		letter-spacing: 0.1rem;
	}

	div {
		display: flex;
		flex-wrap: wrap;
		max-width: 200px;
		line-height: 1.6rem;
	}
`;

export const ColorSelect = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-top: 0.4rem;
`;
