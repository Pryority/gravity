/**
 * v0 by Vercel.
 * @see https://v0.dev/t/4NUGWLAofKC
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function FloatImageUpload() {
  const [image, setImage] = useState<File | null>(null);
  const handleDrop = (event: DragEvent) => {
    event.preventDefault();
    const file = event.dataTransfer?.files[0];
    setImage(file ? file : null);
  };
  const handleFileSelect = (event: Event) => {
    const file = event.target?.files?.[0];
    setImage(file || null);
  };
  const handleClear = () => {
    setImage(null);
  };
  return (
    <div className="grid gap-4">
      <div
        onDragOver={(event) => event.preventDefault()}
        onDrop={handleDrop}
        className="flex h-40 items-center justify-center rounded-lg border-2 border-dashed border-muted-foreground bg-muted p-4 text-muted-foreground transition-colors hover:border-primary hover:bg-muted-foreground hover:text-accent lg:h-64"
      >
        {image ? (
          <img
            src="/placeholder.svg"
            alt="Uploaded image"
            width={200}
            height={200}
            className="max-h-full max-w-full object-contain"
          />
        ) : (
          <div className="flex flex-col items-center justify-center space-y-2">
            <UploadIcon className="h-8 w-8" />
            <p className="text-center">
              Drag and drop an image or click to select a file
            </p>
          </div>
        )}
      </div>
      <div className="flex items-center gap-2">
        <label
          htmlFor="file-input"
          className="inline-flex h-9 items-center justify-center rounded-md bg-secondary px-4 py-2 text-sm font-medium text-secondary-foreground shadow transition-colors hover:bg-secondary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          Select File
        </label>
        <input
          id="file-input"
          type="file"
          accept="image/*"
          className="sr-only"
          onChange={handleFileSelect}
        />
        {image && (
          <Button variant="outline" onClick={handleClear}>
            Clear
          </Button>
        )}
      </div>
    </div>
  );
}

function UploadIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  );
}
