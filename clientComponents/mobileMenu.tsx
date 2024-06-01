"use client";

import { MobileMenuIcon } from "@/lib/all_icons";
import React, { useEffect, useState } from "react";
import NavLinks from "./navLinks";
import { NavLinksData } from "@/contants";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className="relative cursor-pointer "
        onClick={() => setIsOpen(!isOpen)}
      >
        <MobileMenuIcon className="text-[20px] " />
      </div>
      <div
        className={`fixed top-0  ${
          isOpen ? "right-0" : "-right-[100%]"
        } z-20 h-screen bg-white w-full flex items-center duration-200`}
      >
        <div
          className="absolute top-0 right-0 mt-6 mr-5 z-[25] cursor-pointer "
          onClick={() => setIsOpen(!isOpen)}
        >
          <MobileMenuIcon className="text-[20px] " />
        </div>
        <ul className="w-full">
          {NavLinksData.map((link, index) => (
            <li
              key={index}
              className="border-b px-5 py-3 border-gray-300 last-of-type:border-none"
              onClick={() => setIsOpen(false)}
            >
              <NavLinks
                href={link.href}
                text={link.text}
                linkType={link.linkType}
                className="text-[15px] font-medium"
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default MobileMenu;
