import { ReactNode, useState } from "react";
import { initialSearchState } from "../../types/types";
import { SearchContext } from "./SearchContext";

type SearchContextProviderProps = {
  children: ReactNode;
};

const SearchContextProvider = ({ children }: SearchContextProviderProps) => {
  const [globalSearchState, setGlobalSearchState] =
    useState(initialSearchState);

  return (
    <SearchContext.Provider value={{ globalSearchState, setGlobalSearchState }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
