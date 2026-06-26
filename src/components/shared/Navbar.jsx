"use client";

import { useState } from "react";
import { Link, Button } from "@heroui/react";
import { Bars, Xmark } from "@gravity-ui/icons";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const user = session?.user;
  const handleSignOut = () => {
    authClient.signOut();
    router.push("/");
  };

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <header className="flex h-16 items-center justify-between">
          {/* Left: Brand Logo & Desktop Nav Links */}
          <div className="flex items-center gap-8">
            {/* Logo matching the image typography */}
            <Link
              href="/"
              className="text-2xl font-black text-[#1e1b9b] hover:opacity-100"
            >
              Fable
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden items-center gap-6 md:flex">
              <li>
                <Link
                  href="/"
                  className="relative text-base font-semibold text-[#1e1b9b] hover:text-[#1e1b9b] after:absolute after:-bottom-[21px] after:left-0 after:h-[2px] after:w-full after:bg-[#1e1b9b]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/browse-ebooks"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  Browse Ebooks
                </Link>
              </li>
              <li>
                <Link
                  href={`/dashboard/${user?.role ? user.role : ""}`}
                  className={`text-base text-gray-500 hover:text-gray-900`}
                >
                  Dashboard
                </Link>
              </li>
            </ul>
          </div>

          {/* Right: Auth Action Buttons */}
          <div className="hidden items-center gap-4 md:flex">
            {user && <p>Hi, {user.name}</p>}
            {!user && (
              <>
                <Link
                  href="/login"
                  className="text-base font-medium text-gray-700 hover:text-gray-900"
                >
                  Login
                </Link>
                <Link href="/register">
                  <Button className="rounded-xl bg-[#1e1b9b] px-5 py-2 font-semibold text-white hover:bg-[#161373]">
                    Register
                  </Button>
                </Link>
              </>
            )}

            {user && (
              <Button
                onClick={handleSignOut}
                as={Link}
                href="#"
                className="rounded-xl bg-[#1e1b9b] px-5 py-2 font-semibold text-white hover:bg-[#161373]"
              >
                Logout
              </Button>
            )}
          </div>

          {/* Mobile Hamburger Toggle Buttons (Gravity UI Icons) */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <Xmark className="h-6 w-6" />
              ) : (
                <Bars className="h-6 w-6" />
              )}
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="border-t border-gray-100 bg-white px-6 py-4 shadow-md md:hidden">
          <ul className="flex flex-col gap-4">
            <li>
              <Link
                href="#"
                className="block py-1 text-base font-semibold text-[#1e1b9b]"
              >
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="block py-1 text-base text-gray-600">
                Browse Ebooks
              </Link>
            </li>
            <li>
              <Link href="#" className="block py-1 text-base text-gray-600">
                Dashboard
              </Link>
            </li>
            <hr className="my-2 border-gray-100" />
            <li>
              <Link href="#" className="block py-1 text-base text-gray-600">
                Login
              </Link>
            </li>
            <li className="pt-2">
              <Button
                as={Link}
                href="#"
                className="w-full rounded-xl bg-[#1e1b9b] font-semibold text-white"
              >
                Logout
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
