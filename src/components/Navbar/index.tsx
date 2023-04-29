import { useRef, useEffect, useState } from "react";
import "./navbar.scss";
import NavList from "~/data/NavList";
import Button from "../Button";
import logoW from "~/assets/images/LogoW.png";
import githubLogo from "~/assets/images/technologies/github.svg";

import { ButtonSizes } from "~/utils/enums";
import { Link } from "react-router-dom";

const Navbar = () => {
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
    <nav ref={navRef}>
      <div>
        <div className="logo">
          <img src={logoW} alt="Logo" />
          <div>mir</div>
        </div>
        <button
          className="menu_toggler"
          onClick={() => {
            setOsOpen(!isOpen);
          }}
        >
          <svg
            stroke="currentColor"
            fill="none"
            strokeWidth="2"
            viewBox="0 0 24 24"
            aria-hidden="true"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 8h16M4 16h16"
            ></path>
          </svg>
        </button>
        <div className={`menu ${isOpen ? "isOpen" : ""}`}>
          {NavList.map((menu_item, index) => {
            return (
              <Link
                key={index}
                to={menu_item.to}
                onClick={() => {
                  setOsOpen(false);
                }}
              >
                {menu_item.name}
              </Link>
            );
          })}
          <Button
            className="!w-fit mt-10 lg:m-0"
            icon={<img src={githubLogo} alt="githubLogo" />}
            size={ButtonSizes.Small}
          >
            Github
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
