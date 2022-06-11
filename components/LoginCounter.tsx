import useCountdown from "../hooks/useCountDown";

const LoginCounter = ({ targetDate }: any) => {
  const [minutes, seconds] = useCountdown(targetDate);
  
  let expire = minutes + seconds <= 0;

  if (expire) {
    return (
      <p style={{ fontSize: 15 }}>
        کدی دریافت نکردید؟
        <strong style={{ color: `red`, cursor: "pointer"}}> ارسال مجدد </strong>
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
