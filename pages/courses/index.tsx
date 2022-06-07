//components
import Image from "next/image";
import Link from "next/link";
import CourseBox from "../../components/CourseBox";
import Heading from "../../components/Heading";
import Layout from "../../components/Layout";
import Section from "../../components/Section";
import { BiTime } from "react-icons/bi";
import { BsBookmarkHeart } from "react-icons/bs";
//types
import { GetServerSideProps } from "next";
import { Cart } from "../../types/cart";
//style
import styles from "../../styles/page/Courses.module.scss";
//fetch data
import { cartData as courses } from "../../fakeData/cartData";
import { blurData } from "../../util/blurImagePlaceholder";

const Courses = ({courses}:{courses: Cart[]}) => {
  return (
    <Layout title="دوره ها">
      <main>
        <Section className={styles.coursesPage}>
          <Heading>
            <h2> دوره های آموزشی</h2>
          </Heading>

          <div className={styles.coursePopular}>
            {courses
              .filter((data) => data.popular)
              .map((data) => (
                <div className={styles.courseBox} key={data.id}>
                  <div className={styles.image}>
                    <Image
                      className={styles.img}
                      src={data.image}
                      alt={data.title}
                      layout="fill"
                      objectFit="cover"
                      placeholder="blur"
                      blurDataURL={blurData}
                    />
                  </div>
                  <div className={styles.content}>
                    <h3>{data.title}</h3>
                    <p>{data.body}</p>
                    <div className={styles.footer}>
                      <div className={styles.date}>
                        <BiTime className={styles.icon} />
                        <span>{data.time}</span>
                      </div>
                      <BsBookmarkHeart className={styles.icon} />
                      <span className={styles.price}>
                        {data.price.toLocaleString()}{" "}
                        <span className={styles.index}> تومان </span>
                      </span>
                    </div>
                    <Link href={`/courses/${data.title}`}>
                      <a className={styles.viewCourseBtn}>مشاهده دوره</a>
                    </Link>
                  </div>
                </div>
              ))}
          </div>

          <div className={styles.coursesContainer}>
            {courses
              .filter((data) => !data.popular)
              .map((data) => (
                <CourseBox key={data.id} data={data} />
              ))}
          </div>
        </Section>
      </main>
    </Layout>
  );
};

export default Courses;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      courses,
    },
  };
};
