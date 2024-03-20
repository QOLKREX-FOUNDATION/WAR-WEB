import axios from "axios";

const mailApi = axios.create({
  // baseURL: "https://api.renian.pe/api/request-register",
  // baseURL: "http://localhost:4000/api/request-register",
  baseURL: "https://war-email-api.vercel.app/api/request-register",
});

export default mailApi;
