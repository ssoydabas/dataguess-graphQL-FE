import type { Country } from "../../types/country";

export default function mockCountrySize(country: Country): string {
  const length = country.name.length;
  if (length <= 5) return "small";
  if (length <= 10) return "medium";
  return "large";
}
