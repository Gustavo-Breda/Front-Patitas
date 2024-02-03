import React from 'react';
import styled from 'styled-components'


interface ButtonProps {
  className?: string;
  text: string;
  onClick: () => void;
}

const StyledButton2 = styled.button`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  background: #053D58;
  border-radius: 18px;
  padding: 10px 40px;
  width: 285px;

  gap: 40px;
  align-items: center;
  display: inline-flex;
  justify-content: center;

  color: #E6E8E9;
  text-align: center;
  word-wrap: break-word;

  font-family: Verdana;
  font-weight: 400;
  font-size: 16px;
  
  cursor: pointer;
`;

const BtnEmail: React.FC<ButtonProps> = ({ className, text, onClick }) => (

  <StyledButton2 className={ className } onClick={ onClick }>
    {text}
  </StyledButton2>

);

export default BtnEmail;