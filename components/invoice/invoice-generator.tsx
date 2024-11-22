"use client";

import { useState } from "react";
import { Sidebar } from "./sidebar";
import { InvoiceForm } from "./invoice-form";
import { InvoicePreview } from "./invoice-preview";

export interface InvoiceData {
  invoiceNumber: string;
  companyDetails: string;
  billTo: string;
  dateIssued: string;
  paymentTerms: string;
  items: Array<{
    description: string;
    rate: number;
    quantity: number;
    amount: number;
  }>;
  notes: string;
  subtotal: number;
  tax: number;
  discount: number;
  shipping: number;
  total: number;
}

export default function InvoiceGenerator() {
  const [selectedTemplate, setSelectedTemplate] = useState(0);
  const [invoiceData, setInvoiceData] = useState<InvoiceData>({
    invoiceNumber: "#002121",
    companyDetails: "Musemind, Road 3, Block B, Banasree, Dhaka.",
    billTo: "Panther, 456 Second St. Ste 789, Brooklyn, NY 11207",
    dateIssued: new Date().toISOString().split("T")[0],
    paymentTerms: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000)
      .toISOString()
      .split("T")[0],
    items: [],
    notes: "Payment to be made through PayPal. Thank you for your business!",
    subtotal: 0,
    tax: 0,
    discount: 0,
    shipping: 0,
    total: 0,
  });

  return (
    <div className="flex h-[calc(100vh-73px)]">
      <Sidebar
        selectedTemplate={selectedTemplate}
        onSelectTemplate={setSelectedTemplate}
      />
      <div className="flex flex-1 gap-6 overflow-auto p-6">
        <div className="flex-shrink-0">
          <InvoiceForm invoiceData={invoiceData} setInvoiceData={setInvoiceData} />
        </div>
        <div className="flex-1">
          <InvoicePreview
            template={selectedTemplate}
            invoiceData={invoiceData}
          />
        </div>
      </div>
    </div>
  );
}