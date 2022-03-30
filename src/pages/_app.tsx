import { AppProps } from "next/app";

import styles from "../styles/shared.module.css";
import Header from "../components/header";
import Footer from "../components/footer";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className={styles.container}>
      <Header />
      <div>
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
};
export default App;
