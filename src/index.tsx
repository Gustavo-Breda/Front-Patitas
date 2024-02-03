import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import React from 'react';

import './index.css';
import Router from './routes/Routes';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render (<React.StrictMode><Router/></React.StrictMode>);

reportWebVitals();

// Documentar Postman -> Login Integrado -> Cadastro Integrado -> BadgeCart na Home -> Perfil

// FF: GlobalStyles, nome dos assets BADGE e PATITAS de /assinatura