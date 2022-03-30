import Link from "next/link";
export default function AboutPage() {
  return (
    <div>
      <h1>This page is About.</h1>
      <br />{" "}
      <Link href="/">
        <a>Go to Home!</a>
      </Link>
    </div>
  );
}
