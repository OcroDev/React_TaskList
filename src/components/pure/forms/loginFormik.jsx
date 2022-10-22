import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export const LoginFormik = () => {
  const Errormsg = <p style={{ color: "red", fontWeight: "bold" }}></p>;

  const initialCredentials = {
    email: "",
    password: "",
  };
  return (
    <>
      <h4>Login Formik</h4>
      <Formik
        initialValues={initialCredentials}
        validationSchema={loginSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1000));
          alert(JSON.stringify(values, null, 2));
          //* we save de data in the local storage
          localStorage.setItem("credentials", values);
          values.email = "";
          values.password = "";
        }}
      >
        {({
          values,
          touched,
          errors,
          isSubmitting,
          handleChange,
          handleBlur,
        }) => (
          <Form>
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              type="email"
              placeholder="example@email.com"
            />

            {errors.email && touched.email && (
              <ErrorMessage name="email" component="div"></ErrorMessage>
            )}

            <label htmlFor="password">Password</label>
            <Field
              id="password"
              name="password"
              type="password"
              placeholder="password"
            />

            {errors.password && touched.password && (
              <ErrorMessage name="password" component="div"></ErrorMessage>
            )}

            {/* // <div className="error">
              //   <p>{errors.email}</p>
              // </div> */}
            <button type="submit">Login</button>
            {isSubmitting ? <p>Login your credentials ... </p> : null}
          </Form>
        )}
      </Formik>
    </>
  );
};
