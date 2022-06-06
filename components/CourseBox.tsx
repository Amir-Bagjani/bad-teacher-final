import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BiTime } from "react-icons/bi";
import { TiArrowLeftThick } from "react-icons/ti";
import { BsBookmarkHeart, BsFillBookmarkHeartFill } from "react-icons/bs";
import { blurData } from "../util/blurImagePlaceholder";
//type
import { Cart } from "../types/cart";
//style
import styles from "../styles/component/CourseBox.module.scss";

interface CourseBoxProps {
  data: Cart;
}

const CourseBox = ({ data }: CourseBoxProps) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const addBookmark = (data: Cart) => {
    const localState = localStorage.getItem("bookmark")
      ? JSON.parse(localStorage.getItem("bookmark")!)
      : [];

    localState.push(data);
    localStorage.setItem("bookmark", JSON.stringify(localState));
    setIsBookmarked(true);
  };

  const removeBookmark = (id: number) => {
    let localState = JSON.parse(localStorage.getItem("bookmark")!);
    localState = localState.filter((i: Cart) => i.id !== id);
    localStorage.setItem("bookmark", JSON.stringify(localState));
    setIsBookmarked(false);
  };

  //prevent hydration for bookmark
  useEffect(() => {
    if (typeof window !== "undefined") {
      const localState = localStorage.getItem("bookmark")
        ? JSON.parse(localStorage.getItem("bookmark")!)
        : [];

      //return true if course was bookmarked and false if it was not
      setIsBookmarked(localState.some((i: Cart) => i.id === data.id));
    }
  }, []);

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
        {isBookmarked ? (
          <BsFillBookmarkHeartFill
            className={styles.icon}
            style={{ color: `red` }}
            onClick={() => removeBookmark(data.id)}
          />
        ) : (
          <BsBookmarkHeart
            className={styles.icon}
            onClick={() => addBookmark(data)}
          />
        )}
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
