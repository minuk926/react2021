/*

npm i @emotion/core @emotion/styled
@emotion/react @emotion/babel-preset-scss-prop
*/

/** @jsxImportSource @emotion/react */
//import {jsx, scss} from '@emotion/react';
import styled from '@emotion/styled';

const EmotionButton = styled.button`
	background: transparent;
	border-radius: 5px;
	border: 2px solid palevioletred;
	color: palevioletred;
	margin: 0 1em;
	padding: 0.25em 1em;
	font-size: 20px;
	
	
`;

export default EmotionButton;