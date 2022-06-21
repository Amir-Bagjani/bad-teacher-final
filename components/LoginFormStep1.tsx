import { Dispatch, SetStateAction, useCallback, useEffect } from "react";
import { useFormik, FormikProps, FormikHelpers } from "formik";
import * as Yup from "yup";
//icon
import { BsFillTelephoneFill } from "react-icons/bs";
//type
import { Area } from "../pages/login";
//style
import styles from "../styles/component/LoginFormStep1.module.scss";
import { useSendPhoneNumber } from "../hooks/useFetchUser";

//form step 1
type ValuesStep1 = Yup.InferType<typeof validationSchema1>;
const initialValuesStep1: ValuesStep1 = {
  phoneNumber: "",
};
const validationSchema1 = Yup.object({
  phoneNumber: Yup.string()
    .required("شماره تلفن را وارد کنید")
    .max(11, "شماره موبایل باید 11 رقم باشد")
    .matches(
      /(09[0-3][0-9]-?[0-9]{3}-?[0-9]{4})/,
      "شماره موبایل را صحیح وارد کنید"
    ),
});

const LoginFormStep1 = ({
  setArea,
  setPhoneNumber,
}: {
  setArea: Dispatch<SetStateAction<Area>>;
  setPhoneNumber: Dispatch<SetStateAction<string>>;
}) => {
  const {
    mutate: send,
    isLoading,
    isError,
    isSuccess,
  } = useSendPhoneNumber();

  //form step one
  const formS1: FormikProps<ValuesStep1> = useFormik<ValuesStep1>({
    initialValues: initialValuesStep1,
    onSubmit: (values, { setSubmitting }: FormikHelpers<ValuesStep1>) => {
      setPhoneNumber(values.phoneNumber);
      send(values);
      setSubmitting(false);
    },
    validationSchema: validationSchema1,
  });

  //handle change form
  const change = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value } = e.target;
    const regex = /[0-9]/;
    if (!value || regex.test(value)) {
      formS1.setFieldValue("phoneNumber", value);
    }
  }, [formS1]);

  useEffect(() => {
    if (isSuccess) setArea(Area.step2);
  }, [isSuccess, setArea]);

  return (
    <div className={styles.container}>
      <h2>برای ورود یا ثبت نام شماره موبایل خود را وارد کنید</h2>
      <form className={styles.formStep1} onSubmit={formS1.handleSubmit}>
        <label className={styles.formGroup}>
          <input
            type="text"
            maxLength={11}
            placeholder="09123456789"
            name="phoneNumber"
            onChange={change}
            value={formS1.values.phoneNumber}
            onBlur={formS1.handleBlur}
          />
          <BsFillTelephoneFill className={styles.icon} />
        </label>
        {formS1.errors.phoneNumber && formS1.touched.phoneNumber && (
          <p className={styles.error}>{formS1.errors.phoneNumber}</p>
        )}
        {isError && <p className={styles.error}>ارتباط ناموفق بود لطفا دوباره امتحان کنید</p>}
        <input
          type="submit"
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
  );
};

export default LoginFormStep1;
