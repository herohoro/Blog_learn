import { AppProps } from "next/app";
import styles from "../styles/shared.module.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className={styles.container}>
      <h3>***Header****</h3>
      <div>
        <Component {...pageProps} />
      </div>
      <h3>***Footer***</h3>
    </div>
  );
};
export default App;
