import { ConfirmeEmailStyled } from './style';

import banner from '../../assets/BannerConfirmeEmail.png';
import StatusBar  from '../../components/StatusBar';
import BtnEmail from '../../components/BtnEmail';
import logo from '../../assets/logo1.png';


export default function ConfirmeEmail () {

  return (

    <ConfirmeEmailStyled>

      <StatusBar/>

      <img src={logo} alt="Logo Patitas"/>
      <img style={{ paddingBottom: '21px' }} src={banner} alt="Banner de gatinho astronauta"/>
      <BtnEmail text="Confirme seu E-mail" onClick={() => console.log('Button clicked')} />

    </ConfirmeEmailStyled>

  );

};
