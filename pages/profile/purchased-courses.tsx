import { useState } from "react";
//components
import Link from "next/link";
import CourseBox from "../../components/CourseBox";
import Layout from "../../components/Layout";
import ProfileLayout from "../../components/ProfileLayout";
//data
import { cartData } from "../../fakeData/cartData";
//type
import { Cart } from "../../types/cart";
//style
import styles from "../../styles/page/ProfilePurchasedCourses.module.scss";

const PurchasedCourses = () => {
  const [purchased] = useState<Cart[]>(cartData);
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {purchased.length > 0 &&
            purchased
              .filter((_, ind) => ind < 2)
              .map((data) => <CourseBox data={data} key={data.id} />)}
          {purchased.length === 0 && (
            <div className={styles.empty}>
              هنوز دوره ای خریداری نکردید !
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

export default ProfileLayout(PurchasedCourses);
