import styles from "../../styles/blog.module.css";
const RenderPosts = () => {
  return (
    <div className={styles.container}>
      <div className={styles.mainContent}>
        <p>***main-content***</p>
        <h2>BlogList page</h2>
        <br />
        {""}
        <br />
      </div>
      <div className={styles.subContent}>
        <p>***sub-content***</p>
      </div>
    </div>
  );
};
export default RenderPosts;
