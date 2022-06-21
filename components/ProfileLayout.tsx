import { ComponentType, useCallback } from "react";
import { useRouter } from "next/router";
import { useLogout } from "../hooks/useFetchUser";
import { UserSelect } from "../redux/store";
import { useSelector } from "react-redux";
//components
import Link from "next/link";
import Heading from "./Heading";
import Section from "./Section";
import { MdAccountBalance, MdLogout } from "react-icons/md";
import { FaUserEdit, FaUserGraduate } from "react-icons/fa";
import { BsBookmarkHeart } from "react-icons/bs";
//style
import styles from "../styles/component/ProfileLayout.module.scss";

const ProfileLayout =
  (Component: ComponentType<any>) =>
  ({ ...props }) => {
    return (
      <main>
        <Section className={styles.sectionContainer}>
          <Header />
          <div className={styles.container}>
            <Sidebar />
            <div className={styles.content}>
              <Component {...props} />
            </div>
          </div>
        </Section>
      </main>
    );
  };

export default ProfileLayout;

const Header = () => {
  const { asPath } = useRouter();

  //set heading title match to current page
  const setHeading = useCallback(() => {
    if (asPath === "/profile") return "حساب کاربری";
    if (asPath === "/profile/purchased-courses") return "دوره های خریداری شده";
    if (asPath === "/profile/bookmark") return "علاقه مندی ها";
    if (asPath === "/profile/edit-account") return "ویرایش اطلاعات کاربر";
  }, [asPath]);

  return (
    <Heading style={{ margin: `2rem 0` }}>
      <h2>{setHeading()}</h2>
    </Heading>
  );
};

const Sidebar = () => {
  const { asPath } = useRouter();
  const { logout } = useLogout();
  const { user } = useSelector(UserSelect);

  //add active className to link if the route was match to current page
  const active = useCallback(
    (route: string) => {
      if (asPath === route) {
        return `${styles.link} ${styles.active}`;
      }
      return styles.link;
    },
    [asPath]
  );

  return (
    <nav className={styles.sidebar}>
      {user?.isValid && <h3>سلام {user?.name} عزیز !</h3>}
      {!user?.isValid && (
        <h3>
          لطفا{" "}
          <Link href="/profile/edit-account">
            <a  style={{color: `darkcyan`}}> - نام - </a>
          </Link>{" "}
          خود را وارد کنید
        </h3>
      )}
      <ul>
        <li>
          <Link href="/profile">
            <a className={active("/profile")}>
              <MdAccountBalance className={styles.icon} /> حساب کاربری
            </a>
          </Link>
        </li>

        <li>
          <Link href="/profile/purchased-courses">
            <a className={active("/profile/purchased-courses")}>
              <FaUserGraduate className={styles.icon} /> دوره های خریداری شده
            </a>
          </Link>
        </li>

        <li>
          <Link href="/profile/bookmark">
            <a className={active("/profile/bookmark")}>
              <BsBookmarkHeart className={styles.icon} /> علاقه مندی ها
            </a>
          </Link>
        </li>

        <li>
          <Link href="/profile/edit-account">
            <a className={active("/profile/edit-account")}>
              <FaUserEdit className={styles.icon} /> ویرایش اطلاعات کاربر
            </a>
          </Link>
        </li>

        <li onClick={logout}>
          <a className={styles.link}>
            <MdLogout className={styles.icon} /> خروج از حساب کاربری
          </a>
        </li>
      </ul>
    </nav>
  );
};
