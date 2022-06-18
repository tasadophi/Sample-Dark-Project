import "./App.css";
import MenuItem from "./components/MenuItem";
import { useState } from "react";
import NavItem from "./components/NavItem";
import menuItems from "./utils/getMenuItems";
import navItems from "./utils/getNavItems";

function App() {
  const [menuItemProps, setMenuItemProps] = useState({
    showNav: true,
    selected: "Campaigns",
  });
  const [navSelected, setNavSelected] = useState("");

  return (
    <div className="bg-gray-200 w-screen flex flex-col h-screen px-4">
      <div className="container bg-gray-50 rounded-md shadow mt-4">
        <div className="flex gap-4 text-base p-2 border-b border-gray-400">
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
        </div>
        <div
          className={`${
            menuItemProps.showNav ? "flex" : "hidden"
          } p-2 gap-2 flex-wrap`}
        >
          {navItems.map((item) => (
            <NavItem
              key={item.id}
              name={item.name}
              navSelected={navSelected}
              setNavSelected={setNavSelected}
            >
              {item.icon}
            </NavItem>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
