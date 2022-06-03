import Image from "next/image";
import Link from "next/link";
import { FaRegCalendarAlt, FaRegUser } from "react-icons/fa";
//style
import styles from "../styles/component/BlogBox.module.scss";
import { blurData } from "../util/blurImagePlaceholder";

interface Blog {
  blog: {
    id: number;
    img: string;
    title: string;
    body: string;
  };
}

const BlogBox: React.FC<Blog> = ({ blog }) => {
  return (
    <div className={styles.box}>
      <div className={styles.image}>
        <Image
          className={styles.img}
          src={blog.img}
          alt={blog.title}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={blurData}
          priority
        />
      </div>
      <div className={styles.content}>
        <div className={styles.icons}>
          <span>
            <FaRegUser className={styles.icon} /> by user
          </span>
          <span>
            <FaRegCalendarAlt className={styles.icon} /> 1st may, 2020
          </span>
        </div>
        <h3>{blog.title}</h3>
        <p>{blog.body}</p>
      </div>
      <div className={styles.footer}>
        <Link href={`/blogs/${blog.title}`}>
          <a className={`${styles.link} btn`}>ادامه مطلب</a>
        </Link>
      </div>
    </div>
  );
};

export default BlogBox;
