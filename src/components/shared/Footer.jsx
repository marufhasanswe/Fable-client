"use client";

import { Link, Input, Button } from "@heroui/react";
import { Globe, At, NodesRight, PaperPlane } from "@gravity-ui/icons";

export default function Footer() {
  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter subscription captured (Frontend only)");
  };

  return (
    <footer className="relative overflow-hidden px-6 py-14 md:px-12 lg:px-24">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#dbeafe] via-white to-[#ede9fe]" />

      {/* Blur Shapes */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-300/30 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-purple-300/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl rounded-3xl border border-white/40 bg-white/40 p-8 shadow-xl backdrop-blur-xl md:p-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            <Link
              href="/"
              className="text-3xl font-black bg-gradient-to-r from-[#1e1b9b] to-purple-600 bg-clip-text text-transparent"
            >
              Fable
            </Link>

            <p className="max-w-xs text-sm leading-relaxed text-gray-600">
              Empowering the next generation of storytellers through a premium
              digital reading experience. Built for readers who demand more from
              their library.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="mb-5 text-sm font-bold text-gray-900">Product</h4>

            <ul className="space-y-3 text-sm">
              {[
                "Browse Books",
                "Writer Dashboard",
                "Premium Plan",
                "App Downloads",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-gray-600 transition hover:translate-x-1 hover:text-[#1e1b9b]"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="mb-5 text-sm font-bold text-gray-900">
              Legal & Support
            </h4>

            <ul className="space-y-3 text-sm">
              {["About", "Contact", "Privacy Policy", "Terms of Service"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-gray-600 transition hover:translate-x-1 hover:text-[#1e1b9b]"
                    >
                      {item}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-4">
            <h4 className="text-sm font-bold text-gray-900">Stay Updated</h4>

            <p className="text-xs leading-relaxed text-gray-500">
              Subscribe to get notified about new ebooks, features, and creator
              updates.
            </p>

            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col gap-3"
            >
              <Input
                type="email"
                placeholder="Enter your email"
                size="sm"
                variant="bordered"
                className=" rounded-xl bg-white/60 border border-white shadow-sm backdrop-blur-md"
                required
              />

              <Button
                type="submit"
                className="
                h-10 rounded-xl 
                bg-gradient-to-r 
                from-[#1e1b9b] 
                to-purple-600 
                text-white 
                font-semibold
                shadow-lg
                transition
                hover:scale-[1.02]
                "
              >
                <PaperPlane className="h-4 w-4" />
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
          <p className="text-sm text-gray-600">
            © 2026 Fable Scriptorium. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            {[Globe, At, NodesRight].map((Icon, index) => (
              <Link
                key={index}
                href="#"
                className="
                flex h-10 w-10 items-center justify-center
                rounded-full
                border border-white/50
                bg-white/40
                text-gray-700
                shadow-sm
                backdrop-blur-md
                transition
                hover:-translate-y-1
                hover:bg-white
                hover:text-[#1e1b9b]
                "
              >
                <Icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
