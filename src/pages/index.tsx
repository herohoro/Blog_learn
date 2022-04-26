import styles from "../styles/page.module.css";

import { getSortedPostsData } from "../lib/posts";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
};

export default function RenderPage({
  allPostsData
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) {
  return (
    <div className={styles.container}>
      <div>
        <h2>Home page</h2>
        <p>branch 10_csb-oek04h</p>
        <code>
          ... making like easy-notion-blog
          <br />
          slug_read_route_pagenation
        </code>
      </div>
      <section>
        <h3>verse data</h3>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
