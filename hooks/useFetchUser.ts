import { useEffect } from "react";
import { useRouter } from "next/router";
import { request } from "../utils/axios-util";
import Cookies from "js-cookie";
//redux
import { useDispatch } from "react-redux";
import { logoutUser, loginUser, authIsReady } from "../redux/userSlice";
//react-query
import { useMutation, useQuery } from "react-query";

export const useSendPhoneNumber = () => {
  return useMutation<any, any, any>((phoneNumber: any) =>
    request({ url: `/phone-validate`, method: "post", data: phoneNumber })
  );
};

export const useLogin = () => {
  const dispatch = useDispatch();
  return useMutation<any, any, any>(
    (cedentials: any) => request({ url: `/phone-validate`, method: "post", data: cedentials }),
    {
      onSuccess: (data) => {
        if(data){
          const token = data.headers["x-auth-token"]        
          console.log(data);
          Cookies.set("token", token, {
            sameSite: "strict",
            path: "/",
            expires: 1,
            secure: true,
          });
          dispatch(loginUser(data.data));
        }
      },
    }
  );
};

export const useLogout = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  
  const logout = () => {
    Cookies.remove('token')
    dispatch(logoutUser());
    router.push("/");
  };

  return { logout };
};

export const useEditAuth = () => {
  const dispatch = useDispatch();
  return useMutation<any, any, any>(
    (credentials: any) =>
      request({ url: "update-user", method: "put", data: credentials }),
    {
      onSuccess: (data) => {
        dispatch(
          loginUser({
            isValid: true,
            name: "aa",
            email: "a@gmail.com",
            ...data.data,
          })
        );
      },
    }
  );
};

export const useAuthIsReady = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = Cookies.get("token");

    if (token) {
      const refresh = async () => {
        const res = await request({ url: "/users/me" });
        dispatch(
          authIsReady({ isValid: true, name: "", email: "", ...res.data })
        );
      };
      refresh();
    } else {
      dispatch(authIsReady(null));
    }
  }, []);
};
