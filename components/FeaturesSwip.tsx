import { FaCrown, FaGem, FaCopyright, FaYoutube } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { RiInstagramFill } from "react-icons/ri";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

//style
import styles from "../styles/component/FeatureSwip.module.scss";

const FeaturesSwip = () => {
  return (
    <Swiper
      className={styles.featuresContent}
      spaceBetween={20}
      modules={[Autoplay, Pagination]}
      autoplay={{
        delay: 3500,
      }}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        0: {
          slidesPerView: 1.5,
        },
        768: {
          slidesPerView: 2.5,
        },
        1020: {
          slidesPerView: 3.5,
        },
      }}
    >
      <SwiperSlide className={styles.box}>
        <FaCopyright className={styles.icon} />
        <div className={styles.content}>
          <h3>دوره های اختصاصی</h3>
          <p>
            در دوره پولی و یا رایگان، نهایت کیفیت رو در تدریس و پشتیبانی دوره
            ارائه میدم
          </p>
        </div>
      </SwiperSlide>

      <SwiperSlide className={styles.box}>
        <FaGem className={styles.icon} />
        <div className={styles.content}>
          <h3>دوره پولی و رایگان</h3>
          <p>
            در دوره پولی و یا رایگان، نهایت کیفیت رو در تدریس و پشتیبانی دوره
            ارائه میدم
          </p>
        </div>
      </SwiperSlide>

      <SwiperSlide className={styles.box}>
        <GiGraduateCap className={styles.icon} />
        <div className={styles.content}>
          <h3>دوره پولی و رایگان</h3>
          <p>
            در دوره پولی و یا رایگان، نهایت کیفیت رو در تدریس و پشتیبانی دوره
            ارائه میدم
          </p>
        </div>
      </SwiperSlide>

      <SwiperSlide className={styles.box}>
        <FaYoutube className={styles.icon}  />
        <div className={styles.content}>
          <h3>دوره پولی و رایگان</h3>
          <p>
            در دوره پولی و یا رایگان، نهایت کیفیت رو در تدریس و پشتیبانی دوره
            ارائه میدم
          </p>
        </div>
      </SwiperSlide>

      <SwiperSlide className={styles.box}>
        <RiInstagramFill className={styles.icon}  />
        <div className={styles.content}>
          <h3>دوره پولی و رایگان</h3>
          <p>
            در دوره پولی و یا رایگان، نهایت کیفیت رو در تدریس و پشتیبانی دوره
            ارائه میدم
          </p>
        </div>
      </SwiperSlide>

      <SwiperSlide className={styles.box}>
        <FaCrown className={styles.icon} />
        <div className={styles.content}>
          <h3>اهمیت به زبان آموز</h3>
          <p>
            در دوره پولی و یا رایگان، نهایت کیفیت رو در تدریس و پشتیبانی دوره
            ارائه میدم
          </p>
        </div>
      </SwiperSlide>

    </Swiper>
  );
};

export default FeaturesSwip;
