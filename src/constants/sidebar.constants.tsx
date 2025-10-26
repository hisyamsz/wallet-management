import { CiGrid41, CiRepeat, CiSettings, CiWallet } from "react-icons/ci";
import type { ISidebarItems } from "../types/Sidebar";

export const SidebarList: ISidebarItems[] = [
  {
    key: "dashboard",
    label: "Dashboard",
    href: "/",
    icon: <CiGrid41 />,
  },
  {
    key: "transactions",
    label: "Transactions",
    href: "/transactions",
    icon: <CiWallet />,
  },
  {
    key: "reports",
    label: "Reports",
    href: "/reports",
    icon: <CiRepeat />,
  },
  {
    key: "settings",
    label: "Settings",
    href: "/settings",
    icon: <CiSettings />,
  },
];
