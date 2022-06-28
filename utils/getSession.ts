import axios from "axios";
import { GetServerSidePropsContext } from "next";
import { User } from "../types/types";

export const getSession = async (context: GetServerSidePropsContext) => {
  const cookie = context?.req.cookies || "";

  if (!cookie.token) {
    return null;
  } else {
    axios.defaults.headers.common['x-auth-token'] = cookie.token
    //TODO -> make an variable in .env file and put the base URL in it ;)
    const res = await axios.get("http://localhost:8080/api/users/me") 
    const token = res.config.headers?.["x-auth-token"];    

    if (cookie.token === token) {
      return { ...res.data } as User;
    } else {
      return null;
    }
  }
};
