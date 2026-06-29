"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  ChartArea,
  BookAIcon,
  HistoryIcon,
  PlusSquare,
  User2,
} from "lucide-react";

import { House, Person, Bookmark, BookOpen } from "@gravity-ui/icons";

const iconMap = {
  ChartArea,

  House,
  Person,
  Bookmark,
  BookOpen,

  BookAIcon,
  HistoryIcon,
  PlusSquare,
  User2,
};

const cn = (...args) => args.filter(Boolean).join(" ");

export default function SidebarLink({ item }) {
  const pathname = usePathname();

  const Icon = iconMap[item.icon];

  const isActive = item.link === pathname;

  return (
    <Link
      href={item.link}
      className={cn(
        "flex items-center gap-3.5 rounded-xl px-4 py-3 text-[14px] font-bold transition-all duration-200 group",

        isActive
          ? "bg-[#3e3fb1] text-white shadow-sm"
          : "text-[#4b4b5c] hover:text-[#1a0dab] hover:bg-white/50",
      )}
    >
      {Icon && (
        <Icon
          className={cn(
            "w-5 h-5 transition-colors",

            isActive
              ? "text-white"
              : "text-[#5c5c70] group-hover:text-[#1a0dab]",
          )}
        />
      )}

      <span>{item.label}</span>
    </Link>
  );
}
