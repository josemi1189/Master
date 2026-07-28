export const useSearch = () => {
  const textSearch = ref("");

  const updateSearch = (text: string) => {
    textSearch.value = text.toLowerCase();
  };
  return { textSearch, updateSearch };
};
