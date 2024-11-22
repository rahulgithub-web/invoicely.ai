"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { useState } from "react";
import { invoiceTemplates } from "../templates";

interface TemplateListProps {
  selectedTemplate: number;
  onSelectTemplate: (id: number) => void;
}

export function TemplateList({
  selectedTemplate,
  onSelectTemplate,
}: TemplateListProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = Array.from(
    new Set(invoiceTemplates.map((template) => template.category))
  );

  const filteredTemplates = invoiceTemplates.filter(
    (template) =>
      template.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (!selectedCategory || template.category === selectedCategory)
  );

  return (
    <div className="flex h-full flex-col">
      <div className="border-b p-4">
        <h2 className="text-lg font-semibold">Templates</h2>
        <div className="mt-2 flex items-center gap-2 rounded-md border bg-gray-50 px-3 py-1.5">
          <Search className="h-4 w-4 text-gray-400" />
          <input
            type="search"
            placeholder="Search templates..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-gray-400"
          />
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedCategory(null)}
            className={cn(
              "rounded-full px-3 py-1 text-xs font-medium",
              !selectedCategory
                ? "bg-blue-100 text-blue-700"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            )}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "rounded-full px-3 py-1 text-xs font-medium",
                selectedCategory === category
                  ? "bg-blue-100 text-blue-700"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      <ScrollArea className="flex-1">
        <div className="grid gap-4 p-4">
          {filteredTemplates.map((template) => (
            <button
              key={template.id}
              onClick={() => onSelectTemplate(template.id)}
              className="group text-left"
            >
              <div
                className={cn(
                  "relative aspect-[1/1.4] overflow-hidden rounded-lg border-2 transition-all",
                  selectedTemplate === template.id
                    ? "border-blue-600"
                    : "border-transparent hover:border-gray-200"
                )}
              >
                <div
                  className="h-full w-full p-4"
                  style={{ backgroundColor: template.colors.primary }}
                >
                  <div className="h-full rounded-lg bg-white p-4">
                    <div
                      className="mb-4 h-6 w-20 rounded"
                      style={{ backgroundColor: template.colors.secondary }}
                    />
                    <div className="space-y-2">
                      <div className="h-3 w-full rounded bg-gray-200" />
                      <div className="h-3 w-3/4 rounded bg-gray-200" />
                      <div className="h-3 w-1/2 rounded bg-gray-200" />
                    </div>
                    <div className="mt-6 space-y-2">
                      <div className="h-3 w-full rounded bg-gray-100" />
                      <div className="h-3 w-full rounded bg-gray-100" />
                      <div className="h-3 w-3/4 rounded bg-gray-100" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-2">
                <div className="font-medium leading-none">{template.name}</div>
                <div className="mt-1 text-sm text-gray-500">
                  {template.category}
                </div>
              </div>
            </button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}