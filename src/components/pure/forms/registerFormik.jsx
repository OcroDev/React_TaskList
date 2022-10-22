import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

//MODELS
//import { User } from "../../../models/user.class";
import { ROLES } from "../../../models/roles.enum";

export const RegisterFormik = () => {
  // let user = new User();

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirm: "", //*to confirm password
    role: ROLES.USER,
  };

  const registerSchema = Yup.object().shape({
    username: Yup.string()
      .min(6, "Username too short")
      .max(12, "Username too long")
      .required("Username is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    role: Yup.string()
      .oneOf([ROLES.USER, ROLES.ADMIN], "You must select a Role: User / Admin")
      .required("Role is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password too short"),
    confirm: Yup.string()
      .when("password", {
        is: (value) => (value && value.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "Passwords must match!"
        ),
      })
      .required("You must confirm the password"),
  });

  // const submit = (values) => {
  //   alert("user register: ", values);
  // };

  return (
    <div>
      <h4>Register Formik</h4>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 1000));
          alert(JSON.stringify(values, null, 2));
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
            <label htmlFor='username'>Username</label>
            <Field
              id='username'
              name='username'
              type='text'
              placeholder='Your Username'
            />
            {/* Username Errors */}
            {errors.username && touched.username && (
              <ErrorMessage name='username' component='div'></ErrorMessage>
            )}
            <label htmlFor='email'>Email</label>
            <Field
              id='email'
              name='email'
              type='email'
              placeholder='example@mail.com'
            />
            {/* Email Erros */}
            {errors.email && touched.email && (
              <ErrorMessage name='email' component='div'></ErrorMessage>
            )}

            <label htmlFor='password'>Password</label>
            <Field
              id='password'
              name='password'
              type='password'
              placeholder='Your Password'
            />
            {/* Password Errors */}
            {errors.password && touched.password && (
              <ErrorMessage name='password' component='div'></ErrorMessage>
            )}
            <label htmlFor='confirm'>Confirm Password</label>
            <Field
              id='confirm'
              name='confirm'
              type='password'
              placeholder='Confirm your password'
            />
            {/* Confirm Errors */}
            {errors.confirm && touched.confirm && (
              <ErrorMessage name='confirm' component='div'></ErrorMessage>
            )}

            <button type='submit'>Login</button>
            {isSubmitting ? <p>Sending your credentials ... </p> : null}
          </Form>
        )}
      </Formik>
    </div>
  );
};
