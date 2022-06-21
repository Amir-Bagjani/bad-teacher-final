import useCountdown from "../hooks/useCountDown";
//types
import { Dispatch, SetStateAction } from "react";
import { Area } from "../pages/login";

interface Props {
  targetDate: number;
  setArea: Dispatch<SetStateAction<Area>>
}

const LoginCounter: React.FC<Props> = ({ targetDate, setArea }) => {
  const [minutes, seconds] = useCountdown(targetDate);
  
  let expire = minutes + seconds <= 0;

  if (expire) {
    return (
      <p style={{ fontSize: 15 }}>
        کدی دریافت نکردید؟
        <strong 
          style={{ color: `red`, cursor: "pointer"}}
          onClick={() => setArea(Area.step1)}
        > ارسال مجدد </strong>
      </p>
    );
  }
  return (
    <p style={{ fontSize: 15 }}>
      {minutes}:{seconds} مانده تا ارسال مجدد
    </p>
  );
};

export default LoginCounter;
