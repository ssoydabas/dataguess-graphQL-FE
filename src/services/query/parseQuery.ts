type ParsedQuery = {
  searchTerm: string;
  groupBy: string | null;
};

export default function parseQuery(query: string): ParsedQuery {
  const commands = query.split(" ").reduce<ParsedQuery>(
    (acc, val) => {
      if (val.startsWith("search:")) {
        acc.searchTerm = val.replace("search:", "");
      } else if (val.startsWith("group:")) {
        acc.groupBy = val.replace("group:", "");
      }
      return acc;
    },
    { searchTerm: "", groupBy: null }
  );

  return commands;
}
