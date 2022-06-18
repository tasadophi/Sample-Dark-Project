const NavItem = ({ name, children, navSelected, setNavSelected }) => {
  const clickHandler = () => {
    setNavSelected(name);
  };

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
