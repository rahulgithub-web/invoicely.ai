"use client";

import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, X } from "lucide-react";

export function LogoUpload() {
  const [logo, setLogo] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setLogo(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg"],
    },
    maxSize: 5242880, // 5MB
    multiple: false,
  });

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium">Company Logo</span>
        {logo && (
          <button
            onClick={() => setLogo(null)}
            className="rounded p-1 hover:bg-gray-100"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
      {logo ? (
        <div className="relative aspect-[3/2] overflow-hidden rounded-lg border bg-gray-50">
          <img
            src={logo}
            alt="Company logo"
            className="h-full w-full object-contain p-2"
          />
        </div>
      ) : (
        <div
          {...getRootProps()}
          className={`flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed p-4 transition-colors ${
            isDragActive ? "border-blue-400 bg-blue-50" : "border-gray-200"
          }`}
        >
          <input {...getInputProps()} />
          <Upload className="h-5 w-5 text-gray-400" />
          <div className="mt-2 text-center text-sm text-gray-500">
            <span className="font-medium text-blue-600">Click to upload</span> or
            drag and drop
          </div>
          <div className="text-xs text-gray-400">PNG, JPG up to 5MB</div>
        </div>
      )}
    </div>
  );
}