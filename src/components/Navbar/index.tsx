import { useRef, useEffect } from "react";
import "./navbar.scss";
import NavList from "~/data/NavList.json";
import Button from "../Button";
import logoW from "~/assets/images/LogoW.png";
import githubLogo from "~/assets/images/technologies/github.svg";
import { Link } from "react-scroll";
import { ButtonSizes } from "~/utils/enums";

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
      <div className="logo">
        <img src={logoW} alt="Logo" />
        <div>mir</div>
      </div>
      <ul>
        {NavList.map((menu_item, index) => {
          return (
            <li key={index}>
              <Link activeClass="active" to={menu_item.href}>
                {menu_item.name}
              </Link>
            </li>
          );
        })}
      </ul>
      <Button
        className="text-sm"
        icon={<img src={githubLogo} alt="githubLogo" />}
        size={ButtonSizes.Small}
      >
        Github
      </Button>
    </nav>
  );
};

export default Navbar;
