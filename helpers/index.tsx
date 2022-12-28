export const getObjFromLink = (link: string) => {
  const sep = link?.indexOf("__");
  const id = link?.substring(0, sep);
  const name = link?.substring(sep + 2);
  return { id, name };
};
