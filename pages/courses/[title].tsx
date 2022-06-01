//types
import { GetServerSideProps } from "next";
import { Cart } from "../../types/cart";
//redux
import { addToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
//components
import Image from "next/image";
import Layout from "../../components/Layout";
import Section from "../../components/Section";
import { FaLock, FaMoneyBillWave, FaYoutube } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
//styles
import styles from "../../styles/page/CourseDetail.module.scss";
import { cartData } from "../../fakeData/cartData";
import { blurData } from "../../util/blurImagePlaceholder";

const CourseDetail = ({ course }: { course: Cart }) => {
  const dispatch = useDispatch();
  return (
    <Layout description={course.body.slice(0, 80)} title={course.title}>
      <main>
        <Section className={styles.courseDetailpage}>
          <div className={styles.header}>
            <div className={styles.courseBox}>
              <div className={styles.image}>
                <Image
                  className={styles.img}
                  src={course.image}
                  alt={course.title}
                  layout="fill"
                  objectFit="cover"
                  placeholder="blur"
                  blurDataURL={blurData}
                  priority
                />
              </div>
              <div className={styles.content}>
                <h3>{course.title}</h3>
                <p>{course.body}</p>
              </div>
            </div>
          </div>

          <div className={styles.courseContent}>
            <div className={styles.sidebar}>
              <div className={styles.priceContainer}>
                <div className={styles.price}>
                  <h3>مبلغ: {course.price.toLocaleString()} تومان</h3>
                  <FaMoneyBillWave className={styles.icon} />
                </div>
                <button className={`${styles.btn} btn`} onClick={() => dispatch(addToCart(course))}>ثبت نام در دوره</button>
                <p className={styles.videoCount}>
                  این دوره شامل 10 ویدئو میباشد
                </p>
              </div>
              <div className={styles.videoList}>
                <details>
                  <summary>
                    لیست ویدئو ها <IoMdArrowDropdown className={styles.icon} />
                  </summary>
                  <ul className={styles.ulVideo}>
                    <li className={styles.item}>
                      <span className={styles.number}>1</span>
                      <FaYoutube className={styles.youtubeIcon} /> ویدئو شماره
                      یک <span className={styles.time}>35 : 12</span>{" "}
                      <FaLock className={styles.lockIcon} />
                    </li>

                    <li className={styles.item}>
                      <span className={styles.number}>1</span>
                      <FaYoutube className={styles.youtubeIcon} /> ویدئو شماره
                      یک <span className={styles.time}>35 : 12</span>{" "}
                      <FaLock className={styles.lockIcon} />
                    </li>

                    <li className={styles.item}>
                      <span className={styles.number}>1</span>
                      <FaYoutube className={styles.youtubeIcon} /> ویدئو شماره
                      یک <span className={styles.time}>35 : 12</span>{" "}
                      <FaLock className={styles.lockIcon} />
                    </li>

                    <li className={styles.item}>
                      <span className={styles.number}>1</span>
                      <FaYoutube className={styles.youtubeIcon} /> ویدئو شماره
                      یک <span className={styles.time}>35 : 12</span>{" "}
                      <FaLock className={styles.lockIcon} />
                    </li>

                    <li className={styles.item}>
                      <span className={styles.number}>1</span>
                      <FaYoutube className={styles.youtubeIcon} /> ویدئو شماره
                      یک <span className={styles.time}>35 : 12</span>{" "}
                      <FaLock className={styles.lockIcon} />
                    </li>

                    <li className={styles.item}>
                      <span className={styles.number}>1</span>
                      <FaYoutube className={styles.youtubeIcon} /> ویدئو شماره
                      یک <span className={styles.time}>35 : 12</span>{" "}
                      <FaLock className={styles.lockIcon} />
                    </li>
                  </ul>
                </details>
              </div>
            </div>

            <div className={styles.videoPlayer}>
              <video controls width="100%"></video>
            </div>
          </div>
        </Section>
      </main>
    </Layout>
  );
};

export default CourseDetail;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const course = cartData.filter((i) => i.title === params?.title)[0];
  console.log(course);

  return {
    props: {
      course,
    },
  };
};
