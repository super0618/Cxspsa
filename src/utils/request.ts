import axios from "axios";
import type { AxiosRequestConfig } from "axios";

axios.defaults.baseURL = `${process.env.REACT_APP_BACKEND_URL || ""}/api/`;

const option: AxiosRequestConfig = {
  //   validateStatus: () => true,
};

const setToken = (token: string) => {
  axios.defaults.headers.common["Authorization"] = token;
  localStorage.setItem("cxspsa", token);
};

const clearToken = () => {
  delete axios.defaults.headers.common["Authorization"];
  localStorage.removeItem("cxspsa");
};

const post = (endpoint: string, payload: any = {}) => {
  return new Promise((resolve, reject) => {
    axios
      .post(endpoint, payload, option)
      .then(({ data }) => resolve(data))
      .catch(({ response: { data } }) => reject(data));
  });
};

const request = {
  setToken,
  clearToken,
  post,
};

export default request;
