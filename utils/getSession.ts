import axios from "axios";
import { GetServerSidePropsContext } from "next";

export const getSession = async (context: GetServerSidePropsContext) => {
  const cookie = context?.req.cookies || "";

  if (!cookie.token) {
    return false;
  } else {
    
    axios.defaults.headers.common['x-auth-token'] = cookie.token
    const res = await axios.get("http://localhost:8080/api/users/me") 
    const token = res.config.headers?.["x-auth-token"];    

    if (cookie.token === token) {
      return { ...res.data };
    } else {
      return false;
    }
  }
};
