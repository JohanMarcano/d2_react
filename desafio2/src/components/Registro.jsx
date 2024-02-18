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
    <div>
      <h1>Crea una cuenta</h1>
      <SocialButton icon={facebookIcon} />
      <SocialButton icon={githubIcon} />
      <SocialButton icon={linkedinIcon} />
      <p>o usa tu email para registrarte</p>
      <Formulario />
      <Alert />
    </div>
  );
};

export default Registro;

