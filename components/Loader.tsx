import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../styles/component/Loader.module.scss"

const Loader = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const startLoading = (url: string) => {
      if (url !== router.pathname || url !== router.query.slug) setIsLoading(true);
    };
    const finishLoading = (url: string) => {
      if (url === router.pathname || url !== router.query.slug) setIsLoading(false);
    };

    router.events.on("routeChangeStart", startLoading);
    router.events.on("routeChangeComplete", finishLoading);
    router.events.on("routeChangeError", finishLoading);

    return () => {
      router.events.off("routeChangeStart", startLoading);
      router.events.off("routeChangeComplete", finishLoading);
      router.events.off("routeChangeError", finishLoading);
    };
  }, [router.pathname, router.query.slug, router.events]);

  return (
    <>
      {isLoading && (
        <div className={styles.loader}>
          <div></div>
        </div>
      )}
    </>
  );
};

export default Loader;
