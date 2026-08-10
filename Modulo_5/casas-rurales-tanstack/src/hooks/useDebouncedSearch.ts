import React from "react";
import { useDebounce } from "use-debounce";

export const useDebouncedSearch = () => {
  const [search, setSearch] = React.useState<string>("");
  const [filterDebounce] = useDebounce(search, 500);

  return { search, setSearch, filterDebounce };
};
