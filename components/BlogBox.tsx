import Image from "next/image";
import Link from "next/link";
import styles from "../styles/component/BlogBox.module.scss"
import { FaRegCalendarAlt, FaRegUser } from "react-icons/fa";

interface Blog {
    blog: {
        id: number;
        img: string;
        title: string;
        body: string;
    }
}

const BlogBox: React.FC<Blog> = ({blog}) => {
  return (
    <div className={styles.box}>
        <div className={styles.image}>
            <Image 
                className={styles.img}
                src={blog.img} 
                alt="blog"
                layout="responsive"
                objectFit="cover"
                width="100%"
                height="100%"
            />
        </div>
        <div className={styles.content}>
            <div className={styles.icons}>
            <span><FaRegUser className={styles.icon} /> by user</span>
            <span><FaRegCalendarAlt className={styles.icon} /> 1st may, 2020</span>
            </div>
            <h3>{blog.title}</h3>
            <p>{blog.body}</p>
            <Link href="/blog"><a className="btn">ادامه مطلب</a></Link>
        </div>
    </div>
  )
}

export default BlogBox