//type
import { AppPropsWithLayout } from "../types/model";

//components
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

//style
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
