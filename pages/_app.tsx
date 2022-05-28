//type
import { AppPropsWithLayout } from '../types/model'

//style
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }

    return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
