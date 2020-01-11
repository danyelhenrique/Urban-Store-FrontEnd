import styled from 'styled-components';


export const StoreData =styled.div`
    display: flex;
    flex-direction:column;
	overflow-y: scroll;
`;

export const Close = styled.div`
    display: flex;
    align-items: center;
	justify-content: space-between;

	width: 100%;
	text-transform: uppercase;

	font-size: 1.5rem;
	font-weight: 400;
	letter-spacing: 2px;
	color: rgba(0,0,0,0.7);

	h6 {
		font-size: 1rem;
	}

	>div > button{
		width: 100%;
		height: 100%;
		border: none;
		background: transparent;
	}

`;
export const Button =styled.button`
    border: none;
    border-bottom: 1px solid #dedede;
    background: transparent;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    /* padding-top: 10px; */
    padding: 10px;
    margin: 5px 0;

    font-size: 0.8rem;
    font-weight: 300;
    letter-spacing: 2px;
    color: #000;

    cursor: pointer;
`

export const Item = styled.div`
	display: flex;
	height: 160px;
	max-height: 200px;

	width: 100%;

	line-height: 15px;
    letter-spacing: 2px;

	margin: 5px 0;

`;

export const Image = styled.div`
	width: 40%;
	height: 100%;
	background: url("${props => props.background}");
	background-position: center;
	background-size: 100% 100%;
	background-color: transparent;

`;


export const Details = styled.div`
	width: 60%;
	height: 100%;
	display: flex;
	flex-direction:column;

	padding:  20px;

	> small{
		font-weight: bold;
		font-size: 0.7rem;
		color: #000;
	}


`;

export const ItemName =  styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	
	font-weight: 400;
	color: #000;
	font-size: 0.9rem;
	text-transform: capitalize;

	> div > button {
		width: 100%;
		height: 100%;
		border: none;
		background: transparent;
	}
	> div {
		width: 15px;
    	height: 15px;
		align-self: flex-start;
	}

`;


export const Select = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	width: 80%;
	color: rgba(0,0,0,0.8);

	>div > button {
		width: 100%;
		height: 100%;
		background: transparent;
		border: none;
	}
	> div{
		width: 15px;
    	height: 15px;
	}

	input {
		width: 20%;
	}
`