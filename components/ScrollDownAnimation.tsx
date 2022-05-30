import styles from "../styles/component/ScrollDownAnimation.module.scss";

const ScrollDownAnimation = () => {
  return (
    <span className={styles.mouse}>
      <span className={styles.mouseWheel}></span>
    </span>
  );
};

export default ScrollDownAnimation;
