import { useState } from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { FaCrown, FaGem, FaCopyright, FaYoutube } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { RiInstagramFill } from "react-icons/ri";
//type
type Slide = {
  id: number;
  icon: JSX.Element;
  title: string;
  description: string;
};
//style
import styles from "../styles/component/FeatureSwip.module.scss";

const featureDate = [
  {
    id: 1,
    icon: <FaCopyright className={styles.icon} />,
    title: "دوره های اختصاصی",
    description:
      "در دوره پولی و یا رایگان، نهایت کیفیت رو در تدریس و پشتیبانی دوره خواهیم داشت",
  },
  {
    id: 2,
    icon: <FaGem className={styles.icon} />,
    title: "دوره های اختصاصی",
    description:
      "در دوره پولی و یا رایگان، نهایت کیفیت رو در تدریس و پشتیبانی دوره خواهیم داشت",
  },
  {
    id: 3,
    icon: <GiGraduateCap className={styles.icon} />,
    title: "دوره های اختصاصی",
    description:
      "در دوره پولی و یا رایگان، نهایت کیفیت رو در تدریس و پشتیبانی دوره خواهیم داشت",
  },
  {
    id: 4,
    icon: <FaYoutube className={styles.icon} />,
    title: "دوره های اختصاصی",
    description:
      "در دوره پولی و یا رایگان، نهایت کیفیت رو در تدریس و پشتیبانی دوره خواهیم داشت",
  },
  {
    id: 5,
    icon: <RiInstagramFill className={styles.icon} />,
    title: "دوره های اختصاصی",
    description:
      "در دوره پولی و یا رایگان، نهایت کیفیت رو در تدریس و پشتیبانی دوره خواهیم داشت",
  },
  {
    id: 6,
    icon: <FaCrown className={styles.icon} />,
    title: "دوره های اختصاصی",
    description:
      "در دوره پولی و یا رایگان، نهایت کیفیت رو در تدریس و پشتیبانی دوره خواهیم داشت",
  },
];

const FeaturesSwip = () => {
  return <SlideItem slideItem={featureDate} />;
};

export default FeaturesSwip;

const SlideItem = ({ slideItem }: { slideItem: Slide[] }) => {
  const [current, setCurrent] = useState(0);
  const length = slideItem.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1));
  };
  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1));
  };

  //check if slideItem is array
  if (!Array.isArray(slideItem) || slideItem.length === 0) return null;

  return (
    <div className={styles.boxContainer}>
      <BsArrowRightCircle onClick={nextSlide} className={styles.arrowRight} />
      <BsArrowLeftCircle onClick={prevSlide} className={styles.arrowLeft} />
      {slideItem.map((data, ind) => (
        <div
          className={styles.box}
          style={{ display: ind === current ? `block` : `none` }}
          key={data.id}
        >
          {data.icon}
          <div className={styles.content}>
            <h3>{data.title}</h3>
            <p>{data.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
