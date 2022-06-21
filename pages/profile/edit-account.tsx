import { useCallback, useEffect, useState } from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { useEditAuth } from "../../hooks/useFetchUser";
import { getSession } from "../../utils/getSession";
//components
import Layout from "../../components/Layout";
import ProfileLayout from "../../components/ProfileLayout";
import { MdEmail, MdPerson } from "react-icons/md";
//style
import styles from "../../styles/page/ProfileEditAccount.module.scss";

//  -> TODO -  must implement with Formik <-  //

const EditAccount = () => {
  const [name,setName] = useState("");
  const [email,setEmail] = useState("");  

  const { mutate: send, isLoading, isError, isSuccess } = useEditAuth();

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({name, email});
    

    if (name && email) {
      send({name, email})
    }else{
      console.log("in ejra mishe");
    }
  }, [name, email]);

  useEffect(() => {
    if(isSuccess){
      setName("");
      setEmail("");
    }
  }, [isSuccess])


  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.formGroup}>
              <input
                type="text"
                placeholder="نام خود را وارد کنید"
                value={name || ""}
                onChange={(e) => setName(e.target.value)}
              />
              <MdPerson className={styles.icon} />
            </label>
            <label className={styles.formGroup}>
              <input
                type="email"
                placeholder="ایمیل خود را وارد کنید"
                value={email || ""}
                onChange={(e) => setEmail(e.target.value)}
              />
              <MdEmail className={styles.icon} />
            </label>

            {isError && (
              <p className={styles.error}>
                تغییر نام و ایمیل به درستی انجام نشد لطفا دوباره تلاش کنید
              </p>
            )}
            <input
              type="submit"
              className="btn"
              disabled={isLoading}
              value={isLoading ? "صبر کنید..." : "تایید"}
              style={
                isLoading
                  ? { color: `gray`, backgroundColor: `lightgray` }
                  : undefined
              }
            />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default ProfileLayout(EditAccount);


export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const auth = await getSession(context);

  if (!auth) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  } else {
    return {
      props: {
      },
    };
  }
};
