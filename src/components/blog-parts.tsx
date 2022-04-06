import * as interfaces from "../lib/interfaces";
import { getDateStr } from "../lib/blog-helpers";
//client.tsで用意したpostデータを取り出していく
// postの中にある.... っていった感じで引数にpostを入れる

export const PostDate = ({ post }) => <div>{getDateStr(post.Date)}</div>;

export const PostTitle = ({ post }) => {
  const postTitle = post.Title ? post.Title : "";
  return <h3>{postTitle}</h3>;
};
export const PostExcerpt = ({ post }) => (
  <div>
    <p>{post.Excerpt ? post.Excerpt : ""}</p>
  </div>
);
