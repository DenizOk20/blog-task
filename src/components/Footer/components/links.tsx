import Link from "next/link";
import React from "react";

type LinkItem = {
  name: string;
  href: string;
};

export default function FooterLinks() {
  const QuickLinks: LinkItem[] = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog?title=Blog List" },
    { name: "Achieve", href: "/" },
    { name: "Author", href: "/" },
    { name: "Contact", href: "/" },
  ];

  const Category: LinkItem[] = [
    { name: "Lifestyle", href: "/" },
    { name: "Technology", href: "/" },
    { name: "Travel", href: "/" },
    { name: "Business", href: "/" },
    { name: "Economy", href: "/" },
    { name: "Sports", href: "/" },
  ];

  return (
    <div className="flex gap-20 justify-center w-[487px] font-plus">
      <div className="flex flex-col gap-6">
        <h2 className="font-semibold">Quick Link</h2>
        <div className="flex flex-col gap-2">
          {QuickLinks.map((link) => (
            <Link key={link.name} href={link.href} className="dark:text-text-dark">{link.name}</Link>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <h2 className="font-semibold font-plus">Category</h2>
        <div className="flex flex-col gap-2">
        {Category.map((cat) => (
            <Link key={cat.name} href={cat.href} className="dark:text-text-dark">{cat.name}</Link>
          ))}
        </div>
      </div>
    </div>
  );
}
