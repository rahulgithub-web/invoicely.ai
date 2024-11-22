"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

const templates = [
  { id: 0, name: "Modern Blue", thumbnail: "/templates/modern-blue.png" },
  { id: 1, name: "Classic White", thumbnail: "/templates/classic-white.png" },
  { id: 2, name: "Professional Dark", thumbnail: "/templates/professional-dark.png" },
];

interface TemplateSelectorProps {
  selectedTemplate: number;
  onSelectTemplate: (id: number) => void;
}

export function TemplateSelector({
  selectedTemplate,
  onSelectTemplate,
}: TemplateSelectorProps) {
  return (
    <div className="flex flex-col rounded-lg border bg-white">
      <div className="border-b p-4">
        <h2 className="text-lg font-semibold">Templates</h2>
        <div className="mt-2">
          <input
            type="search"
            placeholder="Search templates..."
            className="w-full rounded-md border px-3 py-2 text-sm"
          />
        </div>
      </div>
      <ScrollArea className="flex-1 p-4">
        <div className="grid gap-4">
          {templates.map((template) => (
            <button
              key={template.id}
              onClick={() => onSelectTemplate(template.id)}
              className={cn(
                "relative aspect-[1/1.4] overflow-hidden rounded-lg border-2 transition-all",
                selectedTemplate === template.id
                  ? "border-blue-600"
                  : "border-transparent hover:border-gray-200"
              )}
            >
              <img
                src={template.thumbnail}
                alt={template.name}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
}