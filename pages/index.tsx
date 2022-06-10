// import dynamic from 'next/dynamic'
//type
import { NextPageWithLayout } from '../types/model'
//components
import Link from 'next/link'
import Heading from '../components/Heading'
import Layout from '../components/Layout'
import Section from '../components/Section'
import BlogBox from '../components/BlogBox'
import ScrollDownAnimation from '../components/ScrollDownAnimation'
import CourseBox from '../components/CourseBox'
import FeaturesSwip from '../components/FeaturesSwip'

// const FeaturesSwip = dynamic(() => import('../components/FeaturesSwip'), {
//   suspense: true,
// })
//style
import styles from '../styles/page/Home.module.scss'
//fetch data
import useGetBlogs from '../hooks/useGetBlogs'
import { cartData } from '../fakeData/cartData'
import { Suspense } from 'react'

const Home: NextPageWithLayout = () => {
  const {blogs} = useGetBlogs(3);

  return (
    <Layout title="صفحه اصلی">
      <main>

      <Section  id="hero" className={styles.hero}>
        <ScrollDownAnimation />
        <div className={styles.heroContent}>
            <h1><span> آکادمی زبان </span> <br /> BAD TEACHER</h1>
            <p>این جا یاد میگیرید چطوری برنامه نویس خوبی بشید نه اینکه فقط برنامه بنویسید</p>
            <a href="#courses" className="btn">مشاهده دوره ها </a>
        </div>
      </Section>

      <Section id="courses" className={styles.courses}>
        <Heading>
          <h2>چرا آکادمی Bad Teacher؟</h2>
          <p>آکادمی آموزشی Bad Teacher یک آکادمی خصوصی است</p>
        </Heading>
      </Section>

        <div className={styles.featuresContainer}>
          <FeaturesSwip />         
          {/* <Suspense fallback={null}>
            <FeaturesSwip />         
          </Suspense> */}
        </div>

      <Section className={styles.courses}>
        <Heading>
            <h2>دوره ها</h2>
            <p>سکوی پرتاپ شما به سمت موفقیت</p>
        </Heading>
        <div className={styles.coursesContainer}>

          <div className={styles.container}>
            {cartData.filter((_,ind) => ind <4).map(data => (
              <CourseBox key={data.id} data={data} />
            ))}
          </div>  

          <div className={styles.coursesBtn}>
            <Link href="/courses"><a className="btn">همه دوره ها</a></Link>
          </div>

        </div>

      </Section>

      {blogs && <Section id="blog"  className={styles.blog}>

        <Heading>
          <h2>تازه ترین نوشته ها</h2>
        </Heading>
        <div  className={styles.container}>
          {blogs.map(blog => (
            <BlogBox key={blog.sys.id} blog={blog} />
          ))}
        </div>
        <div className={styles.blogsBtn}>
            <Link href="/blogs"><a className="btn">همه نوشته ها</a></Link>
          </div>
      </Section>}

      </main>
    </Layout>
  )
}

export default Home
