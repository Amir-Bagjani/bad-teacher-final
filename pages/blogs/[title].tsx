//components
import Image from "next/image";
import BlogsLayout from "../../components/BlogsLayout";
import Layout from "../../components/Layout";
import { GoCalendar } from "react-icons/go";
//data
import { blogs } from "../../fakeData/blogs";
import { blurData } from "../../util/blurImagePlaceholder";
//types
import { GetServerSideProps } from "next";
import { Blog } from "../../types/blog";
//style
import styles from "../../styles/page/BlogDetail.module.scss";

const BlogDetail = ({ blog }: { blog: Blog }) => {
  return (
    <Layout title={blog.title} description={blog.body.slice(0, 100)}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.title}>
            <h2>{blog.title}</h2>
            <span>{new Date().toLocaleDateString("fa-IR")}</span>
            <GoCalendar className={styles.icon} />
          </div>
          <div className={styles.image}>
            <Image
              className={styles.img}
              src={blog.img}
              alt={blog.title}
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL={blurData}
            />
          </div>
        </div>
        <div className={styles.content}>
          <h3>{blog.h1}</h3>
          <p>{blog.hyper1}</p>
          <h3>{blog.h2}</h3>
          <p>{blog.hyper2}</p>
        </div>
      </div>
    </Layout>
  );
};

export default BlogsLayout(BlogDetail);

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const blog = blogs.filter((i) => i.title === params?.title)[0];

  return {
    props: {
      blog,
    },
  };
};
