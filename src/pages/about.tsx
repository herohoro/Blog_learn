import Link from "next/link";
const AboutPage = () => {
  return (
    <div>
      <h1>This page is About.</h1>
      <br />{" "}
      <Link href="/">
        <a>Go to Home!</a>
      </Link>
    </div>
  );
};
export default AboutPage;
