import { ReactNode } from "react";
import { useRouter } from "next/router";
import { useAuthIsReady } from "../hooks/useFetchUser";
//components
import Head from "next/head";
import Loader from "./Loader";
//redux
import { useSelector } from "react-redux";
import { UserSelect } from "../redux/store";

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
  const { user } = useSelector(UserSelect);
  const router = useRouter();

  //check if session exists
  useAuthIsReady();

  //check if username exist
  // useEffect(() => {
  //   if (user && user?.isValid === false) {
  //     router.replace("/profile/edit-account");
  //   }
  // }, [user, router]);

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
      <Loader />
      {children}
    </>
  );
};

export default Layout;
