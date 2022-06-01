import Image from "next/image";
import Link from "next/link";
import { BiTime } from "react-icons/bi";
import { TiArrowLeftThick } from "react-icons/ti";
import { BsBookmarkHeart } from "react-icons/bs";
//type
import { Cart } from "../types/cart";
//style
import styles from "../styles/component/CourseBox.module.scss";
import { blurData } from "../util/blurImagePlaceholder";

interface CourseBoxProps {
  data: Cart;
}

const CourseBox = ({ data }: CourseBoxProps) => {
  return (
    <div className={styles.box}>
      <div className={styles.image}>
        <Image
          className={styles.img}
          src={data.image}
          alt={data.title}
          layout="fill"
          objectFit="cover"
          placeholder="blur"
          blurDataURL={blurData}
          priority
        />
      </div>
      <div className={styles.content}>
        <h5>{data.title}</h5>
        <p>{data.body}</p>
      </div>
      <div className={styles.info}>
        <div className={styles.date}>
          <BiTime className={styles.icon} />
          <span>{data.time}</span>
        </div>
        <BsBookmarkHeart className={styles.icon} />
        <span className={styles.price}>
          {data.price.toLocaleString()}
          <span className={styles.index}> تومان </span>
        </span>
      </div>
      <div className={styles.footer}>
        <Link href={`/courses/${data.title}`}>
          <a className={styles.btn}>
            مشاهده دوره <TiArrowLeftThick className={styles.icon} />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default CourseBox;
