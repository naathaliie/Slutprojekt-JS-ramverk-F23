import { createContext } from "react";
import { GlobalSearchState, initialSearchState } from "../../types/types";

const SearchContext = createContext<{
  state: GlobalSearchState; // den initiala typen
  dispatch: React.Dispatch<Action>;
}>({
  state: initialSearchState, // Det initiala värdet
  dispatch: () => null, // Standardfunktion som inte gör något
});
