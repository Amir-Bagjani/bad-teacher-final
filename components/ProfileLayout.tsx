import { ComponentType } from "react";
//components
import Link from "next/link";
import Section from "./Section";
import { MdAccountBalance, MdLogout } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";
import { BsBookmarkHeart } from "react-icons/bs";
//style
import styles from "../styles/component/ProfileLayout.module.scss";

const ProfileLayout =
  (Component: ComponentType<any>) =>
  ({ ...props }) => {
    return (
      <main>
        <Section className={styles.sectionContainer}>
          <div className={styles.container}>
            <nav className={styles.sidebar}>
              <h3>سلام Ahmadi عزیز !</h3>
              <ul>

                <li>
                  <Link href="/profile">
                    <a className={styles.link}>
                      <MdAccountBalance className={styles.icon} /> حساب کاربری
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href="/profile/purchased-courses">
                    <a className={styles.link}>
                      <FaUserGraduate className={styles.icon} /> دوره های
                      خریداری شده
                    </a>
                  </Link>
                </li>

                <li>
                  <Link href="/profile/bookmark">
                    <a className={styles.link}>
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
