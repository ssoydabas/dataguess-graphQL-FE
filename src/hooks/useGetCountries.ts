import { useMemo } from "react";
import { useSearch } from "../services";
import { useQuery, gql } from "@apollo/client";
import filterAndGroup from "../services/query/filterAndGroup";

const GET_COUNTRIES = gql`
  {
    countries {
      code
      name
    }
  }
`;

export default function useGetCountries() {
  const { query } = useSearch();
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  const results = useMemo(() => {
    if (!loading && !error && data) {
      return filterAndGroup(data, query);
    }
    return null;
  }, [query, loading, error, data]);

  return {
    loading,
    error,
    results,
  };
}
