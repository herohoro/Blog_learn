import Link from "next/link";

export default function IndexPage() {
  return (
    <div>
      <h1>Hello World. </h1>
      <Link href="/about">
        <a>👉　About page!</a>
      </Link>
      <br />
      <Link href="/blog/first-page">
        <a>👉　BlogList page!</a>
      </Link>
    </div>
  );
}
