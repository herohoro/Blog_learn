import * as interfaces from "../lib/interfaces";
import Link from "next/link";
import { getDateStr, getBlogLink } from "../lib/blog-helpers";
//client.tsで用意したpostデータを取り出していく
// postの中にある.... っていった感じで引数にpostを入れる

export const PostDate = ({ post }) => <div>{getDateStr(post.Date)}</div>;

export const PostTitle = ({ post }) => {
  const postTitle = post.Title ? post.Title : "";
  return (
    <h3>
      <Link href="/blog/[slug]" as={getBlogLink(post.Slug)} passHref>
        <a>{postTitle}</a>
      </Link>
    </h3>
  );
};
export const PostExcerpt = ({ post }) => (
  <div>
    <p>{post.Excerpt ? post.Excerpt : ""}</p>
  </div>
);
