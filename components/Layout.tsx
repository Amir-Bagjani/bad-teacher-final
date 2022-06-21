import { ReactNode } from "react";
import { useAuthIsReady } from "../hooks/useFetchUser";
//components
import Head from "next/head";
import Loader from "./Loader";

const KEYWORDS =
  "Bad Teacher, English, English Course, English tutorial, آموزش زبان انگلیسی , پکیج آموزش انگلیسی";

const DESCRIPTION =
  "آکادمی آموزش زبان انگلیسی  Bad Teacher، یکی از پرتلاش ترین آکادمی ها در زمینه آموزش زبان انگلیسی می باشد. دوره های رایگان در یوتیوب و آموزش اصطلاحات کاربردی در اینستاگرام";

interface LayoutProps {
  title?: string;
  keywords?: string;
  description?: string;
  children: ReactNode;
}

const Layout = ({ title, keywords, description, children }: LayoutProps) => {
  //check if session exists
  useAuthIsReady();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content={keywords ? `${keywords}, ${KEYWORDS}` : KEYWORDS}
        ></meta>
        <meta
          name="description"
          content={description ? description : DESCRIPTION}
        ></meta>
        <title>
          {title
            ? `${title} | Bad Teacher آموزش زبان انگلیسی`
            : `آموزش زبان انگلیسی Bad Teacher`}
        </title>
      </Head>
      <Loader />
      {children}
    </>
  );
};

export default Layout;
