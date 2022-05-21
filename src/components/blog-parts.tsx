import Link from "next/link";
import { getDateStr, getBlogLink } from "../lib/blog-helpers";
//client.tsで用意したpostデータを取り出していく
// postの中にある.... っていった感じで引数にpostを入れる
import NotionBlock from "./notion-block";

export const PostDate = ({ post }) => <div>{getDateStr(post.Date)}</div>;

export const PostTitle = ({ post, enableLink = true }) => {
  const postTitle = post.Title ? post.Title : "";
  return (
    <h3>
      {enableLink ? (
        <Link href="/blog/[slug]" as={getBlogLink(post.Slug)} passHref>
          <a>{postTitle}</a>
        </Link>
      ) : (
        postTitle
      )}
    </h3>
  );
};
export const PostExcerpt = ({ post }) => (
  <div>
    <p>{post.Excerpt ? post.Excerpt : ""}</p>
  </div>
);
const wrapListItems = (blocks) =>
  blocks.reduce((arr, block) => {
    return arr.concat(block);
  }, []);

export const PostBody = ({ blocks }) => (
  <div>
    {wrapListItems(blocks).map((block, i) => (
      <NotionBlock block={block} key={`post-body-${i}`} />
    ))}
  </div>
);
