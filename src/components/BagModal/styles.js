import styled, { css } from 'styled-components';

export const Modal = styled.div`
	display: flex;
	flex-direction: column;

	width: 300px;
	height: 340px;
	background: #000;
	background: ${(props) => (props.light ? '#000' : '#fff')};

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
	top: 60px;
	padding: 20px;

	overflow-y: scroll;
`;

export const ModalItem = styled.div`
	display: flex;
	height: 100%;
	width: 100%;

	justify-content: space-evenly;
`;

export const Image = styled.div`
	display: flex;
	height: 100% !important;
	width: 40% !important;

	img {
		height: 90% !important;
		width: 100% !important;
	}
`;

export const ModalItemDetail = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center !important;
	max-height: 135px;
	height: 90%;

	color: #fff;
	font-weight: 300;
	font-size: 1rem;
`;
