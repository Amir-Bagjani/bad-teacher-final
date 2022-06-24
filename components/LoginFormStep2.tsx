import { useEffect, useState } from "react";
import { useLogin } from "../hooks/useFetchUser";
import { REG_DIGIT } from "../utils/constant";
//components
import OTPInputs from "./OTPInputs";
import { BsArrowLeftCircle } from "react-icons/bs";
//type
import { Area } from "../pages/login";
//style
import styles from "../styles/component/FormStep2.module.scss";


const FormStep2 = ({
  setArea,
  phoneNumber,
}: {
  setArea: React.Dispatch<React.SetStateAction<Area>>;
  phoneNumber: string;
}) => {
  const [smsToken, setSmsToken] = useState("");
  const [error, setError] = useState("");
  const { mutate: send, isLoading, isError } = useLogin();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    if(smsToken.length === 6 && REG_DIGIT.test(smsToken)){
        send({phoneNumber, smsToken})
    }else{
        setError("لطفا کد صحیح را وارد کنید");
    }
  };

  return (
    <div className={styles.container}>
      <BsArrowLeftCircle
        className={styles.icon}
        onClick={() => setArea(Area.step1)}
      />
      <p>
        کد تایید ارسال شده به شماره موبایل <br /> {phoneNumber} را وارد کنید
      </p>

      <form onSubmit={handleSubmit}>
        <OTPInputs
          value={smsToken}
          length={6}
          onChange={(value: string) => setSmsToken(value)}
        />

        {isError && <p className={styles.error}>!کد صحیح نمی باشد</p>}
        {error && <p className={styles.error}>{error}</p>}
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

export default FormStep2;
