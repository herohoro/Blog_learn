import { AppProps } from "next/app";
import Link from "next/link";
import styles from "../styles/shared.module.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>
          <Link href="/" passHref>
            <a>blog Title</a>
          </Link>
        </h1>
        <ul>
          <li>
            <Link href="/" passHref>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/blog" passHref>
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/about" passHref>
              <a>About</a>
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <Component {...pageProps} />
      </div>
      <div className={styles.footer}>
        <span>Practiced by </span>
        <Link href="https://github.com/otoyo/easy-notion-blog">
          <a>easy-notion-blog</a>
        </Link>
      </div>
    </div>
  );
};
export default App;
