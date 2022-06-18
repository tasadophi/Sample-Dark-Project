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

  const defaultStyle = navSelected === name ? "bg-navHoverColor" : "";

  return (
    <div
      className={`${defaultStyle} flex gap-2 p-2 flex-grow rounded-md shadow-md items-center cursor-pointer bg-white hover:bg-navHoverColor`}
      onClick={clickHandler}
    >
      <span>{children}</span>
      {name}
    </div>
  );
};

export default NavItem;
