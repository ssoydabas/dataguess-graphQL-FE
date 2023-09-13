import { useState } from "react";
import { useGetCountries, useAutoSelectItem } from "../../hooks";

import {
  RenderCountriesAsArray,
  RenderCountriesAsGroups,
} from "./CountriesRenderers";

export default function CountriesList() {
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const { loading, error, results } = useGetCountries();

  useAutoSelectItem({ results, setSelectedCountry });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="w-4/6 h-5/6 mx-auto my-4 px-6 py-12 rounded-xl overflow-y-auto border">
      {Array.isArray(results) ? (
        <RenderCountriesAsArray
          results={results}
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
          currentColorIndex={currentColorIndex}
          setCurrentColorIndex={setCurrentColorIndex}
        />
      ) : (
        <RenderCountriesAsGroups
          results={results}
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
          currentColorIndex={currentColorIndex}
          setCurrentColorIndex={setCurrentColorIndex}
        />
      )}
    </div>
  );
}
