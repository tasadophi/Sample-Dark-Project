import React from "react";

const MenuItem = ({ name, children, props, setProps }) => {
  const clickHandler = () => {
    if (name === "Campaigns") {
      props.setContent("Campaigns");
      props.setContentColor("bg-navHoverColor");
      props.setNavSelected("campaigns");
      setProps({ ...props, showNav: true, selected: "Campaigns" });
    } else {
      props.setContent("Settings");
      props.setContentColor("bg-green-600");
      setProps({ ...props, showNav: false, selected: "Settings" });
    }
  };

  const defaultStyle =
    props.selected === name ? "bg-menuHoverColor text-white" : "";

  return (
    <div
      className={`${defaultStyle} p-2 flex gap-1 items-center cursor-pointer rounded-md hover:bg-menuHoverColor hover:text-white lg:px-6`}
      onClick={clickHandler}
    >
      <span className="text-xl">{children}</span>
      {name}
    </div>
  );
};

export default React.memo(MenuItem);
