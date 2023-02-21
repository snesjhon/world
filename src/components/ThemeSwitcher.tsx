import { useState } from "react";
import { FiSun } from "react-icons/fi";

export function ThemeSwitcher() {
  const isDark = !window
    ? "light"
    : window.matchMedia("(prefers-color-scheme:dark)").matches;
  const [toggleLight, setToggleLight] = useState(!isDark);

  const toggleTheme = (theme: "light" | "dark") => {
    const htmlTag = document.getElementsByTagName("html")[0];
    if (theme === "light") {
      htmlTag.setAttribute("data-theme", "light");
      setToggleLight(true);
    } else {
      htmlTag.setAttribute("data-theme", "dark");
      setToggleLight(false);
    }
  };

  return (
    <a
      style={{ cursor: "pointer" }}
      onClick={() => toggleTheme(toggleLight ? "dark" : "light")}
    >
      <FiSun />
    </a>
  );
}
