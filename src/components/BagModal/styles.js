import styled from 'styled-components';

export const ContainerModal = styled.div`
    height: 100%;
	opacity: ${props => !props.isActive ? 0 : 1};
	position: absolute;
	top: 0;
	
	pointer-events: ${props => !props.isActive ? "none" : "all"};

	
	.modal{
		transform: translateX(${props => props.isActive ? "0%" : "100%"});
		opacity: ${props => !props.isActive ? 0 : 1};

		transition: all 2s ease;

		background: #000;

		h6{
			color: #fefefe;
		}
	}
`;

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

	margin-left: 15px;
    margin: 5px 0;

    font-size: 0.8rem;
    font-weight: 300;
    letter-spacing: 2px;
    color: #000;

    cursor: pointer;
`

export const Item = styled.div`
	display: flex;
	height: 170px;
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

	margin-left: 15px;
	> small{
		font-weight: 400;
		font-size: 0.7rem;
		color: rgb(220,87,33);
		line-height: calc(0.7rem * 1.5);
		margin-top: 5px;
		min-height: calc(0.7rem * 2);
	}


`;

export const ItemName =  styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	
	font-weight: 400;
    color: #a2a2a2;
	font-size: 0.9rem;
	line-height: calc(0.9rem * 1.5);
	text-transform: capitalize;


	> div > button {
		width: 100%;
		height: 100%;
		border: none;
		background: transparent;
	}
	> div {
		width: 30px;
    	height: 15px;
		align-self: flex-start;
	}

	span{
		text-overflow: ellipsis;
	}

`;


export const Select = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	width: 60%;
	height:25px;
	color: #a2a2a2;

	>div > button {
		width: 100%;
		height: 100%;
		background: transparent;
		border: none;
	}

	input {
		width: 20%;
		border: none;
		background: transparent;
		color: #fff;
		text-align: center;
	}
`

export const MoreLess = styled.div`
	height: 100%;
  	width: 25px;

	  button {
		width: 100%;
		height: 100%;
		background: transparent;
		border: none;

		display: flex;
		align-items: center;
	    justify-content: center;

		text-align: center;


		span{
			display: inline-block;
			font-size:  18px;
			color: rgb(254, 254, 254);
		}
	}

`