import { useRouter } from "next/router";
import dynamic from "next/dynamic";
// import { GetServerSideProps, GetServerSidePropsContext } from "next";
// import { getSession } from "../utils/getSession";

//component
import Image from "next/image";
import Link from "next/link";
import Heading from "../components/Heading";
import Layout from "../components/Layout";
import Section from "../components/Section";
import { BiTrash } from "react-icons/bi";
import { BsCheck2Circle } from "react-icons/bs";

//redux
import { useSelector, useDispatch } from "react-redux";
import { cartSelect, UserSelect } from "../redux/store";
import { removeFromCart } from "../redux/cartSlice";

//style
import styles from "../styles/page/CartPage.module.scss";

const discount = 5;

const Cart = () => {
  const { cart, quantity, total } = useSelector(cartSelect);
  const { user } = useSelector(UserSelect);
  const dispatch = useDispatch()
  const router = useRouter();

  const handlePayment = () => {
    if(user){
      // Router.push("the route which comes from backend")
      console.log("the route which comes from backend");
    }else{
      router.push("login?redirect=/cart")
    }
  }

  return (
    <Layout title="سبد خرید">
      <main>
        <Section className={styles.cartPage}>
          <Heading>
            <h2>سبد خرید</h2>
          </Heading>
          <div className={styles.cartPageContainer}>
            <div className={styles.cartPageContent}>
              {quantity > 0 ? (
                cart.map((data: any) => (
                  <div className={styles.box} key={data.id}>
                    <div className={styles.image}>
                      <Image
                        src={data.image}
                        alt={data.title}
                        layout="responsive"
                        objectFit="cover"
                        width="100%"
                        height="100%"
                      />
                    </div>
                    <div className={styles.content}>
                      <h3>{data.title}</h3>
                      <p>
                        <BsCheck2Circle className={styles.icon} /> پشتیبانی
                        مادام العمر
                      </p>
                      <p>
                        <BsCheck2Circle className={styles.icon} /> آپدیت رایگان
                        دوره
                      </p>
                      <p>
                        <BsCheck2Circle className={styles.icon} /> 
                        دسترسی نامحدود
                      </p>
                      <p>
                        <BsCheck2Circle className={styles.icon} /> قیمت{" "}
                        {data.price.toLocaleString()}
                      </p>
                      <button className="btn" onClick={() => dispatch(removeFromCart(data.id))}>
                        <BiTrash className={styles.icon} /> حذف دوره
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className={styles.emptyCart}>
                  {/* if cart was empty */}
                  سبد خرید خالی است !
                  <Link href="/courses">
                    <a className="btn">مشاهده دوره ها</a>
                  </Link>
                </div>
              )}
            </div>
            <div className={styles.cartPageSidebar}>
              <p className={styles.price}>
                قیمت دوره ها :<span>{total.toLocaleString()}</span>
              </p>
              <p className={styles.discount}>
                تخفیف دوره ها : <span>{discount} درصد</span>
              </p>
              <p className={styles.total}>
                جمع سبد خرید :{" "}
                <span>{(total * (1 - discount / 100)).toLocaleString()}</span>
              </p>
              <a onClick={handlePayment} className="btn">
                ادامه سفارش
              </a>
            </div>
          </div>
        </Section>
      </main>
    </Layout>
  );
};

export default dynamic(() => Promise.resolve(Cart), {ssr: false});

// export const getServerSideProps: GetServerSideProps = async (
//   context: GetServerSidePropsContext
// ) => {
//   const auth = await getSession(context);

//   if (!auth) {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false,
//       },
//     };
//   } else {
//     return {
//       props: {
//       },
//     };
//   }
// };
