"use client";

import { useEffect } from "react";
import { Button } from "@heroui/react";
import { ArrowRotateLeft } from "@gravity-ui/icons";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error("Application error captured:", error);
  }, [error]);

  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <div className="max-w-md">
        {/* Subtle decorative background element */}
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-50 text-red-600">
          <svg
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>

        {/* Heading using the dark corporate tone from your branding */}
        <h2 className="text-3xl font-black tracking-tight text-[#1e1b9b] sm:text-4xl">
          Something went wrong!
        </h2>

        <p className="mt-4 text-base text-gray-500">
          An unexpected error occurred while loading this page. Our team has
          been notified, and we are looking into it.
        </p>

        {/* Action Button layout */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button
            onClick={() => reset()}
            className="inline-flex items-center gap-2 rounded-xl bg-[#1e1b9b] px-6 py-2.5 font-semibold text-white hover:bg-[#161373]"
          >
            <ArrowRotateLeft className="h-4 w-4" />
            Try Again
          </Button>

          <Button
            as="a"
            href="/"
            variant="bordered"
            className="rounded-xl border-gray-200 px-6 py-2.5 font-semibold text-gray-700 hover:bg-gray-50"
          >
            Go Back Home
          </Button>
        </div>
      </div>
    </div>
  );
}
