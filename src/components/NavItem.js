import React from "react";

const NavItem = ({ name, children, props }) => {
  const clickHandler = () => {
    const colors = {
      "Google Drive": "bg-red-500",
      Hubspot: "bg-yellow-500",
      Pipedrive: "bg-navHoverColor",
    };
    setNavSelected(name);
    setContent(name);
    setContentColor(colors[name]);
  };

  const { navSelected, setNavSelected, setContent, setContentColor } = props;

  const defaultStyle =
    navSelected === name ? "bg-navHoverColor dark:bg-slate-500" : "bg-white";

  return (
    <div
      className={`${defaultStyle} flex gap-2 p-2 flex-grow rounded-md shadow-lg items-center cursor-pointer hover:bg-navHoverColor dark:hover:bg-slate-500 dark:bg-slate-700 dark:text-white`}
      onClick={clickHandler}
    >
      <span>{children}</span>
      {name}
    </div>
  );
};

export default React.memo(NavItem);
