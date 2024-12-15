"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect } from "react";


export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();// Varsayılan tema

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  return (
    <div className="flex flex-col justify-center items-center max-w-12">
      <div
        onClick={toggleTheme}
        className={`p-1 max-w-12 rounded-xl w-14 h-7 flex items-center justify-between relative cursor-pointer transition-colors
        ${theme === "dark" ? "bg-[#4B6BFB]" : "bg-[#E8E8EA]"}`}
      >
        <div className="flex items-center justify-center w-6 h-6">
          {theme === "light" && (
           <Image
           alt="sun"
           src="/sun.png"
           width={15}
           height={15}
           className={`z-10 w-[14px] h-[14px] mb-[1px] mr-[4px] transition-opacity`}
         />
          )}
        </div>

        <div
          className={`absolute w-5 h-5 bg-white rounded-full shadow transition-all ${
            theme === "dark" ? "right-1" : "left-1"
          }
          }`}
        ></div>

        {/* Sağ İkon (Güneş - Gündüz Modu) */}
        <div className="flex items-center justify-center w-5 h-5">
          {theme === "dark" && (
            <Image
              alt="sun"
              src="/sun.png"
              width={15}
              height={15}
              className={`z-10 w-[14px] h-[14px] mb-[1px] mr-1 transition-opacity`}
            />
          )}
        </div>
      </div>
    </div>
  );
}
