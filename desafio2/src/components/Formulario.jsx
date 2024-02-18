import React, { useState } from 'react';

const Formulario = ({ handleAlert, handleRegistration }) => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    contrasena: '',
    confirmarContrasena: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación de campos vacíos
    if (!formData.nombre || !formData.email || !formData.contrasena || !formData.confirmarContrasena) {
      handleAlert('Completa todos los campos', 'danger');
      return;
    }

    // Validación de formato de email
    if (!isValidEmail(formData.email)) {
      handleAlert('Ingresa un email válido', 'danger');
      return;
    }

    // Validación de contraseñas iguales
    if (!arePasswordsEqual(formData.contrasena, formData.confirmarContrasena)) {
      handleAlert('Las contraseñas no coinciden', 'danger');
      return;
    }

    // Mensaje de éxito
    handleRegistration('Registro exitoso', 'success');
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const arePasswordsEqual = (password, confirmPassword) => {
    return password === confirmPassword;
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="nombre" className="form-label">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          className="form-control"
          value={formData.nombre}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-control"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="contrasena" className="form-label">Contraseña</label>
        <input
          type="password"
          id="contrasena"
          name="contrasena"
          className="form-control"
          value={formData.contrasena}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="confirmarContrasena" className="form-label">Confirmar Contraseña</label>
        <input
          type="password"
          id="confirmarContrasena"
          name="confirmarContrasena"
          className="form-control"
          value={formData.confirmarContrasena}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="btn btn-success">Registrarse</button>
    </form>
  );
};

export default Formulario;
