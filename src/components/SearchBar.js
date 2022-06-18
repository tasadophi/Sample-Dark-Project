import React from "react";
import { FaSearch } from "react-icons/fa";
const SearchBar = ({ setContent, setContentColor, setNavSelected }) => {
  const changeHandler = (e) => {
    setContent(e.target.value);
    setNavSelected("settings");
    setContentColor("bg-blue-500");
  };
  return (
    <div className="bg-white flex items-center rounded-md border border-gray-200 shadow-md w-full">
      <span className="p-2">{<FaSearch />}</span>
      <input
        type="text"
        className="outline-none border-none p-2 w-full"
        placeholder="Search"
        onChange={changeHandler}
      />
    </div>
  );
};

export default React.memo(SearchBar);
