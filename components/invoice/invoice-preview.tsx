"use client";

import { InvoiceData } from "./invoice-generator";
import { ScrollArea } from "@/components/ui/scroll-area";

interface InvoicePreviewProps {
  template: number;
  invoiceData: InvoiceData;
}

export function InvoicePreview({ template, invoiceData }: InvoicePreviewProps) {
  return (
    <div className="flex h-[calc(100vh-85px)] flex-col rounded-lg border bg-white">
      <div className="border-b p-4">
        <h2 className="text-lg font-semibold">Preview Invoice</h2>
      </div>
      <ScrollArea className="flex-1">
        <div className="p-8">
          <div className="mx-auto max-w-[800px] rounded-lg border p-8 shadow-sm">
            {/* ... rest of the JSX remains the same ... */}
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}