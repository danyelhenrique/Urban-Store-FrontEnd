import styled, { css } from 'styled-components';

export const Modal = styled.div`
	display: flex;
	flex-direction: column;

	width: 320px;
	height: 340px;
	background: #000;
	background: ${(props) => (props.light ? '#000' : '#fff')};

	${props => props.isEmpty && !props.light && css`
		background: #fff;
		color: #000;
	`}

	${props => props.isEmpty && props.light && css`
		background: #000;
		color: #fff;
	`}

	${(props) =>
		!props.light &&
		css`
			span,
			p {
				color: #000;
			}
		`};
	border-radius: 2%;
	position: absolute;
	right: 0;
	top: 75px;
	padding: 20px;

	overflow-y: scroll;
`;

export const ModalItem = styled.div`
	display: flex;
	height: 100%;
	width: 100%;

	justify-content: space-evenly;
	padding: 10px;
`;

export const Image = styled.div`
	display: flex;
	height: 100% !important;
	width: 45% !important;
	max-height: 150px;
	min-height: 150px;


	img {
		height: 90% !important;
		width: 100% !important;
	}
`;

export const ModalItemDetail = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center !important;
	/* max-height: 135px; */
	height: 90%;

	max-height: 150px;
	min-height: 150px;

	margin-left: 10px;
	line-height: 1.5rem;

	color: #fff;
	font-weight: 300;
	font-size: 1rem;


	a{
		text-decoration: none;
		color: #fff;
	}

`;


export const EmptyCart = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;

	height: 100%;
	width: 100%;

	line-height: 2rem;
	letter-spacing: 2px;
	text-align: center;


	div {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		height: 100%;
		width: 100%;
	}


	h1 {
		font-weight: 400;
	}

	span{
		font-weight: 300;

	}


`