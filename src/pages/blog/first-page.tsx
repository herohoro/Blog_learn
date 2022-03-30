import Link from "next/link";
export default function RenderPosts() {
  return (
    <div>
      <h1>This page is blogList .</h1>
      <br />
      {""}
      <br />
      <Link href="/">
        <a>Go to Home!</a>
      </Link>
    </div>
  );
}
