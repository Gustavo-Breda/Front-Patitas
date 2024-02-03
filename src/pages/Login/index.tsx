import { LoginStyled, Wrapper, InputConteiner, ValueInput, ForgotPasswordStyled, ForgotPasswordBtn, BtnDiv } from './style';
import { Link } from 'react-router-dom';

import LoginServices from '../../services/UserServices';
import StatusBar  from '../../components/StatusBar';
import BtnForm from '../../components/BtnForm';
import Input from '../../components/Input';

import banner from '../../assets/BannerLogin.svg'
import logo from '../../assets/logo2.png';

import { ReactComponent as PasswordBadgeSVG } from '../../assets/PasswordBadge.svg'
import { ReactComponent as LoginBadgeSVG } from '../../assets/LoginBadge.svg'

export interface LoginProps {
  email: string,
  senha: string
}
export default function Login () {

  const LoginFormInfo = {
    email: "string",
    senha: "string"
  }
  
  const handleSubmit = (e: React.FormEvent) => {e.preventDefault()}

  return (

    <LoginStyled>

      <StatusBar/>

      <Wrapper>
        <img src={logo} alt="Logo Patitas" />

        <InputConteiner onSubmit={handleSubmit}>
          
          <img style={{ zIndex: 1, height: "194px" }} src={banner} alt="Banner de patas de cachorro"/>
          
          <ValueInput>Login</ValueInput>
          <Input svg={<LoginBadgeSVG/>}  placeholder='Digite seu ...'/>
          <ValueInput>Senha</ValueInput>
          <Input svg={<PasswordBadgeSVG/>} placeholder='Digite seu ...'/>
          

          <ForgotPasswordStyled>
            <ForgotPasswordBtn style={ { marginTop: '5px'} }>Esqueceu sua senha?</ForgotPasswordBtn>
          </ForgotPasswordStyled>

          <BtnDiv>
            <BtnForm type="submit" onClick={() => console.log('Button clicked')} style={{ marginBottom: '12px' }} text="Entrar"/>
            <Link to="/cadastro"><BtnForm type="reset" text="Cadastrar" /></Link>
          </BtnDiv>
        </InputConteiner>
        
      </Wrapper>

    </LoginStyled>

  );

};
