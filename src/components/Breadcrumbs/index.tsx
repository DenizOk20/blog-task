"use client";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React, { ReactNode } from "react";

type TBreadCrumbProps = {
  homeElement: ReactNode;
  separator: ReactNode;
  containerClasses?: string;
  listClasses?: string;
  activeClasses?: string;
  capitalizeLinks?: boolean;
};

export default function Breadcrumbs({
  homeElement,
  separator,
  containerClasses,
  listClasses,
  activeClasses,
  capitalizeLinks,
}: TBreadCrumbProps) {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);
  const params = useSearchParams()
  const title = params.get("title")

  return (
    <div className="flex flex-col items-center">
      <div>
        <span className="text-text-head font-semibold leading-9 text-3xl">{title}</span>
      </div>
      <ul className={containerClasses}>
        <li className={listClasses}>
          <Link className="dark:text-text-primary" href={"/"}>{homeElement}</Link>
        </li>
        {pathNames.length > 0 && separator}
        {pathNames.map((link, index) => {
          const href = `/${pathNames.slice(0, index + 1).join("/")}`;
          const itemClasses =
            paths === href ? `${listClasses} ${activeClasses}` : listClasses;
          const itemLink = capitalizeLinks
            ? link[0].toUpperCase() + link.slice(1, link.length)
            : link;
          return (
            <React.Fragment key={index}>
              <li className={itemClasses}>
                {paths === href ? 
                <span className="dark:text-text-secondary">{itemLink}</span>
                :
                <Link href={href}>{itemLink}</Link>
                }
              </li>
              {pathNames.length !== index + 1 && separator}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
}
