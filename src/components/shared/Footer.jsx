"use client";

import { Link, Input, Button } from "@heroui/react";
import { Globe, At, NodesRight, PaperPlane } from "@gravity-ui/icons";
import { usePathname } from "next/navigation";

export default function Footer() {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Frontend-only placeholder logic
    console.log("Newsletter subscription captured (Frontend only)");
  };

  return (
    <footer className="w-full bg-[#dbeafe] text-gray-600 px-6 py-12 md:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        {/* Top Section: Brand, Links, and Newsletter Grid */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {/* Column 1: Brand Info */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <Link
              href="/"
              className="text-2xl font-black text-[#1e1b9b] hover:opacity-100"
            >
              Fable
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-gray-600">
              Empowering the next generation of storytellers through a premium
              digital reading experience. Built for readers who demand more from
              their library.
            </p>
          </div>

          {/* Column 2: Product Links */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-4">Product</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#1e1b9b]">
                  Browse Books
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#1e1b9b]">
                  Writer Dashboard
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#1e1b9b]">
                  Premium Plan
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#1e1b9b]">
                  App Downloads
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Legal & Support Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-gray-900 mb-4">
              Legal & Support
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#1e1b9b]">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#1e1b9b]">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#1e1b9b]">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 hover:text-[#1e1b9b]">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter Signup Placeholder */}
          <div className="flex flex-col gap-4 sm:col-span-2 lg:col-span-1">
            <h4 className="text-sm font-bold text-gray-900">Stay Updated</h4>
            <p className="text-xs text-gray-500 leading-normal">
              Subscribe to get notified about new ebooks, features, and creator
              updates.
            </p>
            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col gap-2"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                size="sm"
                variant="bordered"
                className="w-full rounded-xl border-gray-200 px-4 py-2.5 text-sm"
                required
              />
              <Button
                type="submit"
                size="sm"
                className="w-full h-10 bg-[#1e1b9b] text-white font-semibold rounded-xl flex items-center justify-center gap-2 hover:bg-[#161373]"
              >
                <PaperPlane className="h-3.5 w-3.5" />
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Divider Line */}
        <hr className="my-8 border-gray-300/60" />

        {/* Bottom Section: Copyright and Socials */}
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-gray-600">
            © 2024 Fable Scriptorium. All rights reserved.
          </p>

          {/* Gravity UI Social Icons */}
          <div className="flex items-center gap-5 text-gray-700">
            <Link
              href="#"
              className="text-gray-700 hover:text-[#1e1b9b]"
              aria-label="Website"
            >
              <Globe className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-[#1e1b9b]"
              aria-label="Contact Email"
            >
              <At className="h-5 w-5" />
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-[#1e1b9b]"
              aria-label="Share/Network"
            >
              <NodesRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
