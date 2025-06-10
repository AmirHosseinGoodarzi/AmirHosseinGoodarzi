"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Github from "@/components/svgr-icons/github.svg";
import Menu from "@/components/svgr-icons/menu.svg";
import CloseMenu from "@/components/svgr-icons/close-menu.svg";
import ROUTES_OBJECT from "@/utils/RoutesObject";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const navbarData = [
  { name: "About Me", to: ROUTES_OBJECT.home },
  { name: "Skills", to: ROUTES_OBJECT.skills },
  { name: "Portfolio", to: ROUTES_OBJECT.portfolio },
  { name: "Certificates", to: ROUTES_OBJECT.certificates },
  { name: "Contact Me", to: ROUTES_OBJECT.contact },
];

const Navbar = () => {
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav
      ref={navRef}
      className="fixed w-full top-0 py-3 z-50 transition-all border-b border-transparent bg-transparent text-lg lg:text-base border-secondary-dark-200 bg-[rgba(0,0,0,0.6)] backdrop-blur-sm"
    >
      <div className="w-[90%] xl:w-[70%] flex items-center justify-between mx-auto">
        <div className="flex items-center justify-center text-white">
          <Image
            src="/assets/images/logo.png"
            width={50}
            height={35}
            alt="Logo"
            className="w-12 h-auto -mr-2"
          />
          <div className="text-xl font-bold">mir</div>
        </div>
        <button
          className="lg:hidden text-4xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <CloseMenu /> : <Menu />}
        </button>
        <div
          className={cn(
            "hidden lg:flex items-center justify-center gap-6 lg:gap-3",
            isOpen &&
              "fixed flex flex-col w-full left-0 top-[61px] h-[calc(100vh-61px)] p-5 bg-[rgba(0,0,0,0.96)]"
          )}
        >
          {navbarData.map((menu_item, index) => (
            <Link
              key={index}
              href={menu_item.to}
              className={cn(
                "px-2 py-1 hover:text-gray-200 transition-all cursor-pointer",
                pathname === menu_item.to &&
                  "text-white font-bold cursor-default"
              )}
              onClick={() => setIsOpen(false)}
            >
              {menu_item.name}
            </Link>
          ))}
          <a href="https://github.com/AmirHosseinGoodarzi" target="_blank">
            <Button className="mt-10 lg:m-0">
              <Github />
              Github
            </Button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
