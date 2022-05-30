import Link from "next/link";
import { BsInstagram, BsWhatsapp, BsYoutube } from "react-icons/bs";
import styles from "../styles/component/Footer.module.scss"


const Footer = () => {
    return (
      <footer className={`${styles.footer} ${styles.dark}`}>
        <div className="wrapper">
  
          <div className={styles.footerHeader}>
            <img src="/images/logo.svg" loading="lazy" alt="bad-teacher-logo" />
            <div className={styles.networks}>
              <a>
                <BsWhatsapp className={styles.icon} />
              </a>
              <a>
                <BsYoutube className={styles.icon} />
              </a>
              <a>
                <BsInstagram className={styles.icon} />
              </a>
            </div>
          </div>
  
          <div className={styles.newsletter}>
              <h3>اشتراک در خبر نامه</h3>
              <p>برای اطلاع از آخرین دوره ها و آموزش های رایگان در خبرنامه آکادمی <span>Bad Teacher</span> عضو شوید.</p>
  
              <form>
                  <input type="email"  placeholder="ایمیل خود را وارد کنید" />
                  <input type="submit"  value="ارسال" />
              </form>
          </div>
  
          <div className={styles.footerContent}>
  
            <div className={`${styles.box} ${styles.about}`}>
              <h3>درباره Bad Teacher</h3>
              <p>
                Bad Teacher یکی از پرتلاش‌ترین و بروزترین وبسایت های آموزشی در سطح
                ایران است که همیشه تلاش کرده تا بتواند جدیدترین و بروزترین مقالات
                و دوره‌های آموزشی را در اختیار علاقه‌مندان ایرانی قرار دهد.
              </p>
            </div>
  
            <div className={`${styles.box} ${styles.links}`}>
              <h3>دسترسی سریع</h3>
              <Link href="/">صفحه اصلی</Link>
              <Link href="/courses">دوره ها</Link>
              <Link href="/about">درباره من</Link>
              <Link href="/blogs">وبلاگ</Link>
            </div>
  
            <div className={`${styles.box} ${styles.contact}`}>
              <h3>مسیر ارتباطی</h3>
              <div className={styles.info}>
                <h4>شماره تماس واتس اپ :</h4>
                <p>
                  98-912-111-2222+ 
                </p>
              </div>
              <div className={styles.info}>
                <h4>ایمیل :</h4>
                <p>
                  amirbagjani@gmial.com 
                </p>
              </div>
              <div className={styles.info}>
                <h4>آی دی تلگرام :</h4>
                <p>
                  @amirbagjani 
                </p>
              </div>
            </div>
  
          </div>
  
          <p className={styles.credit}>
            کليه حقوق محصولات و محتوای اين سایت متعلق به Bad Teacher می باشد و هر
            گونه کپی برداری از محتوا و محصولات سایت غیر مجاز و بدون رضایت ماست.
          </p>
  
        </div>
      </footer>
    );
  };
  
  export default Footer;