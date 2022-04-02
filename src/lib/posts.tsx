import fs from "fs";
import path from "path";
import matter from "gray-matter";
//current working directory
const postsDirectory = path.join(process.cwd(), "posts");

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    // テキストデータ内上部にある「　---」で囲まれた部分をdataとして位置づけて取得する
    const matterResult = matter(fileContents);

    // Combine the data with the id
    // Combine the data【---で囲まれた部分】 with the id【拡張子無しファイル名】
    return {
      id,
      ...(matterResult.data as { date: string; title: string })
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
