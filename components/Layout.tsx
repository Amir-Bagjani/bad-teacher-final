import Head from "next/head";
import { ReactNode } from "react";

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
  return (
    <>
      <Head>
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
      {children}
    </>
  );
};

export default Layout;
