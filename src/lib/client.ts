//型定義
import { Post, Block, Paragraph, RichText, Text } from "./interfaces";
//環境変数
import { NOTION_API_SECRET, DATABASE_ID } from "./sever-containts";

const { Client } = require("@notionhq/client");

const client = new Client({
  auth: NOTION_API_SECRET
});
function _buildPost(data) {
  const prop = data.properties;
  const post: Post = {
    PageId: data.id,
    // keyは列名 valueはproperty value object
    // property value objectは「property item object」のリファレンス参照
    Title: prop.Title.title[0].plain_text,
    Excerpt: prop.Excerpt.rich_text[0].plain_text,
    Date: prop.Date.date.start,
    Slug: prop.Slug.rich_text[0].plain_text
  };
  return post;
  //postに収納
}
export async function getAllPosts() {
  let results = [];
  const params = {
    database_id: DATABASE_ID,
    page_size: 100
  };
  // while (true) {
  const data = await client.databases.query(params);
  results = results.concat(data.results);
  params["start_cursor"] = data.next_cursor;
  // }
  return results.map((item) => _buildPost(item));
}
export async function getPostBySlug(slug: string) {
  const data = await client.databases.query({
    database_id: DATABASE_ID,
    filter: {
      property: "Slug",
      rich_text: {
        equals: slug
      }
    }
  });
  return _buildPost(data.results[0]);
}
export async function getPosts() {
  const params = {
    database_id: DATABASE_ID
  };
  // dataにnotionDBの情報を丸っと放り投げる
  const data = await client.databases.query(params);
  // 列名ごと必要な情報を残していく
  return data.results.map((item) => _buildPost(item));
}
function _buildRichText(item) {
  const text: Text = {
    Content: item.text.content
  };

  const richText: RichText = {
    Text: text,
    PlainText: item.plain_text
  };
  return richText;
}
export async function getAllBlocksByBlockId(blockId) {
  let allBlocks: Block[] = [];
  const params = {
    block_id: blockId
  };
  // while (true) {
  const data = await client.blocks.children.list(params);

  const blocks = data.results.map((item) => {
    const block: Block = {
      Id: item.id,
      Type: item.type,
      HasChildren: item.has_children
    };
    switch (item.type) {
      case "paragraph":
        const paragraph: Paragraph = {
          RichTexts: item.paragraph.rich_text.map(_buildRichText)
        };
        block.Paragraph = paragraph;
        break;
      default:
        console.log("失敗....");
    }

    return block;
  });
  allBlocks = allBlocks.concat(blocks);
  // if (!data.has_more) {
  //   break;
  // }
  params["start_cursor"] = data.next_cursor;
  // }

  return allBlocks;
}
