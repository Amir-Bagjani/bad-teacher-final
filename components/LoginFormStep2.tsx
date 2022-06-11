import { Dispatch, SetStateAction, useCallback } from "react";
import { useFormik, FormikProps, FormikHelpers } from "formik";
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
  verifyCode: "",
};
const validationSchema2 = Yup.object({
  verifyCode: Yup.string()
    .required("کد تایید را وارد کنید")
    .matches(/^[0-9]{5}$/, "کد پنج رقمی را وارد کنید"),
});


const LoginFormStep2 = ({
  setArea,
}: {
  setArea: Dispatch<SetStateAction<Area>>;
}) => {
  
  //form step two
  const formS2: FormikProps<ValuesStep2> = useFormik<ValuesStep2>({
    initialValues: initialValuesStep2,
    onSubmit: (values, { setSubmitting }: FormikHelpers<ValuesStep2>) => {
      setTimeout(() => {
        console.log(values);
        setSubmitting(false);
      }, 500);
    },
    validationSchema: validationSchema2,
  });

  //handle change form
  const change = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { value } = e.target;
    const regex = /[0-9]/;
    if (!value || regex.test(value)) {
      formS2.setFieldValue("verifyCode", value);
    }
  }, []);

  return (
    <div className={styles.container}>
      <BsArrowLeftCircle
        className={styles.icon}
        onClick={() => setArea(Area.step1)}
      />
      <p>کد تایید را را وارد کنید</p>

      <form className={styles.formStep2} onSubmit={formS2.handleSubmit}>
        <input
          type="text"
          maxLength={5}
          placeholder="کد تایید"
          name="verifyCode"
          onChange={change}
          value={formS2.values.verifyCode}
          onBlur={formS2.handleBlur}
        />
        {formS2.errors.verifyCode && formS2.touched.verifyCode && (
          <p className={styles.error}>{formS2.errors.verifyCode}</p>
        )}
        <button type="submit">تایید</button>
      </form>
    </div>
  );
};

export default LoginFormStep2;
