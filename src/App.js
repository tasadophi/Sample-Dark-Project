import "./App.css";
import MenuItem from "./components/MenuItem";
import React, { useState } from "react";
import NavItem from "./components/NavItem";
import menuItems from "./utils/getMenuItems";
import navItems from "./utils/getNavItems";
import SearchBar from "./components/SearchBar";
import MainContent from "./components/MainContent";
import ThemeSwitcher from "./components/ThemeSwitcher";

function App() {
  const [menuItemProps, setMenuItemProps] = useState({
    showNav: true,
    selected: "Campaigns",
  });
  const [navSelected, setNavSelected] = useState("Google Drive");
  const [content, setContent] = useState("Google Drive");
  const [contentColor, setContentColor] = useState("bg-red-500");

  return (
    <div className="bg-gray-200 w-full min-h-screen p-4 lg:flex justify-center items-center dark:bg-slate-700">
      <div className="container bg-gray-50 rounded-md shadow block lg:flex lg:min-h-[32rem] dark:bg-slate-600">
        {/* Menu Items */}
        <div className="flex flex-wrap gap-4 text-base p-2 border-b border-gray-400 lg:flex-col lg:border-b-0 lg:border-r lg:py-10 lg:px-8 dark:text-white">
          {menuItems.map((item) => (
            <MenuItem
              key={item.id}
              name={item.name}
              props={menuItemProps}
              setProps={setMenuItemProps}
            >
              {item.icon}
            </MenuItem>
          ))}
          <ThemeSwitcher />
        </div>
        {/* wrapper divs for desktop ui */}
        <div className="lg:w-full pb-4 lg:flex flex-col items-center">
          <div className="lg:w-full lg:flex lg:p-8">
            {/* NavItems */}
            <div
              className={`${
                menuItemProps.showNav ? "flex" : "hidden"
              } p-2 gap-2 flex-wrap`}
            >
              {navItems.map((item) => (
                <NavItem
                  key={item.id}
                  name={item.name}
                  props={{
                    navSelected,
                    setNavSelected,
                    setContent,
                    setContentColor,
                  }}
                >
                  {item.icon}
                </NavItem>
              ))}
            </div>
            <div className="p-2 lg:ml-auto">
              <SearchBar
                props={{
                  navSelected,
                  setContent,
                  setContentColor,
                  setNavSelected,
                }}
              />
            </div>
          </div>
          <MainContent content={content} contentColor={contentColor} />
        </div>
      </div>
    </div>
  );
}

export default React.memo(App);
