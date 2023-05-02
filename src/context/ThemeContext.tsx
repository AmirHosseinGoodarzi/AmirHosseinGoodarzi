import { createContext, useState, useEffect } from "react";
import { THEMES } from "~/utils/enums";

export const ThemeContext = createContext<any>(null);

const ThemeContextProvider = ({ children }: { children: any }) => {
  const [currentTheme, setCurrentTheme] = useState<THEMES | null>(null);
  useEffect(() => {
    const storedTheme = localStorage.getItem("data-theme");
    if (storedTheme) {
      setCurrentTheme(storedTheme as THEMES);
    } else {
      setCurrentTheme(THEMES.DARK);
    }
  }, []);
  useEffect(() => {
    if (currentTheme) {
      localStorage.setItem("data-theme", currentTheme);
      const opp = currentTheme === THEMES.DARK ? "light" : "dark";
      document.documentElement.classList.remove(opp);
      document.documentElement.classList.add(currentTheme.toLowerCase());
    }
  }, [currentTheme]);
  return (
    <ThemeContext.Provider value={{ currentTheme, setCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
