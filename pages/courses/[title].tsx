import { ToastContainer, toast } from 'react-toastify';
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
import 'react-toastify/dist/ReactToastify.min.css';
//data
import { cartData } from "../../fakeData/cartData";
import { blurData } from "../../utils/blurImagePlaceholder";

const CourseDetail = ({ course }: { course: Cart }) => {
  const dispatch = useDispatch();  
  const addNotify = () => toast.success(`دوره ${course.title} به سبد خرید اضافه شد`);

  const handleAdd = () => {
    dispatch(addToCart(course));
    addNotify();
  }
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
                <button className={`${styles.btn} btn`} onClick={handleAdd}>ثبت نام در دوره</button>
                <p className={styles.videoCount}>
                  <>این دوره شامل {course?.courseList?.length} ویدئو میباشد</>
                </p>
              </div>
              <div className={styles.videoList}>
                <details>
                  <summary>
                    لیست ویدئو ها <IoMdArrowDropdown className={styles.icon} />
                  </summary>
                  <ul className={styles.ulVideo}>
                    {course?.courseList?.map((list) => (
                      <li className={styles.item} key={list.id}>
                        <span className={styles.number}>{list.number}</span>
                        <FaYoutube className={styles.youtubeIcon} /> {list.title.slice(0, 20)} 
                        <span className={styles.time}>{list.time}</span>{" "}
                        {list.isLock && <FaLock className={styles.lockIcon} />}
                      </li>
                    ))}
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
      <ToastContainer />
    </Layout>
  );
};

export default CourseDetail;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const course = cartData.filter((i) => i.title === params?.title)[0];  
  return {
    props: {
      course,
    },
  };
};