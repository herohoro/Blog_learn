import { PostDate, PostTitle, PostExcerpt } from "../../components/blog-parts";
import styles from "../../styles/blog.module.css";
import { getPosts } from "../../lib/client";

export async function getStaticProps() {
  // clientにある関数を変数にして扱いやすくする
  const posts = await getPosts();

  return {
    props: { posts },
    revalidate: 60
  };
}

const RenderPosts = ({ posts = [] }) => {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <p>***main-content***</p>
        <h2>BlogList page</h2>
        <br />
        {""}
        <section>
          <div>
            {/* 変数postsを1つの塊ごと取り出していく */}
            {posts.map((post) => {
              return (
                <div key={post.Date}>
                  <PostDate post={post} />
                  <PostTitle post={post} />
                  <PostExcerpt post={post} />
                </div>
              );
            })}
          </div>
        </section>
        <br />
      </div>
      <div className={styles.subContent}>
        <p>***sub-content***</p>
      </div>
    </div>
  );
};
export default RenderPosts;
