import styles from "../styles/page.module.css";
const AboutPage = () => {
  return (
    <div className={styles.container}>
      <h2>About page</h2>
      <br />
      <h3>API routing TEST</h3>
      <form action="/api/form" method="post">
        <label htmlFor="first">First name:</label>
        <input type="text" id="first" name="first" />
        <br />
        <label htmlFor="last">Last name:</label>
        <input type="text" id="last" name="last" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
export default AboutPage;
