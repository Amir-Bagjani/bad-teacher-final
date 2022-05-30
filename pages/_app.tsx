//type
import { AppPropsWithLayout } from '../types/model'

//style
import '../styles/globals.scss'
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

    return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp
