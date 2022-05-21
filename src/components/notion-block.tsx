import React from "react";
const RichText = ({ richText }) => {
  let element = richText.Text.Content;
  return element;
};

const Paragraph = ({ block }) => (
  <p>
    {block.Paragraph.RichTexts.map((richText, i) => (
      <RichText richText={richText} key={`paragraph-${block.Id}-${i}`} />
    ))}
  </p>
);

const NotionBlock = ({ block }) => {
  if (block.Type === "paragraph") {
    return <Paragraph block={block} />;
  }
  return null;
};
export default NotionBlock;
