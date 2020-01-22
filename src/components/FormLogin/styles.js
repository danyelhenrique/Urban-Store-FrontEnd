import styled, { css } from 'styled-components';

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


	background: url('${props => props.background}');

	background-repeat: no-repeat;
	background-position: center center;

	background-size: 100% 100%;

	input {
		color: ${props => (props.isSignUp ? '#fff' : '#000')};
	}


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
    -webkit-box-shadow: 0 0 0 100px rgba(0, 0, 0, 0.01) inset;
    box-shadow: 0 0 0 100px rgba(0, 0, 0, 0.01) inset;
  }

  input {
    padding: 12px 15px;

    margin: 8px 0;

    width: 100%;

    outline: none;

    border: none;
    border-bottom: 2px solid rgba(240, 94, 35, 1);

    background: transparent;

    font-family: 'Roboto';

    ::placeholder {
      color: #fff;
    }

    :focus {
      background: transparent;
    }
  }
`;

export const SocialContainer = styled.div`
  margin: 20px 0;
`;

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
	background: url('${props => props.icon}');
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

  ${props => props.ghost
    && css`
      background: transparent;
    `};

  :active {
    transform: scale(0.95);
  }

  :focus {
    outline: none;
  }

  ${props => props.ghost
    && css`
      background-color: transparent;
      border-color: #ffffff;
    `};
`;
