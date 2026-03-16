import React, { useState } from "react";
import { DEFAULT_ORG } from "../constants/constants";

interface SearchContext {
  organization: string;
  setOrganization: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchContext = React.createContext<SearchContext>({
  organization: "",
  setOrganization: () => {},
});

export const SearchProvider: React.FC<React.PropsWithChildren> = ({
  children,
}) => {
  const [organization, setOrganization] = useState<string>("");
  if (organization === "") {
    setOrganization(DEFAULT_ORG);
  }

  return (
    <SearchContext.Provider value={{ organization, setOrganization }}>
      {children}
    </SearchContext.Provider>
  );
};
