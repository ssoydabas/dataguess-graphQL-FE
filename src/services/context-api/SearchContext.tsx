import { createContext } from "react";
import type { SearchContextProps } from "./types";

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

export default SearchContext;
