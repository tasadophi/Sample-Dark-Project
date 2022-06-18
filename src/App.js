import "./App.css";
import { MdCampaign } from "react-icons/md";
import MenuItem from "./components/MenuItems";
import { useState } from "react";

function App() {
  const [menuItemProps, setMenuItemProps] = useState({
    showNav: true,
    selected: "Campaigns",
  });

  return (
    <div className="bg-gray-100 flex flex-col w-screen h-screen">
      <div className="bg-white rounded-md shadow m-4">
        <div className="flex gap-4 text-base p-2">
          <MenuItem
            name="Campaigns"
            props={menuItemProps}
            setProps={setMenuItemProps}
          >
            <MdCampaign />
          </MenuItem>
          <MenuItem
            name="Settings"
            props={menuItemProps}
            setProps={setMenuItemProps}
          >
            <MdCampaign />
          </MenuItem>
        </div>
        <div className={`${menuItemProps.showNav ? "block" : "hidden"}`}>
          Navbar
        </div>
      </div>
    </div>
  );
}

export default App;
