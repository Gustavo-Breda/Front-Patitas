import React from 'react';
import styled from 'styled-components'


interface InputProps {
    svg: React.ReactNode;
    type?: string,
    name?: string,
    value?: any,
    placeholder: string;
    onChange?: any;
}

const InputStyled = styled.div `
    padding: 10px 10px 10px 0;

    flex-direction: column;
    display: inline-flex;
    gap: 10px;
`;

const InputWrapper = styled.div `
  display: inline-flex;
  justify-content: start; 
  align-items: center; 
  gap: 10px; 
`;

const SvgConteiner = styled.div `
  display: inline-flex;
`;

const InputConteiner = styled.input `
    color: rgba(5.80, 7.15, 19.32, 0.40); 
    word-wrap: break-word;
    background: none;
    padding: 0;
    height: 100%;

    font-family: Verdana; 
    font-weight: 400; 
    font-size: 16px; 

    border: none;
    outline: none;
`;

const InputDiv = styled.div `
    width: 100%; 
    height: 100%; 
    border: 1px rgba(5, 61, 88, 0.80) solid;
`;

const Input: React.FC<InputProps> = ({ type, name, svg, value, placeholder, onChange }) => {

    return (

      <InputStyled>
        <InputWrapper>
          <SvgConteiner>{svg}</SvgConteiner>
          <InputConteiner type={type} name={name} required value={value} placeholder={placeholder} onChange={onChange} />
        </InputWrapper>
        <InputDiv/>
      </InputStyled>

    );

};
  
export default Input;