import SizeTitle from "./SizeTitle";
import SelectableCountryItem from "./SelectableCountryItem";
import type { Country, resultsType, resultsObjectType } from "../../types";
import { predefinedColors } from "../../services";
import { Dispatch, SetStateAction } from "react";

interface IOnSelectProps {
  selectedCountry: string;
  setSelectedCountry: Dispatch<SetStateAction<string>>;
  currentColorIndex: number;
  setCurrentColorIndex: Dispatch<SetStateAction<number>>;

  code: string;
}
const onSelect = ({
  selectedCountry,
  setSelectedCountry,
  currentColorIndex,
  setCurrentColorIndex,
  code,
}: IOnSelectProps) => {
  const isSelectedAlready = selectedCountry === code;

  setSelectedCountry(isSelectedAlready ? "" : code);

  if (!isSelectedAlready) {
    setCurrentColorIndex((currentColorIndex + 1) % predefinedColors.length);
  }
};

interface IRenderCountriesArrayProps {
  results: resultsType;
  selectedCountry: string;
  setSelectedCountry: Dispatch<SetStateAction<string>>;
  currentColorIndex: number;
  setCurrentColorIndex: Dispatch<SetStateAction<number>>;
}
export const RenderCountriesAsArray = ({
  results,
  selectedCountry,
  setSelectedCountry,
  currentColorIndex,
  setCurrentColorIndex,
}: IRenderCountriesArrayProps) => {
  if (Array.isArray(results))
    return (
      <>
        {results.map(({ code, name }: Country) => (
          <SelectableCountryItem
            key={code}
            name={name}
            backgroundColor={predefinedColors[currentColorIndex]}
            isSelected={selectedCountry === code}
            onSelect={() => {
              onSelect({
                selectedCountry,
                setSelectedCountry,
                currentColorIndex,
                setCurrentColorIndex,
                code,
              });
            }}
          />
        ))}
      </>
    );

  return null;
};

interface IRenderCountriesAsGroups {
  results: resultsObjectType | null;
  selectedCountry: string;
  setSelectedCountry: Dispatch<SetStateAction<string>>;
  currentColorIndex: number;
  setCurrentColorIndex: Dispatch<SetStateAction<number>>;
}
export const RenderCountriesAsGroups = ({
  results,
  selectedCountry,
  setSelectedCountry,
  currentColorIndex,
  setCurrentColorIndex,
}: IRenderCountriesAsGroups) => {
  if (!results) return null; 

  const elements = Object.entries(results).reduce(
    (acc: JSX.Element[], [size, countries]) => {
      acc.push(<SizeTitle key={size} size={size} />);
      acc.push(
        ...countries.map(({ code, name }) => (
          <SelectableCountryItem
            key={code}
            name={name}
            backgroundColor={predefinedColors[currentColorIndex]}
            isSelected={selectedCountry === code}
            onSelect={() =>
              onSelect({
                selectedCountry,
                setSelectedCountry,
                currentColorIndex,
                setCurrentColorIndex,
                code,
              })
            }
          />
        ))
      );
      return acc;
    },
    []
  );

  return <>{elements}</>;
};
