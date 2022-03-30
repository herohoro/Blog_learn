import Link from "next/link";
const RenderPage = () => (
  <div>
    <div>
      <h2>Welcome! </h2>
      <p>branch 03_csb-nods6y</p>
      <code>making like easy-notion-blog　</code>
      <h3>This page is Home</h3>
      <Link href="/about">
        <a>👉　About page!</a>
      </Link>
      <br />
      <Link href="/blog/first-page">
        <a>👉　BlogList page!</a>
      </Link>
    </div>
  </div>
);
export default RenderPage;
