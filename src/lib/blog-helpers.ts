export const getDateStr = (date) => {
  const dt = new Date(date);
  const y = dt.getFullYear();
  const m = ("00" + (dt.getMonth() + 1)).slice(-2);
  const d = ("00" + dt.getDate()).slice(-2);
  return y + "-" + m + "-" + d;
};
export const getBlogLink = (slug: string) => {
  return `/blog/${slug}`;
};
