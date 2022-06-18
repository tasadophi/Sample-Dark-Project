const MenuItem = ({ name, children, props, setProps }) => {
  const clickHandler = () => {
    if (name === "Campaigns")
      setProps({ ...props, showNav: true, selected: "Campaigns" });
    else setProps({ ...props, showNav: false, selected: "Settings" });
  };

  const defaultStyle =
    props.selected === name ? "bg-menuHoverColor text-white" : "";

  return (
    <div
      className={`${defaultStyle} p-2 flex gap-1 items-center cursor-pointer rounded-md hover:bg-menuHoverColor hover:text-white`}
      onClick={clickHandler}
    >
      <span className="text-xl">{children}</span>
      {name}
    </div>
  );
};

export default MenuItem;
