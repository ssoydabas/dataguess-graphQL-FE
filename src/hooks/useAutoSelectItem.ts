import { Dispatch, SetStateAction, useCallback, useEffect } from "react";
import { resultsType } from "../types";

interface IUseAutoSelectItemProps {
  results: resultsType;
  setSelectedCountry: Dispatch<SetStateAction<string>>;
}

export default function useAutoSelectItem({
  results,
  setSelectedCountry,
}: IUseAutoSelectItemProps) {
  const autoSelectItem = useCallback(() => {
    if (!results) return;

    let selectedItem;
    if (Array.isArray(results)) {
      selectedItem = results[9] || results[results.length - 1];
    } else {
      const flatResults = Object.values(results).flat(1);
      selectedItem = flatResults[9] || flatResults.slice(-1)[0];
    }

    setSelectedCountry(selectedItem?.code || "");
  }, [results, setSelectedCountry]);

  useEffect(() => {
    autoSelectItem();
  }, [autoSelectItem]);
}
