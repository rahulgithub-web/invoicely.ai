"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Navigation } from "./navigation";
import { TemplateList } from "./template-list";
import { LogoUpload } from "./logo-upload";
import { ChevronLeft } from "lucide-react";

interface SidebarProps {
  selectedTemplate: number;
  onSelectTemplate: (id: number) => void;
  className?: string;
}

export function Sidebar({ selectedTemplate, onSelectTemplate, className }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div
      className={cn(
        "flex flex-col border-r bg-white transition-all duration-300",
        isCollapsed ? "w-[60px]" : "w-[300px]",
        className
      )}
    >
      <div className="flex h-14 items-center justify-between border-b px-4">
        {!isCollapsed && <span className="text-lg font-semibold">Invoicely.ai</span>}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="rounded-lg p-1.5 hover:bg-gray-100"
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <ChevronLeft className={cn(
            "h-4 w-4 transition-transform",
            isCollapsed && "rotate-180"
          )} />
        </button>
      </div>
      
      <Navigation isCollapsed={isCollapsed} />
      
      {!isCollapsed && (
        <>
          <div className="border-b px-4 py-3">
            <LogoUpload />
          </div>
          <div className="flex-1 overflow-hidden">
            <TemplateList
              selectedTemplate={selectedTemplate}
              onSelectTemplate={onSelectTemplate}
            />
          </div>
        </>
      )}
    </div>
  );
}