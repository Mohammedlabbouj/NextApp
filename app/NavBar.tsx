"use client";
import Link from "next/link";
import React, { use } from "react";
import { AiFillBank } from "react-icons/ai";
const NavBar = () => {
  const links = [
    { label: "DaechBored", href: "/" },
    { label: "Issues", href: "/issues" },
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
            className="text-zinc-600 hover:text-white transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
