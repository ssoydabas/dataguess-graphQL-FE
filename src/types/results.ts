import { Country } from "./country";

export type resultsType = Country[] | Record<string, Country[]> | null;

export interface resultsObjectType {
  [key: string]: Country[];
}
