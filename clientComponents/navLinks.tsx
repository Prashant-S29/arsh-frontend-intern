"use client";

import React, { useState } from "react";
import Link from "next/link";
import { NavLinkType } from "@/types/Navlink";

type NewNavLinksProps = NavLinkType & { className?: string };

const NavLinks = ({ href, text, linkType, className }: NewNavLinksProps) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      {linkType === "link" ? (
        <div
          onMouseEnter={() => setIsActive(true)}
          onMouseLeave={() => setIsActive(false)}
        >
          <div>
            <Link href={href} className={className}>
              {text}
            </Link>
          </div>
          <div className={`${isActive ? "justify-start" : "justify-end"} flex`}>
            <div
              className={`${
                isActive ? "w-full " : "w-0"
              } duration-200 h-[0.5px] bg-black`}
            />
          </div>
        </div>
      ) : (
        <div>
          <Link
            href={href}
            className="px-5 py-3 bg-orange-500 text-white font-medium text-[14px] rounded-full"
          >
            {text}
          </Link>
        </div>
      )}
    </>
  );
};

export default NavLinks;
