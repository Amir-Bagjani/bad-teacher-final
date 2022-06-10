//components
import { useCallback } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import moment from "jalali-moment";
//components
import Image from "next/image";
import BlogsLayout from "../../components/BlogsLayout";
import Layout from "../../components/Layout";
import { GoCalendar } from "react-icons/go";
//data
import { blurData } from "../../util/blurImagePlaceholder";
import { client } from "../../util/contentful";
//types
import { GetStaticPaths, GetStaticProps } from "next";
import { Entry, TagLink } from "contentful";
//style
import styles from "../../styles/page/BlogDetail.module.scss";

const BlogDetail = ({ blog }: { blog: Entry<any> }) => {
  const { title, featuredImage, date, excerpt, body } = blog.fields;
  const { tags } = blog.metadata;

  const getTags = useCallback((tags: TagLink[]) => {
    const arrayTag = tags.map((tag) => tag.sys.id);
    return arrayTag.join(", ");
  }, []);

  return (
    <Layout title={title} description={excerpt} keywords={getTags(tags)}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.title}>
            <h2>{title}</h2>
            <span>
              {moment(date.split("T")[0]).locale("fa").format("YYYY/M/D")}
            </span>
            <GoCalendar className={styles.icon} />
          </div>
          <div className={styles.image}>
            <Image
              className={styles.img}
              src={`https:${featuredImage.fields.file.url}`}
              alt={title}
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL={blurData}
            />
          </div>
        </div>
        <div className={styles.content}>{documentToReactComponents(body)}</div>
      </div>
    </Layout>
  );
};

export default BlogsLayout(BlogDetail);

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await client.getEntries({ content_type: "badTeacherBlog" });

  const paths = res.items.map((item: Entry<any>) => {
    return {
      params: { slug: item.fields.slug },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<any> = async ({ params }) => {
  const res = await client.getEntries({
    content_type: "badTeacherBlog",
    "fields.slug": params?.slug,
  });

  return {
    props: {
      blog: res.items[0],
    },
    revalidate: 10,
  };
};
