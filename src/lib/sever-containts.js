//環境変数は【.env.local】ファイルに記述
//code sandboxは サイドバーの[Sever Control Panel] から「Secret Keys」に設定する場所がある
const NOTION_API_SECRET = process.env.NOTION_API_SECRET;
const DATABASE_ID = process.env.DATABASE_ID;

module.exports = {
  NOTION_API_SECRET,
  DATABASE_ID
};
