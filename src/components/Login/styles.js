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


`;

export const Image = styled.div`
	height: 100%;
	width: 50%;
	transform: translateX(-50%);
	position: absolute;
	z-index: 10;
	box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
	
	background: url('${(props) => props.background}');
	
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

	${(props) => props.signIn
		&& css`
			transform: translateX(50%);
			div:last-child {
				display: none;
			}
		`};

	${(props) => props.signUp
		&& css`
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

export const SignUpContainer = styled.div`
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

		${(props) => props.signUp
		&& css`
			form {
				input:-webkit-autofill,
	input:focus:-webkit-autofill {
		-webkit-box-shadow: 0 0 0 100px rgba(0, 0, 0, 0.8) inset;
	}
				h1,
				span,
				p ,
				input{
					color: #fff;
				}
			}
			form input {
				border: 1px solid #fff;
				
			}
		`};
`;

export const SignInContainer = styled.div`
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
	${(props) => props.signIn
		&& css`
			form {
					input:-webkit-autofill,
					input:focus:-webkit-autofill {
						-webkit-box-shadow: 0 0 0 100px rgba(0, 0, 0, 0.8) inset;
				}
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


export const Button = styled.button`
	border-radius: 20px;
	border: 1px solid rgba(240, 94, 35, 1);
	background-color: rgba(240, 94, 35, 1);
	color: #ffffff;
	font-size: 12px;
	font-weight: bold;
	padding: 12px 45px;
	letter-spacing: 1px;
	text-transform: uppercase;
	transition: transform 80ms ease-in;
	cursor: pointer;
	z-index: 90;

	${(props) => props.ghost && css`
		background: transparent;
		border: 1px solid rgba(240, 94, 35, 1);
	`};

	:active {
		transform: scale(0.95);
	}

	:focus {
		outline: none;
	}

	${(props) => props.ghost
		&& css`
			background-color: transparent;
		`};
`;
