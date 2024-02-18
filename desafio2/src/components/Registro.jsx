import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import SocialButton from './SocialButton';
import Formulario from './Formulario';
import Alert from './Alert';


const Registro = () => {
  const facebookIcon = 'facebook';
  const githubIcon = 'github';
  const linkedinIcon = 'linkedin';

  return (
    <div className="container mt-5">
      <div className="card text-center">
        <div className="card-body">
          <h1 className="card-title">Crea una cuenta</h1>
          <SocialButton icon={facebookIcon} />
          <SocialButton icon={githubIcon} />
          <SocialButton icon={linkedinIcon} />
          <p className="card-text">o usa tu email para registrarte</p>
          <Formulario />
          <Alert />
        </div>
      </div>
    </div>
  );
};

export default Registro;

