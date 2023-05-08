import { useRef, useEffect, useState, useContext } from "react";
import "./navbar.scss";
import NavList from "~/data/NavList";
import { ButtonSizes, THEMES } from "~/utils/enums";
import Button from "../Button";
import ThemeSelector from "../ThemeSelector";
import { ThemeContext } from "~/context/ThemeContext";
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as Github } from "~/assets/images/icons/github.svg";
import { ReactComponent as Menu } from "~/assets/images/icons/menu.svg";
import { ReactComponent as CloseMenu } from "~/assets/images/icons/closeMenu.svg";
import logoW from "~/assets/images/LogoW.png";
import logoB from "~/assets/images/LogoB.png";

const Navbar = () => {
  const location = useLocation();
  const { currentTheme } = useContext(ThemeContext);
  const navRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setOsOpen] = useState(false);
  const navbarListener = () => {
    const navbar = navRef.current;
    if (!navbar) return;
    if (window.scrollY > navbar.offsetHeight) {
      navbar.classList.add("isSticky");
    } else {
      navbar.classList.remove("isSticky");
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", navbarListener);
    return () => {
      window.removeEventListener("scroll", navbarListener);
    };
  }, []);

  return (
    <nav ref={navRef} className={isOpen ? "isOpen" : ""}>
      <div>
        <div className="logo">
          <img src={currentTheme === THEMES.DARK ? logoW : logoB} alt="Logo" />
          <div>mir</div>
        </div>
        <button
          className="menu_toggler"
          onClick={() => {
            setOsOpen(!isOpen);
          }}
        >
          {isOpen ? <CloseMenu />  : <Menu />}
        </button>
        <div className="menu">
          {NavList.map((menu_item, index) => {
            return (
              <Link
                key={index}
                to={menu_item.to}
                className={location.pathname === menu_item.to ? "active" : ""}
                onClick={() => {
                  setOsOpen(false);
                }}
              >
                {menu_item.name}
              </Link>
            );
          })}
          <ThemeSelector />
          <a href="https://github.com/AmirHosseinGoodarzi" target="_blank">
            <Button
              className="!w-fit mt-10 lg:m-0"
              icon={<Github />}
              size={ButtonSizes.Small}
            >
              Github
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
