import Link from "next/link";
import { BsInstagram, BsWhatsapp, BsYoutube } from "react-icons/bs";

const style: React.CSSProperties = {
  width: `4rem`,
  fontSize: `3rem`,
  color: `gray`,
};

const LoginPageFooter = () => {
  return (
    <div style={{textAlign: "center",marginTop: 0, marginBottom: `5rem` }}>
      <p style={{ marginBottom: `1.5rem`, fontSize: `1.3rem`, color: `gray` }}>
         Bad Teacher
      </p>
      <a href="#">
        <BsYoutube style={style} />
      </a>
      <a
        href="https://www.instagram.com/7bad4teacher7"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsInstagram style={style} />
      </a>
      <a
        href="https://wa.me/+989301010747"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsWhatsapp style={style} />
      </a>
      <div style={{marginTop: `1rem`, fontSize: `1.5rem`, color: `gray` }}>
        <Link href="/"><a>خانه</a></Link>
        {" "}|{" "} 
        <Link href="/courses"><a>دوره ها</a></Link>
        {" "}|{" "} 
        <Link href="/blogs"><a>وبلاگ</a></Link>
      </div>
    </div>
  );
};

export default LoginPageFooter;
