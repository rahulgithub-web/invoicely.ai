"use client";

import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  FileText,
  Settings,
  HelpCircle,
  History,
} from "lucide-react";
import Link from "next/link";

interface NavItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
  isActive?: boolean;
}

const navItems: NavItem[] = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/", isActive: true },
  { icon: FileText, label: "Invoices", href: "/invoices" },
  { icon: History, label: "History", href: "/history" },
  { icon: Settings, label: "Settings", href: "/settings" },
  { icon: HelpCircle, label: "Help", href: "/help" },
];

interface NavigationProps {
  isCollapsed: boolean;
}

export function Navigation({ isCollapsed }: NavigationProps) {
  return (
    <div className="border-b px-2 py-2">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100",
            item.isActive && "bg-blue-50 text-blue-700 hover:bg-blue-50",
            isCollapsed && "justify-center"
          )}
        >
          <item.icon className={cn("h-4 w-4", item.isActive && "text-blue-700")} />
          {!isCollapsed && <span>{item.label}</span>}
        </Link>
      ))}
    </div>
  );
}