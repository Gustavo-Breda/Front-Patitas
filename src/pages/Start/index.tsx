import { useNavigate } from "react-router-dom";
import { StartStyled } from "./style";
import { useEffect } from 'react';

import logo from '../../assets/logo1.png';


const ExitStart = () => {

  const navigate = useNavigate();

  useEffect(() => {

    const timeoutId = setTimeout(() => {navigate('/login');}, 1000);

    return () => clearTimeout(timeoutId);

  }, [navigate]);

  return null;

};

const Start = () => {

  return (

    <StartStyled>
      <img src={logo} alt="Logo Patitas"/>
      <ExitStart/>
    </StartStyled>
    
  );

};

export default Start;