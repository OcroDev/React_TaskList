import React from "react";
import { LoginFormik } from "../../components/pure/forms/loginFormik";

export const LoginPage = ({ state }) => {
  return (
    <div className="m-4">
      <LoginFormik userState={state}></LoginFormik>
    </div>
  );
};
