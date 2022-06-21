//type
import { AppPropsWithLayout } from "../types/model";

//components
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

//redux
import { Provider } from "react-redux";
import { store } from "../redux/store";

//style
import "../styles/globals.scss";

import { QueryClient, QueryClientProvider } from "react-query";

// Create a client
const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  if (Component.getLayout) {
    return Component.getLayout(
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </QueryClientProvider>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </Provider>
    </QueryClientProvider>
  );
}

export default MyApp;
