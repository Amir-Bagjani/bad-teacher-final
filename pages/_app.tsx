//type
import { AppPropsWithLayout } from "../types/model";

//components
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

//style
import "../styles/globals.scss";
import { Provider } from "react-redux";
import { store } from "../redux/store";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

  return (
    <Provider store={store}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}

export default MyApp;
