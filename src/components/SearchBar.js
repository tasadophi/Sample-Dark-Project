import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
const SearchBar = ({ props }) => {
  const [value, setValue] = useState("");
  const changeHandler = (e) => {
    setContent(e.target.value);
    setNavSelected("search");
    setContentColor("bg-blue-500");
    setValue(e.target.value);
  };

  const { navSelected, setContent, setContentColor, setNavSelected } = props;

  useEffect(() => {
    if (navSelected !== "search" && value.length) setValue("");
  }, [navSelected]);

  return (
    <div className="bg-white flex items-center rounded-md border border-gray-200 shadow-md w-full">
      <span className="p-2">{<FaSearch />}</span>
      <input
        type="text"
        value={value}
        className="outline-none border-none p-2 w-full"
        placeholder="Search"
        onChange={changeHandler}
      />
    </div>
  );
};

export default React.memo(SearchBar);
