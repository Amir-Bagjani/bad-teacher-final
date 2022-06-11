import { useState, ReactElement } from "react";
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
  const [area, setArea] = useState<Area>(Area.step1);

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
          {area === "step1" && <LoginFormStep1 setArea={setArea} />}
          {area === "step2" && (
            <>
              <LoginFormStep2 setArea={setArea} />
              {/*count down for 2 seconds*/}
              <LoginCounter targetDate={new Date().getTime() + 120 * 1000} />
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
