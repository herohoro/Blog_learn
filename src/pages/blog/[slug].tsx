import { useRouter } from "next/router";
import { getPostBySlug, getAllPosts } from "../../lib/client";
import { getBlogLink } from "../../lib/blog-helpers";
import styles from "../../styles/blog.module.css";
// import { PostDate, PostTitle } from "../../components/blog-parts";

export async function getStaticProps({ params: { slug } }) {
  const post = await getPostBySlug(slug);
  return {
    props: { post },
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
const RenderPost = (post) => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <p>Post: {slug}</p>
      </div>
    </div>
  );
};

export default RenderPost;
