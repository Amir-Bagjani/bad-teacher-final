import { useCallback, useEffect, useRef } from "react";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { useEditAuth } from "../../hooks/useFetchUser";
//components
import Layout from "../../components/Layout";
import ProfileLayout from "../../components/ProfileLayout";
import { MdEmail, MdPerson } from "react-icons/md";
//redux
import { UserSelect } from "../../redux/store";
import { useSelector } from "react-redux";
//style
import styles from "../../styles/page/ProfileEditAccount.module.scss";

//  -> TODO -  should implement with Formik <-  //

const EditAccount = () => {
  const nameRef = useRef({} as HTMLInputElement);
  const emailRef = useRef({} as HTMLInputElement);

  const { mutate: send, isLoading, isError, isSuccess } = useEditAuth();

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (nameRef.current.value && emailRef.current.value) {
      send({name: nameRef.current.value, email: emailRef.current.value})
    }
  }, []);

  useEffect(() => {
    if(isSuccess){
      emailRef.current.value = "";
      nameRef.current.value = "";
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
                ref={nameRef}
                value={nameRef.current.value}
                onChange={(e) => (nameRef.current.value = e.target.value)}
              />
              <MdPerson className={styles.icon} />
            </label>
            <label className={styles.formGroup}>
              <input
                type="email"
                placeholder="ایمیل خود را وارد کنید"
                ref={emailRef}
                value={emailRef.current.value}
                onChange={(e) => (emailRef.current.value = e.target.value)}
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

// const getSession = async (context: GetServerSidePropsContext) => {
//   const cookie = context?.req.cookies || "";
//   if (!cookie.token) {
//     return false;
//   } else {
//     const res = await request({ url: "/users/me" });
//     if (cookie.token === res.header["x-auth-token"]) {
//       return { ...res.data };
//     } else {
//       return false;
//     }
//   }
// };

// export const getServerSideProps: GetServerSideProps = async (
//   context: GetServerSidePropsContext
// ) => {
//   const cookie = context.req.cookies || "";
//   const auth = await getSession(context);

//   if (!auth) {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false,
//       },
//     };
//   } else {
//     return {
//       props: {
//         user: auth,
//       },
//     };
//   }
// };
