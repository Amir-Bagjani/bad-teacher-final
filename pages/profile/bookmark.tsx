import { useState } from "react";
//components
import Link from "next/link";
import Layout from "../../components/Layout";
import ProfileLayout from "../../components/ProfileLayout";
import CourseBox from "../../components/CourseBox";
//data
import { cartData } from "../../fakeData/cartData";
//type
import { Cart } from "../../types/cart";
//style
import styles from "../../styles/page/ProfileBookmark.module.scss";

const Bookmark = () => {
    const [bookmark] = useState<Cart[]>([]);

  return (
    <Layout>
      <div className={styles.container}>
      <div className={styles.wrapper}>
          {bookmark.length > 0 &&
            bookmark
              .filter((_, ind) => ind < 2)
              .map((data) => <CourseBox data={data} key={data.id} />)}
          {bookmark.length === 0 && (
            <div className={styles.empty}>
              لیست علاقه مندی ها خالی است!
              <Link href="/courses">
                <a className="btn">مشاهده دوره ها</a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProfileLayout(Bookmark);
