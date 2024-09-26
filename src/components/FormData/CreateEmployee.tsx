import { useState } from "react";
import bcrypt from "bcryptjs";
import { Main } from "../../styles/stylesComponents";

export const CreateEmployee = () => {
  const [formData, setFormData] = useState({
    photo: "",
    fullName: "",
    position: "Manager",
    email: "",
    phone: "",
    startDate: "",
    description: "",
    status: "Active",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    setFormData({
      ...formData,
      [name]: type === "file" ? URL.createObjectURL(files[0]) : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Hashing the password
    const hashedPassword = await bcrypt.hash(formData.password, 10);

    // Creating the final employee data object
    const employeeData = {
      ...formData,
      password: hashedPassword,
    };

    console.log("Employee Data:", employeeData);

    alert("El empleado se ha registrado con éxito.");
  };

  return (
    <Main $layout>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Foto:</label>
          <input type="file" name="photo" onChange={handleChange} accept="image/*" />
          {formData.photo && <img src={formData.photo} alt="Employee" width="100" />}
        </div>
        <div>
          <label>Nombre Completo:</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
        </div>
        <div>
          <label>Puesto de Trabajo:</label>
          <select name="position" value={formData.position} onChange={handleChange}>
            <option value="Manager">Manager</option>
            <option value="Recepción">Recepción</option>
            <option value="Servicio de Habitaciones">Servicio de Habitaciones</option>
          </select>
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Número de Teléfono:</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <div>
          <label>Fecha de Alta:</label>
          <input type="date" name="startDate" value={formData.startDate} onChange={handleChange} required />
        </div>
        <div>
          <label>Descripción de Funciones:</label>
          <textarea name="description" value={formData.description} onChange={handleChange} required />
        </div>
        <div>
          <label>Estado:</label>
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="Active">Activo</option>
            <option value="Inactive">Inactivo</option>
          </select>
        </div>
        <div>
          <label>Password:</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit">Registrar Empleado</button>
      </form>
    </Main>
  );
};
