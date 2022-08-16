import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";

const formData = {
  email: "",
  password: "",
  displayName: "",
};

const formValidation = {
  email: [(value) => value.includes("@"), "El correo debe de tener un @"],
  password: [
    (value) => value.length >= 6,
    "El password debe de tener mas de 6 caracteres.",
  ],
  displayName: [(value) => value.length >= 1, "El nombre es obligatorio."],
};

export const RegisterPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const {
    formState,
    displayName,
    email,
    password,
    onInputChange,
    isFormValid,
    displayNameValid,
    emailValid,
    passwordValid,
  } = useForm(formData, formValidation);

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
  };
  return (
    <AuthLayout title="Crear Cuenta">
      {/*<h1>FormValid: {isFormValid ? "Válido" : "Invalido"}</h1>*/}
      <form onSubmit={onSubmit}>
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Nombre Completo"
              type="text"
              name="displayName"
              placeholder="Nombre"
              fullWidth
              value={displayName}
              onChange={onInputChange}
              error={!!displayNameValid && formSubmitted}
              helperText={displayNameValid}
            />
          </Grid>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Correo"
              type="email"
              name="email"
              placeholder="correo@hotmail.com"
              fullWidth
              value={email}
              onChange={onInputChange}
              error={!!emailValid && formSubmitted}
              helperText={emailValid}
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Contraseña"
              type="password"
              name="password"
              placeholder="Contraseña"
              fullWidth
              value={password}
              onChange={onInputChange}
              error={!!passwordValid && formSubmitted}
              helperText={passwordValid}
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth type="submit">
                Crear Cuenta
              </Button>
            </Grid>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>¿Ya tienes Cuenta?</Typography>

            <Link component={RouterLink} color="inherit" to="/auth/login">
              Ingresar
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
