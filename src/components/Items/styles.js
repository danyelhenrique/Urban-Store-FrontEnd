import styled from 'styled-components';

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
	position: relative;
`;

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
