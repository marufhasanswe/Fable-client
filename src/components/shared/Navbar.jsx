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

  if (pathname.startsWith("/dashboard")) {
    return null;
  }

  const handleSignOut = async () => {
    await authClient.signOut();

    router.push("/");
    router.refresh();
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
    <nav className=" sticky top-0 z-40 w-full border-b border-white/40 bg-white/40 backdrop-blur-xl shadow-sm ">
      {/* Gradient glow */}
      <div className=" absolute inset-0 -z-10 bg-gradient-to-r  from-blue-100/60 via-white/40 to-purple-100/60 " />

      <div className="mx-auto max-w-7xl px-6">
        <header className=" flex h-16 items-center justify-between ">
          {/* Left */}

          <div className="flex items-center gap-10">
            <Link
              href="/"
              className=" text-3xl font-black bg-gradient-to-r from-[#1e1b9b] to-purple-600 bg-clip-text text-transparent "
            >
              Fable
            </Link>

            <ul className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <li key={item.link}>
                  <Link
                    href={item.link}
                    className={cn(
                      ` relative text-base font-semibold transition after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-[#1e1b9b] after:transition `,

                      isActive(item.link)
                        ? `
                        text-[#1e1b9b]
                        after:scale-x-100
                        `
                        : `
                        text-gray-600
                        hover:text-gray-900
                        `,
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
                      ` relative text-base font-semibold transition after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:scale-x-0 after:bg-[#1e1b9b] after:transition `,

                      isActive(`/dashboard/${user.role}`)
                        ? `
                      text-[#1e1b9b]
                      after:scale-x-100
                      `
                        : `
                      text-gray-600
                      hover:text-gray-900
                      `,
                    )}
                  >
                    Dashboard
                  </Link>
                </li>
              )}
            </ul>
          </div>

          {/* Right */}

          <div className="hidden items-center gap-5 md:flex">
            {user && (
              <p className=" rounded-full border border-white/50 bg-white/40 px-4 py-2 text-sm font-medium text-gray-700 backdrop-blur-md ">
                Hi, {user.name}
              </p>
            )}

            {!user && (
              <>
                <Link
                  href="/login"
                  className=" font-medium text-gray-700 hover:text-[#1e1b9b] "
                >
                  Login
                </Link>

                <Link href="/register">
                  <Button className=" rounded-xl bg-gradient-to-r from-[#1e1b9b] to-purple-600 px-6 font-semibold text-white shadow-lg hover:scale-105 transition ">
                    Register
                  </Button>
                </Link>
              </>
            )}

            {user && (
              <Button
                onClick={handleSignOut}
                className=" rounded-xl bg-gradient-to-r from-[#1e1b9b] to-purple-600 px-6 font-semibold text-white shadow-lg hover:scale-105 transition "
              >
                Logout
              </Button>
            )}
          </div>

          {/* Mobile */}

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className=" flex h-10 w-10 items-center justify-center rounded-xl border border-white/50 bg-white/50 backdrop-blur-md md:hidden "
          >
            {isMenuOpen ? (
              <Xmark className="h-6 w-6" />
            ) : (
              <Bars className="h-6 w-6" />
            )}
          </button>
        </header>
      </div>

      {/* Mobile Menu */}

      {isMenuOpen && (
        <div className=" mx-6 mb-4 rounded-2xl border border-white/50 bg-white/50 p-5 shadow-xl backdrop-blur-xl md:hidden ">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.link}>
                <Link
                  href={item.link}
                  className={cn(
                    "font-semibold",

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
                  className="font-semibold text-gray-700"
                >
                  Dashboard
                </Link>
              </li>
            )}

            <hr className="border-gray-300/50" />

            {!user && (
              <>
                <li>
                  <Link href="/login">Login</Link>
                </li>

                <li>
                  <Button
                    as={Link}
                    href="/register"
                    className=" w-full rounded-xl bg-gradient-to-r from-[#1e1b9b] to-purple-600 text-white "
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
                  className=" w-full rounded-xl bg-gradient-to-r from-[#1e1b9b] to-purple-600 text-white "
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
