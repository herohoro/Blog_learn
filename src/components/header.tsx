import Link from "next/link";
import styles from "../styles/header.module.css";
const Header = () => {
  return (
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
  );
};
export default Header;
