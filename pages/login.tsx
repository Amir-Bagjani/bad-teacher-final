import { useState, ReactElement, useEffect } from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { UserSelect } from "../redux/store";
import { getSession } from "../utils/getSession";
//components
import Image from "next/image";
import Layout from "../components/Layout";
import LoginFormStep1 from "../components/LoginFormStep1";
import LoginFormStep2 from "../components/LoginFormStep2";
import LoginPageFooter from "../components/LoginPageFooter";
import LoginCounter from "../components/LoginCounter";
//style
import styles from "../styles/page/Login.module.scss";

//enum type Area
export enum Area {
  step1 = "step1",
  step2 = "step2",
}

const Login = () => {
  const { user } = useSelector(UserSelect);
  const [area, setArea] = useState<Area>(Area.step1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const router = useRouter();
  const { redirect } = router.query;

  //redirect user to previous route
  useEffect(() => {
    if (user) {
      if(typeof redirect === "string"){
        router.push(redirect || '/');
      }
      else{
        router.push('/');
      }
    }
  }, [user, router]);

  return (
    <Layout>
      <main className={`${styles.loginPage} ${styles.light}`}>
        <div className={styles.loginContainer}>
          <Image
            src="/images/logo.svg"
            alt="bad-teacher-logo"
            width={200}
            height={200}
          />
          {area === "step1" && (
            <LoginFormStep1 setArea={setArea} setPhoneNumber={setPhoneNumber} />
          )}
          {area === "step2" && (
            <>
              <LoginFormStep2 setArea={setArea} phoneNumber={phoneNumber} />
              {/*count down for 130 seconds*/}
              <LoginCounter
                targetDate={new Date().getTime() + 130 * 1000}
                setArea={setArea}
              />
            </>
          )}
        </div>
        <LoginPageFooter />
      </main>
    </Layout>
  );
};

export default Login;

//do not show Header and Footer in this page
Login.getLayout = (page: ReactElement) => {
  return <>{page}</>;
};

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const auth = await getSession(context);

  if (!auth) {
    return {
      props: {
      },
    };
  } else {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
};