import React, { useState } from 'react';

import {
	Container,
	Image,
	FormContainer,
	FormContainerLogin,
	SocialContainer,
	Social,
	Icon,
	Ghost,
	Button,
	InputContainer,
	Form
} from './styles';

export default function Login() {
	const [ signIn, setSignIn ] = useState(false);
	const [ signUp, setSignUp ] = useState(true);
	const [ background, setBackground ] = useState('/login/oito.jpg');
	const [ formBackground, setFormBackground ] = useState('/login/cinco.jpg');

	function signUpSlider(event) {
		event.preventDefault();
		setBackground('/login/oito.jpg');
		setFormBackground('/login/cinco.jpg');
		setSignIn(false);
		setSignUp(true);
	}

	function signInSlider(event) {
		event.preventDefault();
		setBackground('/login/cinco.jpg');
		setFormBackground('/login/oito.jpg');

		setSignIn(true);
		setSignUp(false);
	}

	return (
		<Container signIn={signIn} signUp={signUp}>
			<Image signIn={signIn} signUp={signUp} background={background}>
				<Ghost>
					<h2>Hello, Friend!</h2>
					<span>Enter your personal details and start journey with us</span>
					<Button ghost onClick={(e) => signUpSlider(e)}>
						Sing Up
					</Button>
				</Ghost>

				<Ghost>
					<h2> Welcome Back!</h2>
					<span>To keep connected with us please login with your personal info</span>
					<Button ghost onClick={(e) => signInSlider(e)}>
						Sing In
					</Button>
				</Ghost>
			</Image>
			<FormContainerLogin signIn={signIn}>
				<Form background={formBackground}>
					<h1>Sign in</h1>

					<SocialContainer>
						<Social href="#" class="social">
							<Icon icon="/social/google.svg" />
						</Social>
						<Social href="#" class="social">
							<Icon icon="/social/facebook.svg" />
						</Social>
						<Social href="#" class="social">
							<Icon icon="/social/twiter.svg" />
						</Social>
					</SocialContainer>
					<span>or use your email for registrationa</span>
					<InputContainer>
						<input type="email" name="email" placeholder="Email" />
					</InputContainer>
					<InputContainer>
						<input type="password" name="password" placeholder="Password" />
					</InputContainer>
					<p>Forgot your password?</p>
					<Button> Sign in</Button>
				</Form>
			</FormContainerLogin>
			{/*  */}

			<FormContainer signUp={signUp}>
				<Form background={formBackground}>
					<h1>Create Account</h1>

					<SocialContainer>
						<Social href="#" class="social">
							<Icon icon="/social/google.svg" />
						</Social>
						<Social href="#" class="social">
							<Icon icon="/social/facebook.svg" />
						</Social>
						<Social href="#" class="social">
							<Icon icon="/social/twiter.svg" />
						</Social>
					</SocialContainer>
					<span>or use your email for registration</span>

					<InputContainer>
						<input type="email" name="email" placeholder="Email" />
					</InputContainer>
					<InputContainer>
						<input type="password" name="password" placeholder="Password" />
					</InputContainer>
					<InputContainer>
						<input type="password" name="confirm-passwod" placeholder="Confirm you Password" />
					</InputContainer>
					<Button> Sign Up</Button>
				</Form>
			</FormContainer>
		</Container>
	);
}
