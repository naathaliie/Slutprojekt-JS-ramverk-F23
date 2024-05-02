import { createContext, Dispatch, SetStateAction } from "react";
import { GlobalSearchState, initialSearchState } from "../../types/types";

interface SearchContextType {
  globalSearchState: GlobalSearchState;
  setGlobalSearchState: Dispatch<SetStateAction<GlobalSearchState>>;
}

export const SearchContext = createContext<SearchContextType>({
  globalSearchState: initialSearchState,
  setGlobalSearchState: () => {},
});
