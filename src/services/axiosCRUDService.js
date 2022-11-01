import axios from "axios";

/**
 * Login method to ReqRes endpoint
 * @param {string} email
 * @param {string} password
 */
export const login = (email, password) => {
  let body = {
    email,
    password,
  };
  //Returns the response with a Promise
  return axios.post("https://reqres.in/api/login", body);
};

// 0btain all users
export const getAllUser = () => {
  return axios.get("https://reqres.in/api/users");
};

// Obtain user by page
export const getAllPagedUser = (page) => {
  return axios.get(`https://reqres.in/api/users?page=${page}`);
};

// Obtain user by id
export const getUserById = (id) => {
  return axios.get(`https://reqres.in/api/users/${id}`);
};

// create user
export const createUser = (name, job) => {
  let body = {
    name,
    job,
  };
  //Returns the response with a Promise
  return axios.post("https://reqres.in/api/users", body);
};

// Update user
export const updateUser = (name, job, id) => {
  let body = {
    name,
    job,
  };
  //Returns the response with a Promise
  return axios.put(`https://reqres.in/api/users/${id}`, body);
};

// Delete user
export const deleteUserById = (id) => {
  //Returns the response with a Promise
  return axios.delete(`https://reqres.in/api/users/${id}`);
};
