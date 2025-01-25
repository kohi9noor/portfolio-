import {
  BriefcaseConveyorBelt,
  HomeIcon,
  MailIcon,
  PencilIcon,
  UserIcon,
} from "lucide-react";

export const MENUITEMS = [
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
