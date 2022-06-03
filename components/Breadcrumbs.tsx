import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/component/Breadcrumbs.module.scss";



const Breadcrumbs = () => {
  const router = useRouter();
  const { title } = router.query;


  return (
    <div className={styles.breadcrumbs}>
      <Link href="/">
        <a className={styles.link}>صفحه اصلی</a>
      </Link>

      <Link href="/blogs">
        <a className={styles.link}>بلاگ</a>
      </Link>

      {title && <span className={styles.link}>{title}</span>}
    </div>
  );
};

export default Breadcrumbs;
