import useLocalStorage from "../../hooks/useLocalStorage";
import { getSession } from "../../utils/getSession";
//components
import dynamic from "next/dynamic";
import Link from "next/link";
import Layout from "../../components/Layout";
import ProfileLayout from "../../components/ProfileLayout";
import CourseBox from "../../components/CourseBox";
//type
import { Cart } from "../../types/cart";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
//style
import styles from "../../styles/page/ProfileBookmark.module.scss";

const Bookmark = () => {
  const [bookmark] = useLocalStorage<Cart[]>("bookmark", []);
 
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {bookmark.length > 0 &&
            bookmark.map((data) => <CourseBox data={data} key={data.id} />)}
          {bookmark.length === 0 && (
            <div className={styles.empty}>
              لیست علاقه مندی ها خالی است!
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

// export default ProfileLayout(Bookmark);
export default dynamic(() => Promise.resolve(ProfileLayout(Bookmark)), {
  ssr: false,
});

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