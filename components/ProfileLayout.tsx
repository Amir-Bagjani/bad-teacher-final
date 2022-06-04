import { ComponentType, useCallback } from "react";
import { useRouter } from "next/router";
//components
import Link from "next/link";
import Heading from "./Heading";
import Section from "./Section";
import { MdAccountBalance, MdLogout } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";
import { BsBookmarkHeart } from "react-icons/bs";
//style
import styles from "../styles/component/ProfileLayout.module.scss";

const ProfileLayout =
  (Component: ComponentType<any>) =>
  ({ ...props }) => {
    const {asPath} = useRouter();

    //add active className to link if the route was match to current page
    const active = useCallback((route: string) => {
      if(asPath === route) {
        return `${styles.link} ${styles.active}`
      }
      return styles.link
    }, [asPath])

    //set heading title match to current page
    const setHeading = useCallback(() => {
      if(asPath === "/profile") return "حساب کاربری"
      if(asPath === "/profile/purchased-courses") return "دوره های خریداری شده"
      if(asPath === "/profile/bookmark") return "علاقه مندی ها"
    }, [asPath])
    
    return (
      <main>
        <Section className={styles.sectionContainer}>
            <Heading style={{margin: `2rem 0`}}>
              <h2>{setHeading()}</h2>
            </Heading>
          <div className={styles.container}>
            <nav className={styles.sidebar}>
              <h3>سلام Ahmadi عزیز !</h3>
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
                      <FaUserGraduate className={styles.icon} /> دوره های
                      خریداری شده
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
                  <a className={styles.link}>
                    <MdLogout className={styles.icon} /> خروج از حساب کاربری
                  </a>
                </li>
                
              </ul>
            </nav>

            <div className={styles.content}>
              <Component {...props} />
            </div>
          </div>
        </Section>
      </main>
    );
  };

export default ProfileLayout;
