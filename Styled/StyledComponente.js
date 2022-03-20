import styled from "styled-components"

export const Tablero = styled.board`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 80vw;
	margin: 20px auto;
	margin-top: -40px;
	padding: 0.5rem;
	background-color: hsl(180, 31%, 95%);
	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
	border-radius: 6px;
	cursor: pointer;
`
export const lista = styled.list`
	max-width: 65vw;
`

export const tag = styled.tag`
	margin-top: 10px;
	margin-left: 5px;
	color: hsl(180, 31%, 95%);
	background-color: hsl(180, 29%, 50%);
	padding: 10px;
	border-radius: 3px;
`
 