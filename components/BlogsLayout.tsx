import { ComponentType } from "react";
//components
import Image from "next/image";
import Link from "next/link";
import Section from "./Section";
import { BiHomeSmile } from "react-icons/bi";
import { AiOutlineCrown, AiOutlineYoutube } from "react-icons/ai";
import { MdOutlinePlayLesson } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
//style
import styles from "../styles/component/BlogsLayout.module.scss";
//data
import { blurData } from "../util/blurImagePlaceholder";
import { blogs } from "../fakeData/blogs";
import Breadcrumbs from "./Breadcrumbs";

const BlogsLayout =
  (Component: ComponentType<any>) =>
  ({ ...props }) => {
    return (
      <main>
        <Section className={styles.sectionContainer}>
          <Breadcrumbs />
          <div className={styles.container}>
            <div className={styles.content}>
              <Component {...props} />
            </div>

            <div className={styles.sidebar}>
              <div className={styles.sidebarTop}>
                <h3 className={styles.title}>محبوب ترین دوره ها</h3>
                {blogs
                  .filter((_, ind) => ind <= 3)
                  .map((data) => (
                    <div className={styles.box} key={data.id}>
                      <div className={styles.image}>
                        <Image
                          src={data.img}
                          alt={data.title}
                          layout="fill"
                          objectFit="cover"
                          placeholder="blur"
                          blurDataURL={blurData}
                        />
                      </div>
                      <Link href={`/courses/${data.title}`}>
                        <a className={styles.link}>
                          <h3>{data.title}</h3>
                        </a>
                      </Link>
                    </div>
                  ))}
              </div>
              <div className={styles.positionSticky}>
                <div className={styles.sideLinks}>
                  <h3 className={styles.title}>دسترسی سریع</h3>
                  <Link href="/">
                    <a>
                      <BiHomeSmile className={styles.icon} /> صفحه اصلی
                    </a>
                  </Link>
                  <Link href="/about">
                    <a>
                      <AiOutlineCrown className={styles.icon} /> درباره من
                    </a>
                  </Link>
                  <a>
                    <AiOutlineYoutube className={styles.icon} /> کانال یوتیوب
                  </a>
                  <Link href="/courses">
                    <a>
                      <MdOutlinePlayLesson className={styles.icon} /> دوره ها
                    </a>
                  </Link>
                </div>

                <div className={styles.networks}>
                  <a className={`${styles.network} ${styles.whatsapp}`}>
                    0912-111-4567
                    <BsWhatsapp className={styles.icon} />
                  </a>
                  <a className={`${styles.network} ${styles.instagram}`}>
                    اینستاگرام ما را دنبال کنید
                  </a>
                  <a className={`${styles.network} ${styles.youtube}`}>
                    یوتیوب ما را دنبال کنید
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>
    );
  };

export default BlogsLayout;
