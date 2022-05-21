export interface Post {
  PageId: string;
  Title: string;
  Excerpt: string;
  Date: string;
  Slug: string;
}
export interface Block {
  Id: string;
  Type: string;
  HasChildren: boolean;
  Paragraph?: Paragraph;
}

export interface Paragraph {
  RichTexts: RichText[];
  Children?: Block[];
}

export interface RichText {
  Text: Text;
  PlainText: string;
}
export interface Text {
  Content: string;
}
