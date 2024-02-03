import { CadastroStyled, Wrapper, InputConteiner, TermosConteiner} from './style';

import StatusBar  from '../../components/StatusBar';
import BtnForm from '../../components/BtnForm';
import Input from '../../components/Input';

import checkboxPNG from '../../assets/Checkbox.png'
import logo from '../../assets/logo2.png';
import UserServices from '../../services/UserServices';

import { ReactComponent as NomeBadgeSVG } from '../../assets/NomeBadge.svg'
import { ReactComponent as CpfBadgeSVG } from '../../assets/CpfBadge.svg'
import { ReactComponent as EmailBadgeSVG } from '../../assets/EmailBadge.svg'
import { ReactComponent as PasswordBadgeSVG } from '../../assets/PasswordBadge.svg'
import React, { useState } from 'react';
export interface CadastroProps {
  nome: string,
  cpf: string,
  email: string,
  senha: string,
}


export default function Cadastro () {

  function onSubmit (userInfo: CadastroProps) {
    UserServices.createUser(userInfo);
    setUserFormInfo ({
      nome: '',
      cpf: '',
      email: '',
      senha: '',
    });

  };
  
  const  [ userFormInfo, setUserFormInfo ] = useState<CadastroProps>({
    nome: '',
    cpf: '',
    email: '',
    senha: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUserFormInfo((prevInfo) => ({
     ...prevInfo, 
     [name]: value, }))
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onSubmit(userFormInfo);
  }

  return (

    <CadastroStyled>
      
      <StatusBar/>

      <Wrapper onSubmit={handleSubmit}>
      <img src={logo} alt="Logo Patitas"/>

        <InputConteiner>
          <Input value={userFormInfo.nome} name="nome" svg={<NomeBadgeSVG/>} placeholder='Nome ...' onChange={handleChange} />
          <Input value={userFormInfo.cpf} name="cpf" svg={<CpfBadgeSVG/>} placeholder='CPF ...' onChange={handleChange} />
          <Input value={userFormInfo.email} name="email" svg={<EmailBadgeSVG/>} placeholder='E-mail ...' onChange={handleChange} />
          <Input type="password" name="senha" value={userFormInfo.senha} svg={<PasswordBadgeSVG/>} placeholder='Senha ...' onChange={handleChange} />
          <Input type="password" name="confirmarSenha" svg={<PasswordBadgeSVG/>} placeholder='Confirmar senha ...' onChange={handleChange}/>
        </InputConteiner>

        <TermosConteiner>
          <img style={{ height: '20px' }}src={checkboxPNG} alt=''/>
          <p>Concordo Com os Termos</p>
        </TermosConteiner>

        <BtnForm text="Entrar" type="submit"/>
      </Wrapper>
       
    </CadastroStyled>

  );

};