//型定義
import { Post } from "./interfaces";
//環境変数
import { NOTION_API_SECRET, DATABASE_ID } from "./sever-containts";

const { Client } = require("@notionhq/client");

const client = new Client({
  auth: NOTION_API_SECRET
});

export async function getPosts() {
  const params = {
    database_id: DATABASE_ID
  };
  // dataにnotionDBの情報を丸っと放り投げる
  const data = await client.databases.query(params);
  // 列名ごと必要な情報を残していく
  return data.results.map((item) => _buildPost(item));
}

function _buildPost(data) {
  const prop = data.properties;
  const post: Post = {
    PageId: data.id,
    // keyは列名 valueはproperty value object
    // property value objectは「property item object」のリファレンス参照
    Title: prop.Title.title[0].plain_text,
    Excerpt: prop.Excerpt.rich_text[0].plain_text,
    Date: prop.Date.date.start
  };
  //post.PageId
  //post.Title
  //post.Excerpt
  //post.Date
  return post;
  //postに収納
}
