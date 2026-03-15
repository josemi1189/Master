import React, { useState } from "react";

interface SearchContext {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchContext = React.createContext<SearchContext>({
  filter: "",
  setFilter: () => {},
});

export const SearchProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [filter, setFilter] = useState("lemoncode");

  return (
    <SearchContext.Provider value={{ filter, setFilter }}>
      {children}
    </SearchContext.Provider>
  );
};
