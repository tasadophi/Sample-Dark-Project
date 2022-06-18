import React, { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode, MdDesktopWindows } from "react-icons/md";
const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("system");
  const root = window.document.documentElement;

  const changeTheme = (theme) => {
    if (theme === "light") {
      root.classList.remove("dark");
    } else if (theme === "dark") {
      root.classList.add("dark");
    } else {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches)
        root.classList.add("dark");
      else root.classList.remove("dark");
    }
  };

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme") || theme;
    setTheme(currentTheme);
    changeTheme(currentTheme);
  }, []);

  const changeThemeHandler = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      changeTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
      localStorage.setItem("theme", "system");
      changeTheme("system");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
      changeTheme("light");
    }
  };

  return (
    <div
      className="bg-gray-200 p-4 w-fit h-fit rounded-full cursor-pointer text-xl dark:bg-slate-700 dark:text-white"
      onClick={changeThemeHandler}
    >
      {theme === "light" ? (
        <MdLightMode />
      ) : theme === "dark" ? (
        <MdDarkMode />
      ) : (
        <MdDesktopWindows />
      )}
    </div>
  );
};

export default React.memo(ThemeSwitcher);
