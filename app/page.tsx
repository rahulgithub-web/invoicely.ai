import InvoiceGenerator from '@/components/invoice/invoice-generator';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <nav className="sticky top-0 z-10 border-b bg-white px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-xl font-semibold">Invoicely.ai</div>
          </div>
          <div className="flex items-center gap-3">
            <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
              Generate
            </button>
            <button className="flex items-center gap-2 rounded-lg border bg-white px-4 py-2 text-sm font-medium hover:bg-gray-50">
              Upload Invoice
            </button>
          </div>
        </div>
      </nav>
      <div className="flex-1">
        <InvoiceGenerator />
      </div>
    </div>
  );
}