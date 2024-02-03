import React from 'react';
import styled from 'styled-components';


interface ButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  style?: React.CSSProperties;
  text: string;
}

const ButtonStyled = styled.button`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25); 
  background: #E97B0C; 
  border-radius: 18px; 
  padding: 10px 40px;
  width: 285px;

  display: inline-flex;
  align-items: center; 
  justify-content: center; 

  color: #E6E8E9; 
  text-align: center;
  word-wrap: break-word;

  font-family: Verdana;
  font-weight: 700; 
  font-size: 24px; 
  
  cursor: pointer;
  border: none;
`;

const BtnForm: React.FC<ButtonProps> = ({ type, onClick, style, text }) => (

  <ButtonStyled type={type} onClick={onClick} style={style}>
    {text}
  </ButtonStyled>

);

export default BtnForm;