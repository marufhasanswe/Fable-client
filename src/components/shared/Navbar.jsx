"use client";

import { useState } from "react";
import { Link, Button } from "@heroui/react";
import { Bars, Xmark } from "@gravity-ui/icons";

import { authClient } from "@/lib/auth-client";

import { useRouter, usePathname } from "next/navigation";

const cn = (...args) => args.filter(Boolean).join(" ");

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const router = useRouter();

  const pathname = usePathname();

  const { data: session } = authClient.useSession();

  const user = session?.user;

  const handleSignOut = () => {
    authClient.signOut();

    router.push("/");
  };

  const navItems = [
    {
      label: "Home",
      link: "/",
    },

    {
      label: "Browse Ebooks",
      link: "/browse-ebooks",
    },
  ];

  const isActive = (link) => {
    if (link === "/") {
      return pathname === "/";
    }

    return pathname === link || pathname.startsWith(link + "/");
  };

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <header className="flex h-16 items-center justify-between">
          {/* Left */}

          <div className="flex items-center gap-8">
            <Link href="/" className="text-2xl font-black text-[#1e1b9b]">
              Fable
            </Link>

            <ul className="hidden items-center gap-6 md:flex">
              {navItems.map((item) => (
                <li key={item.link}>
                  <Link
                    href={item.link}
                    className={cn(
                      "text-base font-semibold relative transition-colors",

                      isActive(item.link)
                        ? "text-[#1e1b9b] border-b-2 border-[#1e1b9b] rounded-none"
                        : "text-gray-500 hover:text-gray-900",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}

              {user && (
                <li>
                  <Link
                    href={`/dashboard/${user.role}`}
                    className={cn(
                      "text-base font-semibold transition-colors",

                      isActive(`/dashboard/${user.role}`)
                        ? "text-[#1e1b9b] border-b-2 border-[#1e1b9b] rounded-none  "
                        : "text-gray-500 hover:text-gray-900",
                    )}
                  >
                    Dashboard
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Right */}

          <div className="hidden items-center gap-4 md:flex">
            {user && <p>Hi, {user.name}</p>}

            {!user && (
              <>
                <Link
                  href="/login"
                  className="text-base font-medium text-gray-700"
                >
                  Login
                </Link>

                <Link href="/register">
                  <Button className="rounded-xl bg-[#1e1b9b] px-5 py-2 font-semibold text-white">
                    Register
                  </Button>
                </Link>
              </>
            )}

            {user && (
              <Button
                onClick={handleSignOut}
                className="rounded-xl bg-[#1e1b9b] px-5 py-2 font-semibold text-white"
              >
                Logout
              </Button>
            )}
          </div>

          {/* Mobile */}

          <div className="flex items-center md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? (
                <Xmark className="h-6 w-6" />
              ) : (
                <Bars className="h-6 w-6" />
              )}
            </button>
          </div>
        </header>
      </div>

      {/* Mobile Menu */}

      {isMenuOpen && (
        <div className="border-t bg-white px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.link}>
                <Link
                  href={item.link}
                  className={cn(
                    "block py-1 text-base font-semibold",

                    isActive(item.link) ? "text-[#1e1b9b]" : "text-gray-600",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {user && (
              <li>
                <Link
                  href={`/dashboard/${user.role}`}
                  className={cn(
                    "block py-1 text-base font-semibold",

                    isActive(`/dashboard/${user.role}`)
                      ? "text-[#1e1b9b]"
                      : "text-gray-600",
                  )}
                >
                  Dashboard
                </Link>
              </li>
            )}

            <hr />

            {!user && (
              <>
                <li>
                  <Link href="/login">Login</Link>
                </li>

                <li>
                  <Button
                    as={Link}
                    href="/register"
                    className="w-full bg-[#1e1b9b] text-white"
                  >
                    Register
                  </Button>
                </li>
              </>
            )}

            {user && (
              <li>
                <Button
                  onClick={handleSignOut}
                  className="w-full bg-[#1e1b9b] text-white"
                >
                  Logout
                </Button>
              </li>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}
