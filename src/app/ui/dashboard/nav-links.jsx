"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLinks = () => {
  const presentLink = usePathname();

  const links = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Attendance",
      href: "/dashboard/attendance",
    },
    {
      name: "Class",
      href: "/dashboard/classes",
    },
    {
      name: "Feedback",
      href: "/dashboard/feedback",
    },
    {
      name: "Tutor",
      href: "/dashboard/tutor",
    },
  ];

  return (
    <>
      {links.map((link) => (
        <Link href={`${link.href}`} key={link.name}>
          <div
            className={`flex items-center text-xl p-4 hover:bg-blue-400 hover:text-white ${
              link.href == presentLink ? "bg-blue-400 text-white" : ""
            }`}
          >
            <span className="w-6">{link.icon}</span>
            <p>{link.name}</p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default NavLinks;
