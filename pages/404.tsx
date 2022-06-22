//components
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import Section from "../components/Section";
//data
import { blurData } from "../utils/blurImagePlaceholder";
//style
import styles from "../styles/page/NotFound.module.scss";

const NotFound = () => {

  return (
    <Layout title="صفحه پیدا نشد">
      <main>
        <Section className={styles.notFound}>
          <div className={styles.container}>
            <div className={styles.content}>
              <h3 className={styles.text}>صفحه مورد نظر پیدا نشد</h3>
              <Link href="/"><a className="btn">صفحه اصلی</a></Link>
              <Link href="/courses"><a className="btn">مشاهده دورها</a></Link>
            </div>
            <div className={styles.image}>
              <Image
                className={styles.img}
                src="/images/logo.svg"
                alt="bad-teacher-logo"
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                blurDataURL={blurData}
              />
            </div>

          </div>
        </Section>
      </main>
    </Layout>
  );
};

export default NotFound;
