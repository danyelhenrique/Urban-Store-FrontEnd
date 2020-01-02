import styled, { css } from 'styled-components';

export const Container = styled.section`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 80%;
	width: 80%;

	height: 100%;
	width: 100%;

	/* configurara o max height and max-width */
	background: #fff;
	position: relative;
	place-items: center center;

	box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);

	${(props) =>
		props.left &&
		css`
			img {
			}
		`};
`;

export const Image = styled.div`
	height: 100%;
	width: 50%;
	transform: translateX(-50%);
	position: absolute;
	z-index: 10;
	box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
	
	background: url('${(props) => props.background}');
	/* background: url('/login/cinco.jpg'); */
	/* background: url('/login/oito.jpg'); */
	background-repeat: no-repeat;
	background-position: center center;

	background-size: 100% 100%;

	display: flex;
	align-items: center;
	justify-content: center;

	position: relative;


	::before{
		content: "";
		position: absolute;
		top: 0;
		height: 100%;
		width: 100%;
		background: rgba(0,0,0,0.5);
	}

	:hover{
		::before{
		content: "";
		position: absolute;
		top: 0;
		height: 100%;
		width: 100%;
		background:transparent;
	}



	}

	${(props) =>
		props.signIn &&
		css`
			transform: translateX(50%);
			div:last-child {
				display: none;
			}
		`};

	${(props) =>
		props.signUp &&
		css`
			transform: translateX(-50%);
			div:first-child {
				display: none;
			}
		`};

	transition: all 1.7s ease;
`;
export const Ghost = styled.div`
	height: 150px;
	width: 100%;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-evenly;
	color: #fff;
	text-shadow: 0px 0px 8px rgba(0, 0, 0, 0.47);

	button {
		z-index: 20;
	}

	h2 {
		font-weight: bold;
		font-size: 3rem;
	}

	span {
		font-weight: 300;
		font-size: 1rem;
	}
`;

export const FormContainer = styled.div`
	height: 100%;
	width: 50%;

	position: absolute;
	right: 0;

	display: flex;
	flex-direction: column;
	position: absolute;

	opacity: 0;
	transition: all 2s ease;

	${(props) => props.signUp && css`opacity: 1;`};
`;

export const FormContainerLogin = styled.div`
	height: 100%;
	width: 50%;
	background: red;

	display: flex;
	flex-direction: column;
	position: absolute;

	transform: translateX(-50%);
	opacity: 0;
	transition: all 2s ease;

	${(props) => props.signIn && css`opacity: 1;`};
	${(props) =>
		props.signIn &&
		css`
			form {
				h1,
				span,
				p {
					color: #fff;
				}
			}
			form input {
				border: 1px solid #fff;
			}
		`};
`;

export const Form = styled.form`
	background-color: #ffffff;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 50px;
	height: 100%;
	text-align: center;
	color: #fff;
	position: relative;


	background: url('${(props) => props.background}');

	background-repeat: no-repeat;
	background-position: center center;

	background-size: 100% 100%;




	h1 {
		font-weight: bold;
		font-size: 3rem;
	}

	span,
	p {
		font-weight: 300;
		font-size: 0.8rem;
	}

	p {
		margin: 10px 0;
	}
`;

export const InputContainer = styled.div`
	position: relative;
	width: 100%;

	display: flex;
	flex-direction: column;

	p {
		align-self: flex-start;
		justify-self: flex-start;
		position: absolute;
		top: 0;

		display: none;
	}

	input:-webkit-autofill,
	input:focus:-webkit-autofill {
		-webkit-box-shadow: 0 0 0 100px rgba(0, 0, 0, 0.4) inset;
	}

	input {
		padding: 12px 15px;
		border-radius: 20px;
		margin: 8px 0;
		width: 100%;
		outline: none;
		border: 1px solid rgba(255, 255, 255, 0.1);
		border: 1px solid rgba(0, 0, 0, 0.4);
		translate: all 1s ease;
		background: transparent;

		/* Change the white to any color ;) */

		::placeholder {
			color: #fff;
		}

		:focus {
			padding: 11px 15px;
			background: transparent;
			background: rgba(0, 0, 0, 0.4);
			border: 2px solid #ff4b2b;
		}
	}
`;

export const SocialContainer = styled.div`margin: 20px 0;`;

export const Social = styled.a`
	border: 1px solid #dddddd;
	border-radius: 50%;
	display: inline-flex;
	justify-content: center;
	align-items: center;
	margin: 0 5px;
	height: 40px;
	width: 40px;
`;
export const Icon = styled.i`
	background: url('${(props) => props.icon}');
	background-position: center;
	background-size: contain;
	background-size: 100% 100%;

	height: 100%;
	width: 100%;
`;

export const Button = styled.button`
	border-radius: 20px;
	border: 1px solid #ff4b2b;
	background-color: #ff4b2b;
	color: #ffffff;
	font-size: 12px;
	font-weight: bold;
	padding: 12px 45px;
	letter-spacing: 1px;
	text-transform: uppercase;
	transition: transform 80ms ease-in;
	cursor: pointer;
	z-index: 90;

	${(props) => props.ghost && css`background: transparent;`};

	:active {
		transform: scale(0.95);
	}

	:focus {
		outline: none;
	}

	${(props) =>
		props.ghost &&
		css`
			background-color: transparent;
			border-color: #ffffff;
		`};
`;
