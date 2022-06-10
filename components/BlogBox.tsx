import moment from "jalali-moment";
import Image from "next/image";
import Link from "next/link";
import { FaRegCalendarAlt, FaRegUser } from "react-icons/fa";
//type
import { Entry } from "contentful";
//data
import { blurData } from "../util/blurImagePlaceholder";
//style
import styles from "../styles/component/BlogBox.module.scss";

const BlogBox = ({ blog }: { blog: Entry<any> }) => {
  const { title, slug, thumbnail, date, excerpt } = blog.fields;

  return (
    <div className={styles.box}>
      <div className={styles.image}>
        <Image
          className={styles.img}
          src={`https:${thumbnail.fields.file.url}`}
          alt={blog.fields.title}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={blurData}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.icons}>
          <span>
            <FaRegUser className={styles.icon} />
            Bad Teacher
          </span>
          <span>
            <FaRegCalendarAlt className={styles.icon} />{" "}
            {moment(date.split("T")[0]).locale("fa").format("YYYY/M/D")}
          </span>
        </div>
        <h3>{title}</h3>
        <p>{excerpt}</p>
      </div>
      <div className={styles.footer}>
        <Link href={`/blogs/${slug}`}>
          <a className={`${styles.link} btn`}>ادامه مطلب</a>
        </Link>
      </div>
    </div>
  );
};

export default BlogBox;
