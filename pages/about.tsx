import { ReactElement, useCallback, useEffect, useRef, useState } from "react";
import useCloseDropDown from "../hooks/useCloseDropDown";
//components
import Link from "next/link";
import Image from "next/image";
import Layout from "../components/Layout";
import { MdMenu, MdClose, MdPerson, MdDownload } from "react-icons/md";
import { FaUserGraduate, FaRegEnvelope, FaPaperPlane } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
//style
import styles from "../styles/page/About.module.scss";

const About = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrollTop, setScrollTop] = useState(false);
  const menuRef = useRef({} as HTMLElement);
  
  const closeMeuu = useCallback(() => {
    if (window.innerWidth < 991) {
      setShowMenu(false);
    }
  }, [])
  
  //close menu if clicked outside of it
  useCloseDropDown(menuRef, closeMeuu);

  useEffect(() => {
    window.scrollTo(0, 0);

    const swipTop = () => {
      setScrollTop(window.pageYOffset > 85 ? true : false);
      setShowMenu(false);
    };

    window.addEventListener("scroll", swipTop);
    return () => window.removeEventListener("scroll", swipTop);
  }, []);

  return (
    <Layout title="درباره من">
      <main className={`${styles.aboutPage} ${styles.light}`}>
        <header
          ref={menuRef}
          className={
            showMenu
              ? `${styles.aboutHeader} ${styles.toggle}`
              : styles.aboutHeader
          }
        >
          <div className={styles.user}>
            <div className={styles.image}>
              <Image
                layout="responsive"
                objectFit="cover"
                src="/images/photo-owner.jpeg"
                alt="bad-teacher-logo"
                width="100%"
                height="100%"
              />
            </div>
            <h3 className={styles.name}>Sina Baba Ahmadi</h3>
            <p className={styles.post}>English Instructor</p>
          </div>

          <nav className={styles.navbar}>
            <ul>
              <li>
                <a href="#home">home</a>
              </li>
              <li>
                <a href="#about">about</a>
              </li>
              <li>
                <a href="#education">education</a>
              </li>
              <li>
                <a href="#contact">contact</a>
              </li>
              <li>
                <Link href="/">go to main page</Link>
              </li>
            </ul>
          </nav>
        </header>

        {showMenu ? (
          <MdClose className={styles.menu} />
        ) : (
          <MdMenu className={styles.menu} onClick={() => setShowMenu(true)} />
        )}

        <section className={styles.home} id="home">
          <h3>HI THERE !</h3>
          <h1>
            I&#x27;M <span>Sina Baba Ahmadi</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            deserunt aspernatur fugiat minus enim ullam repudiandae sint sed
            magnam tenetur! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Necessitatibus, at.
          </p>
          <a href="#about">
            <button className={styles.button}>
              About me <MdPerson className={styles.icon} />
            </button>
          </a>
        </section>

        <section className={styles.about} id="about">
          <h1 className={styles.aboutHeading}>
            {" "}
            <span>about</span> me{" "}
          </h1>

          <div className={styles.row}>
            <div className={styles.info}>
              <h3>
                {" "}
                <span> name : </span> Sina Baba Ahmadi{" "}
              </h3>
              <h3>
                {" "}
                <span> age : </span> 20{" "}
              </h3>
              <h3>
                {" "}
                <span> qualification : </span> BMS{" "}
              </h3>
              <h3>
                {" "}
                <span> post : </span> English Instructor{" "}
              </h3>
              <a href="#">
                <button className={styles.button}>
                  download CV <MdDownload />
                </button>
              </a>
            </div>

            <div className={styles.counter}>
              <div className={styles.box}>
                <span>10+</span>
                <h3>years of experience</h3>
              </div>

              <div className={styles.box}>
                <span>100+</span>
                <h3>porject completed</h3>
              </div>

              <div className={styles.box}>
                <span>2500+</span>
                <h3>happy students</h3>
              </div>

              <div className={styles.box}>
                <span>12+</span>
                <h3>awards won</h3>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.education} id="education">
          <h1 className={styles.aboutHeading}>
            {" "}
            my <span>education</span>{" "}
          </h1>

          <div className={styles.boxContainer}>
            <div className={styles.box}>
              <div className={styles.iconWrapper}>
                <FaUserGraduate className={styles.icon} />
              </div>
              <span>2016</span>
              <h3>front end development</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati quos alias praesentium. Id autem provident laborum
                quae, distinctio eaque temporibus!
              </p>
            </div>

            <div className={styles.box}>
              <div className={styles.iconWrapper}>
                <FaUserGraduate className={styles.icon} />
              </div>
              <span>2017</span>
              <h3>front end development</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati quos alias praesentium. Id autem provident laborum
                quae, distinctio eaque temporibus!
              </p>
            </div>

            <div className={styles.box}>
              <div className={styles.iconWrapper}>
                <FaUserGraduate className={styles.icon} />
              </div>
              <span>2018</span>
              <h3>front end development</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati quos alias praesentium. Id autem provident laborum
                quae, distinctio eaque temporibus!
              </p>
            </div>

            <div className={styles.box}>
              <div className={styles.iconWrapper}>
                <FaUserGraduate className={styles.icon} />
              </div>
              <span>2019</span>
              <h3>front end development</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati quos alias praesentium. Id autem provident laborum
                quae, distinctio eaque temporibus!
              </p>
            </div>

            <div className={styles.box}>
              <div className={styles.iconWrapper}>
                <FaUserGraduate className={styles.icon} />
              </div>
              <span>2020</span>
              <h3>front end development</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati quos alias praesentium. Id autem provident laborum
                quae, distinctio eaque temporibus!
              </p>
            </div>

            <div className={styles.box}>
              <div className={styles.iconWrapper}>
                <FaUserGraduate className={styles.icon} />
              </div>
              <span>2021</span>
              <h3>front end development</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati quos alias praesentium. Id autem provident laborum
                quae, distinctio eaque temporibus!
              </p>
            </div>
          </div>
        </section>

        <section className={styles.contact} id="contact">
          <h1 className={styles.aboutHeading}>
            {" "}
            <span>contact</span> me{" "}
          </h1>

          <div className={styles.row}>
            <div className={styles.content}>
              <h3 className={styles.title}>contact info</h3>

              <div className={styles.info}>
                <h3>
                  {" "}
                  <FaRegEnvelope className={styles.icon} /> sina@gmail.com{" "}
                </h3>
                <h3>
                  {" "}
                  <BsTelephone className={styles.icon} /> +123-456-7890{" "}
                </h3>
                <h3>
                  {" "}
                  <FiMapPin className={styles.icon} /> Tehran, Iran - 400104.{" "}
                </h3>
              </div>
            </div>

            <form>
              <input type="text" placeholder="name" className={styles.box} />
              <input type="email" placeholder="email" className={styles.box} />
              <input type="text" placeholder="project" className={styles.box} />
              <textarea
                name=""
                id=""
                cols={30}
                rows={10}
                className={`${styles.box} ${styles.message}`}
                placeholder="message"
              />
              <button type="submit" className={styles.button}>
                send <FaPaperPlane className={styles.icon} />
              </button>
            </form>
          </div>
        </section>

        {scrollTop && (
          <a href="#home" className={styles.top}>
            {/* <img src="/images/scroll-top-img.png" alt="" /> */}
            <Image src="/images/scroll-top-img.png" alt="" width="50" height="50" />
          </a>
        )}
      </main>
    </Layout>
  );
};

export default About;

//do not show Header and Footer in this page
About.getLayout = (page: ReactElement) => {
  return <>{page}</>;
};
