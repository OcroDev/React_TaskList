import React from "react";
import {
  login,
  getAllPagedUser,
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUserById,
} from "../../services/axiosCRUDService";
import * as Yup from "yup";
import { Alert, Button, TextField } from "@mui/material";
import { useFormik } from "formik";

export const AxiosCRUDExample = () => {
  //CRUD EXAMPLES

  const authUser = (values) => {
    login(values.email, values.password)
      .then((response) => {
        if (response.data.token && response.status === 200) {
          alert(JSON.stringify(response.data.token));
          sessionStorage.setItem("token", response.data.token);
        } else {
          sessionStorage.removeItem("token");
          throw new Error("Login failure");
        }
      })
      .catch((error) => {
        sessionStorage.removeItem("token");
        let message = error.request.responseText;
        console.log(message);
        alert(`Something went wrong: ${message}`);
      })
      .finally(console.log("login done"));
  };
  const obtainAllUsers = () => {
    getAllUser()
      .then((response) => console.table(JSON.stringify(response.data.data)))
      .catch((error) => {
        alert(`Something went wrong: ${error.request.responseText}`);
      });
  };

  const obtainAllPageUser = (page) => {
    getAllPagedUser(page)
      .then((response) => {
        if (response.data.data && response.status === 200) {
          console.log(JSON.stringify(response.data.data));
        } else {
          throw new Error("users not found");
        }
      })
      .catch((error) => alert(`Something went wrong: ${error}`));
  };

  const obtainUserById = (id) => {
    getUserById(id)
      .then((response) => {
        if (response.data.data && response.status === 200) {
          console.log(response.data.data);
        } else {
          throw new Error("user not found");
        }
      })
      .catch((error) => {
        console.err(`something went wrong: ${error}`);
      })
      .finally(console.log("user obtained"));
  };

  const createNewUser = (name, job) => {
    createUser(name, job).then((response) => {
      if (response.data && response.status === 201) {
        console.log(response.data);
      } else {
        throw new Error("user not created");
      }
    });
  };
  const modifyUser = (name, job, id) => {
    updateUser(name, job, id).then((response) => {
      if (response.status === 200) {
        console.log(response.data);
      } else {
        throw new Error("user not updated");
      }
    });
  };
  const deleteUser = (id) => {
    deleteUserById(id).then((response) => {
      if (response.status === 204) {
        console.log(`the user ${id} has been deleted`);
      } else {
        throw new Error("user not deleted");
      }
    });
  };

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
      await authUser(values);
      values.email = "";
      values.password = "";
      formik.setSubmitting(false);
    },
  });

  return (
    <>
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
        {/* example buttons */}
        <button onClick={() => obtainAllUsers()}>Get all user axios</button>
        <button onClick={() => obtainUserById(1)}>Get user 1</button>
        <button onClick={() => obtainAllPageUser(2)}>
          Get all paged user axios
        </button>
        <button onClick={() => createNewUser("morpheus", "leader")}>
          Create user
        </button>
        <button onClick={() => modifyUser("morpheus", "developer", 3)}>
          update user
        </button>
        <button onClick={() => deleteUser(2)}>delete user</button>
      </div>
    </>
  );
};
