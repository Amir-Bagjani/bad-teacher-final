import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/component/Breadcrumbs.module.scss";

const Breadcrumbs = () => {
  const router = useRouter();
  const slug = router?.query?.slug !;

  return (
    <div className={styles.breadcrumbs}>
      <Link href="/">
        <a className={styles.link}>صفحه اصلی</a>
      </Link>

      <Link href="/blogs">
        <a className={styles.link}>بلاگ</a>
      </Link>

      {typeof slug === "string" && (
        <span className={styles.link}>{slug.replaceAll("-", " ")}</span>
      )}
    </div>
  );
};

export default Breadcrumbs;
