"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";

type LinkItem = {
  name: string;
  href: string;
  onClick?: () => void;
};

export const NavLinks = ({ session }) => {
  
  const handleSignOut = async () => {
    await signOut({redirectTo:"/"});
  };

  const links: LinkItem[] = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog?title=Blog List" },
    { name: "Single Post", href: "/single-post" },
    { name: "Pages", href: "/pages" },
    session
      ? { name: "Logout", href: "/", onClick: handleSignOut }
      : { name: "Login", href: "/login" },
  ];

  return (
    <div className="flex flex-col gap-3 md:flex-row md:gap-[28px] lg:gap-[40px]">
      {links.map((link, index) => (
        <div key={index} className="link-wrapper">
          {link.onClick ? (
            <button
              className="link"
              onClick={link.onClick}
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              {link.name}
            </button>
          ) : (
            <Link className="link" href={link.href}>
              {link.name}
            </Link>
          )}
        </div>
      ))}
    </div>
  );
};
