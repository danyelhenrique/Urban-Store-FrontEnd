import styled, { css } from 'styled-components';


export const Modal = styled.div`
	display: flex;
	flex-direction: column;

	width: 320px;
	height: 340px;
	background:#fff;
	color: #000;

	span,
	p,
	a {
		color: #000;
	}

	border-radius: 2%;
	position: absolute;
	right: 0;
	top: 75px;

	overflow-y: scroll;
	box-shadow: 0px 0px 2px 0px rgba(0,0,0,1);
`;

export const ModalItem = styled.div`
	display: flex;
	height: 100%;
	width: 100%;
	padding: 20px;


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

		:hover{
			text-decoration: underline;
			text-decoration-color: rgba(76, 70, 55, 0.69);
		}
	}
`;

export const Button = styled.button`
	position: fixed;
	top: calc((75px * 4) + 60px);

	border: none;
	width: 280px;
	width: 320px;
	transform: translateX(-30px);
	background: rgba(0,0,0,0.5) !important;
	z-index: 10;
	color: #fff;
	height: 50px;
	cursor: pointer;

	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
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


`;
