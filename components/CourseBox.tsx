import Image from "next/image";
import Link from "next/link";
import { BiTime } from "react-icons/bi";
import { TiArrowLeftThick } from "react-icons/ti";
import { BsBookmarkHeart } from "react-icons/bs";
import styles from "../styles/component/CourseBox.module.scss";

const price = 2850000;

const CourseBox = () => {
  return (
    <div className={styles.box}>
      <div className={styles.image}>
        <Image
          className={styles.img}
          src="/images/course.png"
          alt="course-image"
          layout="responsive"
          objectFit="cover"
          width="100%"
          height="100%"
        />
      </div>
      <div className={styles.content}>
        <h5>دوره Node.js نود جی اس</h5>
        <p>
          آموزش کاربردی نود جی اس در این دوره به آموزش پیاده سازی نود جی اس و
          پیاده سازی یک نرم افزار تحت وب کامل میپرداار تحت وب کامل میپرداار تحت
          وب کامل میپرداار تحت وب کامل میپردازیم
        </p>
      </div>
      <div className={styles.info}>
        <div className={styles.date}>
          <BiTime className={styles.icon} />
          <span>07:43:10</span>
        </div>
        <BsBookmarkHeart className={styles.icon} />
        <span className={styles.price}>{price.toLocaleString()}</span>
      </div>
      <div className={styles.footer}>
        <Link href="/">
          <a className={styles.btn}> مشاهده دوره <TiArrowLeftThick className={styles.icon} /></a>
        </Link>
      </div>
    </div>
  );
};

export default CourseBox;
