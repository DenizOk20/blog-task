import Link from 'next/link';
import React from 'react';

type LinkItem = {
  name: string;
  href: string;
};

export const NavLinks = () => {
  const links: LinkItem[] = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog?title=Blog List' },
    { name: 'Single Post', href: '/single-post' },
    { name: 'Pages', href: '/pages' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className='flex flex-col gap-3 md:flex-row md:gap-[28px] lg:gap-[40px]'>
      {links.map((link, index) => (
        <div key={index} className="link-wrapper">
          <Link className="link" href={link.href}>
            {link.name}
          </Link>
        </div>
      ))}
    </div>
  );
};
