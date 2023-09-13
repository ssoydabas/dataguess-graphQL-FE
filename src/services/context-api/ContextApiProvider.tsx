import { useState, type FC } from "react";
import SearchContext from "./SearchContext";

interface SearchProviderProps {
  children: React.ReactNode;
}

const ContextApiProvider: FC<SearchProviderProps> = ({ children }) => {
  const [query, setQuery] = useState<string>("");

  return (
    <SearchContext.Provider value={{ query, setQuery }}>
      {children}
    </SearchContext.Provider>
  );
};

export default ContextApiProvider;
