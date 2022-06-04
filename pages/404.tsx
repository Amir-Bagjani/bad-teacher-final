import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useEffect, useRef } from "react";
import Layout from "../components/Layout";
import Section from "../components/Section";
import styles from "../styles/page/NotFound.module.scss";
import { blurData } from "../util/blurImagePlaceholder";

const NotFound = () => {
  const numberRef = useRef({} as HTMLImageElement);

  const move = useCallback((e: MouseEvent) => {
    let x = (window.innerWidth / 2 - e.pageX) / 50;
    let y = (window.innerHeight / 2 - e.pageY) / 50;
    // numberRef.current.style.transform = `translateX(${x}px) translateY(${y}px)`;
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
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
