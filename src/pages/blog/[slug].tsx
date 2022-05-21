import { useRouter } from "next/router";
import {
  getPostBySlug,
  getAllPosts,
  getAllBlocksByBlockId
} from "../../lib/client";
import { getBlogLink } from "../../lib/blog-helpers";
import styles from "../../styles/blog.module.css";
import { PostDate, PostTitle, PostBody } from "../../components/blog-parts";
// import { useEffect } from "react";

export async function getStaticProps({ params: { slug } }) {
  const post = await getPostBySlug(slug);
  const blocks = await getAllBlocksByBlockId(post.PageId);
  return {
    props: { post, blocks },
    revalidate: 60
  };
}
export async function getStaticPaths() {
  const posts = await getAllPosts();
  return {
    paths: posts.map((post) => getBlogLink(post.Slug)),
    fallback: "blocking"
  };
}
const RenderPost = ({ post, blocks = [] }) => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <p>Post: {slug}</p>

        <PostDate post={post} />
        <PostTitle post={post} enableLink={false} />
        <PostBody blocks={blocks} />
      </div>
    </div>
  );
};

export default RenderPost;
