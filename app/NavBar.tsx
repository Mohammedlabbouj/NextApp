"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBank } from "react-icons/ai";
import classnames from "classnames";
const NavBar = () => {
  const Path = usePathname();
  console.log(Path);
  const links = [
    { label: "DaechBored", href: "/" },
    { label: "Issues", href: "/Issues" },
  ];
  return (
    <nav className="flex space-x-10 px-1 h-16 items-center mb-6 border-b">
      <Link href="/">
        <div className="w-5 h-5">
          <AiFillBank />
        </div>
      </Link>
      <ul className="flex space-x-5">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={classnames({
              "text-red-50": Path === link.href,
              "text-zinc-500": Path !== link.href,
              "hover:text-white transition-colors": true,
            })}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
