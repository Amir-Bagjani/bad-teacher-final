import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import Image from "next/image";
import { NextRouter, useRouter } from "next/router";
//redux
import { cartSelect, UserSelect } from "../redux/store";
import { useSelector } from "react-redux";
//components
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
import { useLogout } from "../hooks/useFetchUser";
import useCloseDropDown from "../hooks/useCloseDropDown";
import useTheme from "../hooks/useTheme";
//style
import styles from "../styles/component/Navbar.module.scss";

interface IconProps {
  menuState: string;
  setMenuState: Dispatch<SetStateAction<string>>;
  closeMenuState: () => void;
  theme: string;
  lightTheme: () => void;
  darkTheme: () => void;
}

const Navbar = () => {
  const { user, userIsReady } = useSelector(UserSelect);
  const [menuState, setMenuState] = useState("");
  const router = useRouter();
  const { theme, lightTheme, darkTheme } = useTheme();

  const closeMenuState = useCallback(() => {
    setMenuState("");
  }, []);

  const conditionCloseMenu = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (e.target === e.currentTarget) closeMenuState();
  }, [closeMenuState]);

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

  if(!userIsReady) return null;

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
          <Image
            src="/images/logo-2.svg"
            alt="bad-teacher-logo"
            layout="fill"
            objectFit="contain"
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
          <li className={styles.navbarClose}>
            <MdClose className={styles.icon} onClick={closeMenuState} />
          </li>
          <li className={styles.navbarLogo}>
            <div className={styles.img}>
              <Image src="/images/logo.svg" alt="bad-teacher-logo" width="160px" height="160px" />
            </div>
            <div className={styles.icons}>
              <a
                href="https://www.instagram.com/7bad4teacher7"
                target="_blank"
                rel="noopener noreferrer" 
              >
                <AiOutlineInstagram className={styles.icon} />
              </a>
              <a
                href="https://wa.me/+989301010747"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiOutlineWhatsApp className={styles.icon} />
              </a>
              <a href="#">
                <AiOutlineYoutube className={styles.icon} />
              </a>
            </div>
            <p>???????????? Bad Teacher</p>
          </li>
          <li>
            <Link href="/">
              <a>
                <BiHomeSmile className={styles.icon} /> ???????? ????????
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>
                <AiOutlineCrown className={styles.icon} /> ???????????? ????
              </a>
            </Link>
          </li>
          {!user && <li className={styles.navbarCart}>
            <Link href="/cart">
              <a>
                <MdOutlineShoppingCart className={styles.icon} /> ?????? ????????
              </a>
            </Link>
          </li>}
          <li>
            <Link href="/courses">
              <a>
                <MdOutlinePlayLesson className={styles.icon} /> ???????? ????
              </a>
            </Link>
          </li>
          <li>
            <Link href="/blogs">
              <a>
                <MdOutlineArticle className={styles.icon} /> ????????
              </a>
            </Link>
          </li>
          {theme === "dark" ? (
            <li className={styles.navbarTheme} onClick={lightTheme}>
              <a>
                <MdOutlineWbSunny className={styles.icon} />
                ???? ????????
              </a>
            </li>
          ) : (
            <li className={styles.navbarTheme} onClick={darkTheme}>
              <a>
                <MdOutlineDarkMode className={styles.icon} />
                ???? ??????????
              </a>
            </li>
          )}
        </ul>
      </nav>

      {!user && (
        <>
          <a className={styles.navbarLogin} onClick={() => router.push(`/login?redirect=${router.asPath}`)}>???????? / ?????? ??????</a>
          <a className={styles.navbarLoginMobile} onClick={() => router.push(`/login?redirect=${router.asPath}`)}>
            <BiUser className={styles.icon} />
          </a>
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

const Icons = (props: IconProps) => {
  const {
    menuState,
    setMenuState,
    closeMenuState,
    theme,
    lightTheme,
    darkTheme,
  } = props;
  const userBox = useRef(null);
  const { quantity } = useSelector(cartSelect);
  const { user } = useSelector(UserSelect);
  const { logout } = useLogout();

  //prevent hydration
  const [hydrationQuantity, setQuantity] = useState(0);
  //prevent hydration
  useEffect(() => {
    setQuantity(quantity);
  }, [quantity]);

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
              <span className={styles.count}>{hydrationQuantity}</span>
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
                  {user?.name ? user.name : (<>
                    ????????{" "}
                    <Link href="/profile/edit-account">
                      <a style={{display: 'inline-block', color:`var(--main-color)`}}> - ?????? - </a>
                    </Link>{" "}
                    ?????? ???? ???????? ????????
                  </>)} <br /> {user?.nationalFormatPhone}
                </span>
              </li>
              <li>
                <Link href="/profile">
                  <a>
                    <AiOutlineBank className={styles.icon} />{" "}
                    <span>???????? ????????????</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/profile/bookmark">
                  <a>
                    <AiOutlineHeart className={styles.icon} />{" "}
                    <span>?????????? ???????? ????</span>
                  </a>
                </Link>
              </li>
              <li onClick={logout}>
                <a>
                  <MdLogout className={styles.icon} />{" "}
                  <span>???????? ???? ???????? ????????????</span>
                </a>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};
