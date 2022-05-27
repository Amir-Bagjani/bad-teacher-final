//type
import { AppPropsWithLayout } from '../types/model'

//style
import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return <Component {...pageProps} />
}

export default MyApp
