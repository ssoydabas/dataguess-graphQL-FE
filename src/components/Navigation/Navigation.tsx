import { useSearch } from "../../services";

export default function Navigation() {
  const { query, setQuery } = useSearch();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    if (value && !value.startsWith("search:")) {
      value = "search:" + value;
    }

    if (value.endsWith(" ")) {
      value = value.trim() + " group:";
    }

    setQuery(value);
  };

  return (
    <nav className="flex justify-between items-center w-full h-16 bg-blue-500 text-white px-24">
      <div className="font-bold text-xl">
        Dataguess Frontend Development Task
      </div>

      <div className="w-2/6">
        <label htmlFor="searchInput" className="sr-only">
          Search
        </label>

        <input
          type="text"
          value={query}
          onChange={handleInputChange}
          placeholder="Search..."
          className="w-full p-2 px-12 rounded-xl text-black"
        />
      </div>
    </nav>
  );
}
