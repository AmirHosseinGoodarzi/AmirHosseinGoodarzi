//============== React & Next ================
import { useEffect } from "react";
//============== images & icons ==============
import { MoonFill, SunFill } from "react-bootstrap-icons";
//============== in components ===============
import { THEMES } from "utils/Constants";
//============== ex components ===============
//================= redux ====================
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "redux/themeSlice";
//============================================
function ThemeSelector() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.type);
  const changeTheme = () => {
    if (theme === THEMES.DARK) {
      dispatch(toggleTheme(THEMES.LIGHT));
      localStorage.setItem("data-theme", THEMES.LIGHT);
      document.documentElement.setAttribute("data-theme", THEMES.LIGHT);
    } else {
      dispatch(toggleTheme(THEMES.DARK));
      localStorage.removeItem("data-theme");
      document.documentElement.removeAttribute("data-theme");
    }
  };
  useEffect(() => {
    let t = localStorage.getItem("data-theme");
    if (t) {
      dispatch(toggleTheme(t));
      document.documentElement.setAttribute("data-theme", t);
    }
  }, []);
  return (
    <div
      className="fixed bottom-10 right-10 z-50 p-3 rounded-full cursor-pointer bg-main bg-opacity-60"
      onClick={changeTheme}
    >
      {theme === THEMES.DARK ? (
        <SunFill size="2em" color="#FFF" />
      ) : (
        <MoonFill size="2em" color="#111" />
      )}
    </div>
  );
}

export default ThemeSelector;
