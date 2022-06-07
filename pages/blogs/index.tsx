//components
import BlogsLayout from "../../components/BlogsLayout";
import Layout from "../../components/Layout";
import BlogBox from "../../components/BlogBox";
//data
import { blogs as blogsData } from "../../fakeData/blogs";
//types
import { GetServerSideProps } from "next";
import { Blog } from "../../types/blog";
//style
import styles from "../../styles/page/Blogs.module.scss";

const BlogsPage = ({ blogsData }: { blogsData: Blog[] }) => {
  return (
    <Layout title="بلاگ">
        <div className={styles.container}>
          {blogsData.map((data) => (
            <BlogBox blog={data} key={data.id} />
          ))}
        </div>
    </Layout>
  );
};

export default BlogsLayout(BlogsPage);

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      blogsData: blogsData,
    },
  };
};
