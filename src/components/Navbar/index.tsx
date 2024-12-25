"use client"
import Image from "next/image";
import React from "react";
import ThemeToggle from "../ToggleButton";
import { NavLinks } from "./components/NavLinks";
import SearchInput from "./components/SearchInput";
import { NavMenu } from "./components/Menu";
import { useTheme } from "next-themes";
import { Session } from "next-auth";

function Navbar({session}:{session: Session | null}) {

  const {theme} = useTheme()
  const logoSrc = theme === "dark" ? "/dark-logo.png" : "/logo.png";
  
  return (
    <div className="flex justify-center flex-col gap-8 min-h-[100px] md:items-center w-[100%]">
      <div className="flex flex-row items-center justify-between md:gap-[70px] lg:gap-[116px] max-w-[1218px]">
        <div>
          <Image src={logoSrc} alt="MetaBlog" width={158} height={36} className="md:min-w-[112px] lg:min-w-[158px]" suppressHydrationWarning/>
        </div>
        <div className="hidden md:flex flex-row md:gap-[18px] lg:gap-[21px] w-[100%]">
          <div className="flex flex-row md:gap-[32px] lg:gap-[40px] xl:px-32">
            <NavLinks session={session}/>
          </div>
          <div className="flex items-center md:gap-[24px] lg:gap-[40px]">
             <SearchInput/>
            <div>
              <ThemeToggle/>
            </div>
          </div>
        </div>
        {/* mobile */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <NavMenu session={session}/>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
