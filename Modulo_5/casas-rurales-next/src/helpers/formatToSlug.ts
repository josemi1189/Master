export const formatToSlug = (name: string) => {
  return name.replaceAll(" ", "-").toLowerCase();
};
