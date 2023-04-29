import { useRef, useEffect } from "react";
import "./navbar.scss";
import NavList from "~/data/NavList";
import Button from "../Button";
import logoW from "~/assets/images/LogoW.png";
import githubLogo from "~/assets/images/technologies/github.svg";

import { ButtonSizes } from "~/utils/enums";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navRef = useRef<HTMLDivElement | null>(null);
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
    <nav ref={navRef}>
      <div>
        <div className="logo">
          <img src={logoW} alt="Logo" />
          <div>mir</div>
        </div>
        <ul>
          {NavList.map((menu_item, index) => {
            return (
              <li key={index}>
                <Link to={menu_item.to}>{menu_item.name}</Link>
              </li>
            );
          })}
          <Button
            className="text-sm"
            icon={<img src={githubLogo} alt="githubLogo" />}
            size={ButtonSizes.Small}
          >
            Github
          </Button>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
