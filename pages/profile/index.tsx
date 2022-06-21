import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { getSession } from "../../utils/getSession";
import useGetBlogs from "../../hooks/useGetBlogs";
import moment from "jalali-moment";
//components
import Link from "next/link";
import Layout from "../../components/Layout";
import ProfileLayout from "../../components/ProfileLayout";
import { BsInstagram, BsYoutube } from "react-icons/bs";
import { FaBell, FaBookOpen, FaCartPlus, FaGraduationCap, FaRegCalendarAlt, FaUserGraduate } from "react-icons/fa";
//style
import styles from "../../styles/page/Profile.module.scss";

const Profile = () => {
  const { blogs } = useGetBlogs(4);
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.tutorials}>
          <div className={styles.box}>
            <FaGraduationCap className={styles.icon} />
            <div className={styles.content}>
              <h4>32 دوره</h4>
              <p>موجود در سایت</p>
            </div>
          </div>
          <div className={styles.box}>
          <FaUserGraduate className={styles.icon} />
            <div className={styles.content}>
              <h4>5 دوره</h4>
              <p>ثبت نام کرده اید</p>
            </div>
          </div>
          <div className={styles.box}>
          <FaCartPlus className={styles.icon} />
            <div className={styles.content}>
              <h4>0 دوره</h4>
              <p>در انتظار پرداخت</p>
            </div>
          </div>
        </div>

        <div className={styles.networks}>
          <h4>مارا در شبکه های اجتماعی دنبال کنید</h4>
          <div className={styles.links}>
            <a href="#">
                <BsInstagram className={styles.iconInstagram} /> اینستاگرام
            </a>
            <a href="#">
                <BsYoutube className={styles.iconYoutube} /> کانال یوتیوب
            </a>
          </div>
        </div>

        <div className={styles.notifications}>
          <FaBell className={styles.icon} />
          <details>
            <summary>
              پشتیبانی دوره ها{" "}
              <span>در تاریخ: {new Date().toLocaleDateString("fa-IR")}</span>
            </summary>
            <p>
              بعد از اینکه هر دوره را خریداری کردید، بصورت مادام العمر میتوانید
              از پبعد از اینکه هر دوره را خریداری کردید، بصورت مادام العمر
              میتوانید از پ بعد از اینکه هر دوره را خریداری کردید، بصورت مادام
              العمر میتوانید از پبعد از اینکه هر دوره را خریداری کردید، بصورت
              مادام العمر میتوانید از پشتیبانی برخوردار شوید
            </p>
          </details>

          <details>
            <summary>
              آپدیت دوره ها
              <span>در تاریخ: {new Date().toLocaleDateString("fa-IR")}</span>
            </summary>
            <p> همه دوره ها دارای آپدیت هستند.</p>
          </details>
        </div>

        <div className={styles.articles}>
            <FaBookOpen className={styles.icon} />
          
          {blogs?.map((blog) => (
            <div className={styles.box} key={blog.sys.id}>
              <span>
                <FaRegCalendarAlt className={styles.icon} />
                {moment(blog.fields.date.split("T")[0]).locale("fa").format("YYYY/M/D")}
              </span>
              <Link href={`/blogs/${blog.fields.slug}`}>{blog.fields.title}</Link>
              <p>{blog.fields.excerpt}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProfileLayout(Profile);

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const auth = await getSession(context);

  if (!auth) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  } else {
    return {
      props: {
      },
    };
  }
};
