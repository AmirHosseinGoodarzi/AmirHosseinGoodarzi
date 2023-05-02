import { useContext } from "react";
import { ReactComponent as Moon } from "~/assets/images/icons/moon.svg";
import { ReactComponent as Sun } from "~/assets/images/icons/sun.svg";
import { ThemeContext } from "~/context/ThemeContext";
import { THEMES } from "~/utils/enums";

const ThemeSelector = () => {
  const { currentTheme, setCurrentTheme } = useContext(ThemeContext);
  return (
    <div className="theme_selector">
      <button
        className={currentTheme === THEMES.DARK ? "active" : ""}
        onClick={() => {
          setCurrentTheme(THEMES.DARK);
        }}
      >
        <Moon />
      </button>
      <button
        className={currentTheme === THEMES.LIGHT ? "active" : ""}
        onClick={() => {
          setCurrentTheme(THEMES.LIGHT);
        }}
      >
        <Sun />
      </button>
    </div>
  );
};

export default ThemeSelector;
