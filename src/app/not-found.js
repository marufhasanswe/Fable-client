"use client";

import { Button, Link } from "@heroui/react";
import { House } from "@gravity-ui/icons";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
      <div className="max-w-md">
        {/* Big 404 Visual Indicator */}
        <div className="mb-2 text-7xl font-black tracking-widest text-gray-200 select-none">
          404
        </div>

        {/* Heading matching Fable branding */}
        <h2 className="text-3xl font-black tracking-tight text-[#1e1b9b] sm:text-4xl">
          Page Not Found
        </h2>

        <p className="mt-4 text-base text-gray-500">
          Sorry, the page you are looking for doesn,t exist, has been removed,
          or changed address.
        </p>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button
            as={Link}
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-[#1e1b9b] px-6 py-2.5 font-semibold text-white hover:bg-[#161373]"
          >
            <House className="h-4 w-4" />
            Back to Home
          </Button>

          <Button
            as={Link}
            href="#"
            variant="bordered"
            className="rounded-xl border-gray-200 px-6 py-2.5 font-semibold text-gray-700 hover:bg-gray-50"
          >
            Browse Ebooks
          </Button>
        </div>
      </div>
    </div>
  );
}
