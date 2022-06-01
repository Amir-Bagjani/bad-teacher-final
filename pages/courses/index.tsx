import Image from "next/image";
import Link from "next/link";
import CourseBox from "../../components/CourseBox";
import Heading from "../../components/Heading";
import Layout from "../../components/Layout";
import Section from "../../components/Section";
import { BiTime } from "react-icons/bi";
import { BsBookmarkHeart } from "react-icons/bs";
//style
import styles from "../../styles/page/Courses.module.scss";
//fetch data
import { cartData } from "../../fakeData/cartData";

const Courses = () => {
  return (
    <Layout title="دوره ها">
      <main>
        <Section className={styles.coursesPage}>
          <Heading>
            <h2> دوره های آموزشی</h2>
          </Heading>

          <div className={styles.coursePopular}>
            {cartData
              .filter((data) => data.popular)
              .map((data) => (
                <div className={styles.courseBox} key={data.id}>
                  <div className={styles.image}>
                    <Image
                      className={styles.img}
                      src={data.image}
                      alt={data.title}
                      width="100%"
                      height="100%"
                      layout="responsive"
                      objectFit="cover"
                      priority
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
                    <Link href={`/courses/${data.id}`}>
                      <a className={styles.viewCourseBtn}>مشاهده دوره</a>
                    </Link>
                  </div>
                </div>
              ))}
          </div>

          <div className={styles.coursesContainer}>
            {cartData
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
