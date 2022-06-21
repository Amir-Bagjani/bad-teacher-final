import axios from "axios";
import Cookies from "js-cookie";

const client = axios.create({ baseURL: "http://localhost:8080/api/users" });

export const request = ({ ...options }: { [x: string]: any }) => {
  const token = Cookies.get("token");

  token && (client.defaults.headers.common['x-auth-token'] = token)

  const onSuccess = (response: any) => response;

  const onError = (error: any) => {
    return error;
  };

  return client(options).then(onSuccess).catch(onError);
};
