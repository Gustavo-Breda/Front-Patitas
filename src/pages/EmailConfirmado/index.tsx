import { EmailConfirmadoStyled, EmailConfirmadoButton } from './style';
import StatusBar  from '../../components/StatusBar';

import banner from '../../assets/BannerEmailConfirmado.png';
import logo from '../../assets/logo1.png';


export default function EmailConfirmado () {

  return (

    <EmailConfirmadoStyled>

      <StatusBar/>

      <img src={logo} alt="Logo Patitas"/>
      <img style={{ zIndex: 1 }} src={banner} alt="Banner de um cachorrinho com sua pata acima do botão"/>
      <EmailConfirmadoButton text="E-mail confirmado" onClick={() => console.log('Button clicked')}/>

    </EmailConfirmadoStyled>

  )

};
