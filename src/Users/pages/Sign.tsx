import React, { useState } from "react";
import { Button, CheckboxContainer, Container, ErrorMessage, Form, Input, Label, Heading, Label_1, ButtonContainer } from "../styles/sign-styles";
import { useNavigate } from "react-router-dom";

export const Sign = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    termsAccepted: false,
  });

  const [error, setError] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    // Validación simple
    if (!formData.name || !formData.email || !formData.password || !formData.termsAccepted) {
      setError("Por favor, completa todos los campos y acepta los términos.");
      return;
    }
    setError("");
    // Aquí puedes manejar el registro (enviar datos a un servidor, etc.)
    console.log("Registro exitoso:", formData);
  };

  return (
    <Container>
      <Heading>Sign In Employee</Heading>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="codeSecret">Code Employee:</Label>
        <Input type="text" id="codeSecret" name="codeSecret" value={formData.name} onChange={handleChange} required />
        <Label htmlFor="name">Name:</Label>
        <Input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />

        <Label htmlFor="email">Email:</Label>
        <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />

        <Label htmlFor="password">Password:</Label>
        <Input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
        <Label htmlFor="rpassword">Repeat Password:</Label>
        <Input type="password" id="rpassword" name="rpassword" value={formData.password} onChange={handleChange} />

        <CheckboxContainer>
          <Input type="checkbox" id="terms" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} />
          <Label_1 htmlFor="terms">Accept terms and conditions</Label_1>
        </CheckboxContainer>

        {error && <ErrorMessage>{error}</ErrorMessage>}

        <ButtonContainer>
          <Button type="submit">Sign In</Button>
          <Button onClick={() => navigate("/login")}> Back </Button>
        </ButtonContainer>
      </Form>
    </Container>
  );
};
