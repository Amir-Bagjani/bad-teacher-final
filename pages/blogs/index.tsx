//components
import BlogsLayout from "../../components/BlogsLayout";
import Layout from "../../components/Layout";
import BlogBox from "../../components/BlogBox";
import { client } from "../../utils/contentful";
//types
import { GetStaticProps } from "next";
import { Entry } from "contentful";
//style
import styles from "../../styles/page/Blogs.module.scss";

const BlogsPage = ({ blogsData }: {blogsData: Entry<any>[]}) => {
  
  return (
    <Layout title="بلاگ">
        <div className={styles.container}>
          {blogsData.map((data) => (
            <BlogBox blog={data} key={data.sys.id} />
          ))}
        </div>
    </Layout>
  );
};

export default BlogsLayout(BlogsPage);

export const getStaticProps: GetStaticProps  = async () => {
  const res = await client.getEntries({ content_type: "badTeacherBlog"})


    return {
    props: {
      blogsData: res.items,
    },
    revalidate: 10,
  };

};