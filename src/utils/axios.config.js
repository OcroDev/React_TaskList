import axios from "axios";
//DEFAULT AXIOS
export default axios.create({
  baseURL: "",
  responseType: "json",
  timeout: 6000,
});
