import { BsInstagram, BsWhatsapp, BsYoutube } from "react-icons/bs";

const style: React.CSSProperties = {
  width: `4rem`,
  fontSize: `3rem`,
  color: `gray`,
};

const LoginPageFooter = () => {
  return (
    <div style={{ marginTop: 0, marginBottom: `6rem` }}>
      <a href="#">
        <BsYoutube style={style} />
      </a>
      <a href="#">
        <BsInstagram style={style} />
      </a>
      <a href="#">
        <BsWhatsapp style={style} />
      </a>
      <p style={{ marginTop: `2rem`, fontSize: `1.3rem`, color: `gray` }}>
        آکادمی زبان Bad Teacher
      </p>
    </div>
  );
};

export default LoginPageFooter;
