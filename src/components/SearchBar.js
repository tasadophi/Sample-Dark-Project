import { FaSearch } from "react-icons/fa";
const SearchBar = () => {
  return (
    <div className="bg-white flex items-center border border-gray-200 shadow-md w-full">
      <span className="p-2">{<FaSearch />}</span>
      <input
        type="text"
        className="outline-none border-none px-2 py-1 w-full"
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBar;
