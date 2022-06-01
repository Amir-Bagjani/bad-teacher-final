import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

//components
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  MdOutlineShoppingCart,
  MdMenu,
  MdOutlinePlayLesson,
  MdOutlineWbSunny,
  MdOutlineDarkMode,
  MdClose,
  MdOutlineArticle,
  MdLogout,
} from "react-icons/md";
import { BiUser, BiHomeSmile } from "react-icons/bi";
import {
  AiOutlineCrown,
  AiOutlineYoutube,
  AiOutlineHeart,
  AiOutlineBank,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
} from "react-icons/ai";

//hooks
import useCloseDropDown from "../hooks/useCloseDropDown";
import useTheme from "../hooks/useTheme";

//style
import styles from "../styles/component/Navbar.module.scss";
import { cartSelect } from "../redux/store";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [user, setUser] = useState(true);
  const [menuState, setMenuState] = useState("");

  const router = useRouter();
  const { theme, lightTheme, darkTheme } = useTheme();

  const closeMenuState = useCallback(() => {
    setMenuState("");
  }, []);

  const conditionCloseMenu = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (e.target === e.currentTarget) closeMenuState();
  }, []);

  //close menu when location change
  useEffect(() => {
    closeMenuState();
    window.scrollTo(0, 0);
  }, [router.pathname, closeMenuState]);

  //close menu navbar when scroll
  useEffect(() => {
    window.addEventListener("scroll", closeMenuState);
    return () => window.removeEventListener("scroll", closeMenuState);
  }, [closeMenuState]);

  return (
    <header
      className={
        router.pathname === "/"
          ? styles.header
          : `${styles.header} ${styles.active}`
      }
    >
      <Link href="/">
        <a className={styles.logo}>
          {/*[TODO] remove onClick on production mode*/}
          <Image
            src="/images/logo-2.svg"
            alt="bad-teacher-logo"
            width="100%"
            height="100%"
            layout="responsive"
            // onClick={() => setUser((u) => !u)}
          />
        </a>
      </Link>

      <MdMenu
        className={`${styles.icon} ${styles.menuButton}`}
        onClick={() => setMenuState("navbar")}
      />

      <nav
        className={
          menuState === "navbar"
            ? `${styles.navbar} ${styles.active}`
            : styles.navbar
        }
        onClick={conditionCloseMenu}
      >
        <ul>
          <li className={styles.navbarClose} onClick={closeMenuState}>
            <MdClose className={styles.icon} />
          </li>
          <li className={styles.navbarLogo}>
            <div className={styles.img}>
              <img
                loading="lazy"
                src="/images/logo.svg"
                alt="bad-teacher-logo"
              />
            </div>
            <div className={styles.icons}>
              <a href="#">
                <AiOutlineInstagram className={styles.icon} />
              </a>
              <a href="#">
                <AiOutlineWhatsApp className={styles.icon} />
              </a>
              <a href="#">
                <AiOutlineYoutube className={styles.icon} />
              </a>
            </div>
            <p>آکادمی Bad Teacher</p>
          </li>
          <li className={styles.navbarCart}>
            <Link href="/cart">
              <a>
                <MdOutlineShoppingCart className={styles.icon} /> سبد خرید
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <BiHomeSmile className={styles.icon} /> صفحه اصلی
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>
                <AiOutlineCrown className={styles.icon} /> درباره من
              </a>
            </Link>
          </li>
          <li>
            <Link href="/courses/34">
              <a>
                <AiOutlineYoutube className={styles.icon} /> کانال یوتیوب
              </a>
            </Link>
          </li>
          <li>
            <Link href="/courses">
              <a>
                <MdOutlinePlayLesson className={styles.icon} /> دوره ها
              </a>
            </Link>
          </li>
          <li>
            <Link href="/blogs">
              <a>
                <MdOutlineArticle className={styles.icon} /> بلاگ
              </a>
            </Link>
          </li>
          {theme === "dark" ? (
            <li className={styles.navbarTheme} onClick={lightTheme}>
              <a>
                <MdOutlineWbSunny className={styles.icon} />
                تم روشن
              </a>
            </li>
          ) : (
            <li className={styles.navbarTheme} onClick={darkTheme}>
              <a>
                <MdOutlineDarkMode className={styles.icon} />
                تم تاریک
              </a>
            </li>
          )}
        </ul>
      </nav>

      {!user && (
        <>
          <Link href="/login">
            <a className={styles.navbarLogin}>ورود / ثبت نام</a>
          </Link>
          <Link href="/login">
            <a className={styles.navbarLoginMobile}>
              <BiUser className={styles.icon} />
            </a>
          </Link>
        </>
      )}

      {/*left side of navbar*/}
      {user && (
        <Icons
          menuState={menuState}
          setMenuState={setMenuState}
          closeMenuState={closeMenuState}
          theme={theme}
          lightTheme={lightTheme}
          darkTheme={darkTheme}
        />
      )}
    </header>
  );
};

export default Navbar;

// -_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-//

//left side of navbar
interface IconProps {
  menuState: string;
  setMenuState: Dispatch<SetStateAction<string>>;
  closeMenuState: () => void;
  theme: string;
  lightTheme: () => void;
  darkTheme: () => void;
}

const Icons = (props: IconProps) => {
  const {
    menuState,
    setMenuState,
    closeMenuState,
    theme,
    lightTheme,
    darkTheme,
  } = props;
  const userBox = useRef<any>();
  const { quantity: countt } = useSelector(cartSelect);
  
  //prevent hydration
  const [quantity, setQuantity] = useState(0);
  //prevent hydration
  useEffect(() => {
    setQuantity(countt);
  }, [countt]);

  //close drop-down when click outside the box
  useCloseDropDown(userBox, closeMenuState);

  return (
    <div className={styles.icons}>
      <ul>
        {theme === "dark" ? (
          <li onClick={lightTheme}>
            <MdOutlineWbSunny className={styles.icon} />{" "}
          </li>
        ) : (
          <li onClick={darkTheme}>
            <MdOutlineDarkMode className={styles.icon} />{" "}
          </li>
        )}
        <li>
          <Link href="/cart">
            <a>
              <MdOutlineShoppingCart className={styles.icon} />{" "}
              <span className={styles.count}>{quantity}</span>
            </a>
          </Link>
        </li>
        <li className={styles.navbarUser}>
          {menuState === "user-box" ? (
            <MdClose className={styles.icon} onClick={closeMenuState} />
          ) : (
            <BiUser
              className={styles.icon}
              onClick={() => setMenuState("user-box")}
            />
          )}
          {menuState === "user-box" && (
            <ul className={styles.dropUserContent} ref={userBox}>
              <li>
                <BiUser className={styles.icon} />{" "}
                <span>
                  سینا پدر احمدی <br /> 09391111234
                </span>
              </li>
              <li>
                <Link href="/profile">
                  <a>
                    <AiOutlineBank className={styles.icon} />{" "}
                    <span>حساب کاربری</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/profile/bookmark">
                  <a>
                    <AiOutlineHeart className={styles.icon} />{" "}
                    <span>علاقه مندی ها</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="">
                  <a>
                    <MdLogout className={styles.icon} />{" "}
                    <span>خروج از حساب کاربری</span>
                  </a>
                </Link>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};
