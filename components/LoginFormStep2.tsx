import { Dispatch, SetStateAction, useCallback } from "react";
import { useFormik, FormikProps, FormikHelpers } from "formik";
import { useLogin } from "../hooks/useFetchUser";
import * as Yup from "yup";
//icon
import { BsArrowLeftCircle } from "react-icons/bs";
//type
import { Area } from "../pages/login";
//style
import styles from "../styles/component/LoginFormStep2.module.scss";

//form step 2
type ValuesStep2 = Yup.InferType<typeof validationSchema2>;
const initialValuesStep2: ValuesStep2 = {
  smsToken: "",
};
const validationSchema2 = Yup.object({
  smsToken: Yup.string()
    .required("کد تایید را وارد کنید")
    .matches(/^[0-9]{6}$/, "کد شش رقمی را وارد کنید"),
});

const LoginFormStep2 = ({
  setArea,
  phoneNumber,
}: {
  setArea: Dispatch<SetStateAction<Area>>;
  phoneNumber: string;
}) => {
  
  const {
    mutate: send,
    isLoading,
    isError,
  } = useLogin();

  const formS2: FormikProps<ValuesStep2> = useFormik<ValuesStep2>({
    initialValues: initialValuesStep2,
    onSubmit: (values, { setSubmitting }: FormikHelpers<ValuesStep2>) => {
      send({phoneNumber, ...values})
      setSubmitting(false);
    },
    validationSchema: validationSchema2,
  });

  //handle change form
  const change = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value } = e.target;
    const regex = /[0-9]/;
    if (!value || regex.test(value)) {
      formS2.setFieldValue("smsToken", value);
    }
  }, [formS2]);

  return (
    <div className={styles.container}>
      <BsArrowLeftCircle
        className={styles.icon}
        onClick={() => setArea(Area.step1)}
      />
      <p>
        کد تایید ارسال شده به شماره موبایل <br /> {phoneNumber} را وارد کنید
      </p>

      <form className={styles.formStep2} onSubmit={formS2.handleSubmit}>
        <input
          type="text"
          maxLength={6}
          placeholder="کد تایید"
          name="smsToken"
          onChange={change}
          value={formS2.values.smsToken}
          onBlur={formS2.handleBlur}
        />
        {formS2.errors.smsToken && formS2.touched.smsToken && (
          <p className={styles.error}>{formS2.errors.smsToken}</p>
        )}
        {isError && <p className={styles.error}>!کد صحیح نمی باشد</p>}
        <button
          type="submit"
          disabled={isLoading}
          style={
            isLoading
              ? { color: `gray`, backgroundColor: `lightgray` }
              : undefined
          }
        >
          {isLoading ? "صبرکنید..." : "تایید"}
        </button>
      </form>
    </div>
  );
};

export default LoginFormStep2;
