import { CompraConfirmadaStyled, CompraConfirmadaButton } from './style';
import StatusBar  from '../../components/StatusBar';

import banner from '../../assets/BannerCompraConfirmada.png';
import logo from '../../assets/logo1.png';


export default function CompraConfirmada () {

  return (

    <CompraConfirmadaStyled>

      <StatusBar/>

      <img src={logo} alt="Logo Patitas"/>
      <img style={{ zIndex: 1 }} src={banner} alt="Banner de um cachorrinho com sua pata acima do botão"/>
      <p>Compra realizada com sucesso!</p>
      <CompraConfirmadaButton text="Continuar comprando" onClick={() => console.log('Button clicked')}/>

    </CompraConfirmadaStyled>

  )

};
