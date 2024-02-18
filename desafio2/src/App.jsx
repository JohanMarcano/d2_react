import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registro from './components/Registro';


const App = () => {
  const [mensaje, setMensaje] = useState('');
  const [tipoMensaje, setTipoMensaje] = useState('');

  const handleAlert = (mensaje, tipo) => {
    setMensaje(mensaje);
    setTipoMensaje(tipo);
  };

  return (
    <div className="app-container">
      <Registro handleAlert={handleAlert} />
      {/* Otros componentes o contenido de la aplicación */}
    </div>
  );
};

export default App;
