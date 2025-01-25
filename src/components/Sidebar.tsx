"use client";

import Image from "next/image";
import {
  BriefcaseConveyorBelt,
  Github,
  HomeIcon,
  Linkedin,
  MailIcon,
  MoonIcon,
  PencilIcon,
  Twitter,
  UserIcon,
} from "lucide-react";
import React from "react";
import TooltipWrapper from "./TooltipWrapper";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";

const socialLinks = [
  { icon: Twitter, url: "https://twitter.com", size: 18 },
  { icon: Linkedin, url: "https://linkedin.com", size: 18 },
  { icon: Github, url: "https://github.com", size: 18 },
];

const menuItems = [
  { icon: HomeIcon, label: "Homepage", size: 20, href: "/" },
  {
    icon: BriefcaseConveyorBelt,
    label: "Projects",
    size: 20,
    href: "/projects",
  },
  { icon: UserIcon, label: "About", size: 20, href: "/about-me" },
  { icon: PencilIcon, label: "Blog", size: 20, href: "/blogs" },
  { icon: MailIcon, label: "Contact", size: 20, href: "/contact" },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <React.Fragment>
      <div className="flex flex-col items-center gap-6">
        <Image
          src={"/dogesh.jpg"}
          className="rounded-2xl"
          width={50}
          height={50}
          alt="dogesh"
        />
        <div className="hidden 2xl:flex flex-col items-center">
          <h1 className="text-[18px] font-medium">Kohinoor Nimes</h1>
          <p className="text-[14px] text-gray-600">Software Developer</p>
          <div className="py-4">
            <div className="flex gap-4 items-center">
              {socialLinks.map(({ icon: Icon, url, size }, index) => (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center justify-center rounded-full w-8 h-8 bg-slate-200 hover:bg-slate-300">
                    <Icon size={size} />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1 items-center w-full">
          {menuItems.map(({ icon: Icon, label, size, href }, index) => (
            <TooltipWrapper key={index} text={label}>
              <Link
                href={href}
                className={cn(
                  "flex items-center md:justify-center 2xl:justify-start md:w-12 2xl:w-[240px] 2xl:px-4 2xl:h-10 gap-4 cursor-pointer md:h-12 rounded-2xl xl:rounded-xl hover:bg-slate-200",
                  pathname === href ||
                    (href !== "/" && pathname.startsWith(href))
                    ? "bg-slate-200"
                    : ""
                )}
              >
                <Icon size={size} />
                <p className="hidden 2xl:block text-[14px] text-foreground">
                  {label}
                </p>
              </Link>
            </TooltipWrapper>
          ))}
        </div>
      </div>

      <div className="flex 2xl:hidden flex-col items-center">
        <div className="w-full h-[1px] bg-slate-300 my-16"></div>
        <div className="flex flex-col gap-6 items-center">
          {socialLinks.map(({ icon: Icon, url, size }, index) => (
            <a key={index} href={url} target="_blank" rel="noopener noreferrer">
              <div className="flex items-center justify-center rounded-full p-1 w-8 h-8 hover:bg-slate-200">
                <Icon size={size} />
              </div>
            </a>
          ))}
          <div className="flex my-4 items-center justify-center cursor-pointer rounded-full hover:bg-slate-200 p-1">
            <MoonIcon size={18} />
          </div>
        </div>
      </div>

      <div className="hidden 2xl:flex items-center justify-center cursor-pointer rounded-full hover:bg-slate-200 p-1">
        <MoonIcon size={18} />
      </div>
    </React.Fragment>
  );
};

export default Sidebar;
