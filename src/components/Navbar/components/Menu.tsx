import React, { useState } from "react";
import SearchInput from "./SearchInput";
import { NavLinks } from "./NavLinks";
import Image from "next/image";
import { Session } from "next-auth";

export const NavMenu = ({session} : {session: Session | null}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden relative">
      <button
        onClick={toggleMenu}
        aria-label="Toggle menu"
        className="p-2 focus:outline-none dark:bg-white"
      >
        <Image src="/menu.png" alt="Menu Icon" width={24} height={24} />
      </button>

      {/* Açılır Menü */}
      {isOpen && (
        <div className="absolute flex flex-col gap-3 top-full right-0 w-[60vw] bg-white dark:bg-gray-800 shadow-lg rounded-lg p-4 z-50">
         <SearchInput/>
          <NavLinks session={session} />
        </div>
      )}
    </div>
  );
};
