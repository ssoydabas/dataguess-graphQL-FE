import parseQuery from "./parseQuery";
import mockCountrySize from "./mockCountrySize";
import type { IApiResponse } from "../../types/apiResponse";
import type { Country } from "../../types/country";

export default function filterAndGroup(data: IApiResponse, query: string) {
  const { searchTerm, groupBy } = parseQuery(query);

  let filteredCountries = data.countries.filter((country: Country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (!groupBy || groupBy !== "size") {
    return filteredCountries;
  }

  return filteredCountries.reduce(
    (groups: Record<string, Country[]>, country: Country) => {
      const size = mockCountrySize(country);
      if (!groups[size]) {
        groups[size] = [];
      }
      groups[size].push(country);
      return groups;
    },
    {}
  );
}
