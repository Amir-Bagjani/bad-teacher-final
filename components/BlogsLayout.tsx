import { ComponentType } from "react";
import { useRouter } from "next/router";
import useGetBlogs from "../hooks/useGetBlogs";
//components
import Image from "next/image";
import Link from "next/link";
import Section from "./Section";
import Breadcrumbs from "./Breadcrumbs";
import { BiHomeSmile } from "react-icons/bi";
import { AiOutlineCrown, AiOutlineYoutube } from "react-icons/ai";
import { MdOutlinePlayLesson } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
//utils
import { blurData } from "../utils/blurImagePlaceholder";
//style
import styles from "../styles/component/BlogsLayout.module.scss";

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
            <BlogSidebar />
          </div>
        </Section>
      </main>
    );
  };

export default BlogsLayout;

const BlogSidebar = () => {
  const { blogs } = useGetBlogs(4);
  const router = useRouter();

  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarTop}>
        <h3 className={styles.title}>جدیدترین نوشته ها</h3>
        {blogs?.map((blog) => (
          <div
            className={styles.box}
            key={blog.sys.id}
            onClick={() => router.push(`/blogs/${blog.fields.slug}`)}
          >
            <div className={styles.image}>
              <Image
                src={`https:${blog.fields.thumbnail.fields.file.url}`}
                alt={blog.fields.title}
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL={blurData}
              />
            </div>
            <a className={styles.link}>
              <h3>{blog.fields.title}</h3>
            </a>
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
  );
};
