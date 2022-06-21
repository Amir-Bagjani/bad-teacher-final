import { useEffect } from "react";
import { useRouter } from "next/router";
import { request } from "../utils/axios-util";
import Cookies from "js-cookie";
//react-query
import { useMutation } from "react-query";
//redux
import { useDispatch } from "react-redux";
import { logoutUser, loginUser, authIsReady } from "../redux/userSlice";

export const useSendPhoneNumber = () => {
  return useMutation((phoneNumber: { phoneNumber: string }) =>
    request({ url: `/phone-validate`, method: "post", data: phoneNumber })
  );
};

export const useLogin = () => {
  const dispatch = useDispatch();
  return useMutation(
    (cedentials: { phoneNumber: string; smsToken: string }) =>
      request({ url: `/phone-validate`, method: "post", data: cedentials }),
    {
      onSuccess: (data) => {
        if (data) {
          const token = data.headers["x-auth-token"];
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
    Cookies.remove("token");
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
        const res = await request({ url: "/me"});
        dispatch(
          authIsReady(res.data)
        );
      };
      refresh();
    } else {
      dispatch(authIsReady(null));
    }
  }, []);
};
