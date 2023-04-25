import axios from "axios";

import { BFF_URL } from "../../constants";

const request = axios.create({
  baseURL: BFF_URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Accept: "application/json",
  }
});

export default request;