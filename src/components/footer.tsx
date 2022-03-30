import Link from "next/link";
import styles from "../styles/footer.module.css";
const Footer = () => (
  <footer className={styles.footer}>
    <span>Practiced by </span>
    <Link href="https://github.com/otoyo/easy-notion-blog">
      <a>easy-notion-blog</a>
    </Link>
  </footer>
);
export default Footer;
