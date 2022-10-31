import React from "react";
import { Formik, Field, Form, ErrorMessage, useFormik } from "formik";
import * as Yup from "yup";
import { Alert, Button, TextField } from "@mui/material";
import { Navigate } from "react-router-dom";

export const LoginFormik = ({ userState }) => {
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await new Promise((r) => setTimeout(r, 1000));
      ////alert(JSON.stringify(values, null, 2));
      //* we save de data in the local storage
      localStorage.setItem("credentials", values);
      values.email = "";
      values.password = "";
      formik.setSubmitting(false);
      userState();
    },
  });

  return (
    <div>
      <h4 className="m-auto">Login</h4>

      <form
        onSubmit={formik.handleSubmit}
        className="d-flex justify-content-center align-item-center mb-4"
      >
        <div className="form-outline flex-fill form-group mt-2">
          <TextField
            fullWidth
            id="email"
            name="email"
            label="Email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            className="mb-4"
          />
          <TextField
            fullWidth
            id="password"
            name="password"
            label="Password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            className="mb-4"
          />
          <Button type="submit" variant="outlined">
            Login
          </Button>
          {formik.isSubmitting ? (
            <Alert severity="info">Login your credentials ... </Alert>
          ) : null}
        </div>
      </form>
    </div>
  );
};
