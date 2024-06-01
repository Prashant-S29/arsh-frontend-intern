import React from "react";
import Image from "next/image";

import NavLinks from "@/clientComponents/navLinks";
import { NavLinksData } from "@/contants";
import { arsh, icon } from "@/public";
import MobileMenu from "@/clientComponents/mobileMenu";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center p-5 bg-white z-30">
      {/* Dektop Nav menu */}
      <div className="hidden sm:block">
        <ul className="flex gap-5">
          {NavLinksData.map((link, index) => (
            <li key={index}>
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

      <div className="flex items-center gap-2">
        <div className="size-[30px] md:size-[40px] rounded-full bg-gray-300">
          <Image
            src={arsh}
            alt="Arsh"
            width={40}
            height={40}
            className="rounded-full"
            unoptimized
          />
        </div>
        <div className="size-[30px] md:size-[40px] rounded-full bg-gray-300">
          <Image
            src={icon}
            alt="Icon"
            width={40}
            height={40}
            className="rounded-full"
            unoptimized
          />
        </div>
      </div>

      {/* Mobile Nav menu */}
      <div className="block sm:hidden">
        <MobileMenu />
      </div>
      
    </div>
  );
};

export default Navbar;
