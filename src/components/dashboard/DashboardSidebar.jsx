import { auth } from "@/lib/auth";
import { Button, Drawer, Avatar } from "@heroui/react";
import {
  Bars,
  House,
  Person,
  Gear,
  Envelope,
  Bell,
  Book,
  Bookmark,
  BookOpen,
} from "@gravity-ui/icons";
import {
  BookAIcon,
  ChartArea,
  HistoryIcon,
  PlusSquare,
  User2,
} from "lucide-react";
import { headers } from "next/headers";
import Link from "next/link";

// Pure JavaScript utility helper to join style classes conditionally
const cn = (...args) => args.filter(Boolean).join(" ");

export async function DashboardSidebar() {
  // 1. Fetch Request Headers to extract current URL pathname for active states
  const headerList = await headers();
  const fullUrl = headerList.get("x-url") || headerList.get("referer") || "";
  let currentPath = "";
  try {
    if (fullUrl) currentPath = new URL(fullUrl).pathname;
  } catch (e) {
    currentPath = "/dashboard/seller";
  }

  // 2. Navigation mappings with optimized mixed icon sets
  const dashboardNavItems = {
    user: [
      { icon: ChartArea, label: "Overview", link: "/dashboard/user" },
      {
        icon: House,
        label: "Home",
        link: "/",
      },
      {
        icon: BookOpen,
        label: "Purchased Ebooks",
        link: "/dashboard/user/purchased-ebooks",
      },
      { icon: Bookmark, label: "Bookmarks", link: "/dashboard/user/bookmarks" },
      { icon: Person, label: "Profile", link: "/dashboard/user/profile" },
    ],
    writer: [
      { icon: ChartArea, label: "Overview", link: "/dashboard/writer" },
      {
        icon: BookAIcon,
        label: "Manage Ebooks",
        link: "/dashboard/writer/books",
      },
      {
        icon: Bookmark,
        label: "Bookmarked Books",
        link: "/dashboard/writer/bookmarks",
      },
      {
        icon: PlusSquare,
        label: "Add Book",
        link: "/dashboard/writer/add-book",
      },
      {
        icon: HistoryIcon,
        label: "Sales History",
        link: "/dashboard/writer/sales",
      },
      { icon: Person, label: "Profile", link: "/dashboard/writer/profile" },
    ],
    admin: [
      { icon: House, label: "Home", link: "/dashboard/admin" },
      { icon: User2, label: "User Management", link: "/dashboard/admin/users" },
      {
        icon: Bell,
        label: "Notifications",
        link: "/dashboard/admin/notifications",
      },
      { icon: Envelope, label: "Messages", link: "/dashboard/admin/messages" },
      { icon: Person, label: "Profile", link: "/dashboard/admin/profile" },
      { icon: Gear, label: "Settings", link: "/dashboard/admin/settings" },
    ],
  };

  // 3. User session processing
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const user = session?.user;
  const role = user?.role || "user";
  const navItems = dashboardNavItems[role] || [];

  // 4. Reusable Sidebar Content Structure
  const navContent = (
    <div className="flex flex-col h-full justify-between p-5 bg-[#eff3fc]">
      <div className="space-y-7">
        {/* Header Title block as styled in image_4076d9.png */}
        <div className="px-1.5">
          <h3 className="text-2xl font-bold text-[#1a0dab] tracking-tight">
            Creator Hub
          </h3>
          <p className="text-xs text-[#5c5c70] font-medium mt-0.5">
            Managing your Scriptorium
          </p>
        </div>

        {/* Dynamic Navigation lists with precise matching theme backgrounds */}
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => {
            const isItemActive = currentPath === item.link;

            return (
              <Link
                href={item.link}
                key={item.label}
                className={cn(
                  "flex items-center gap-3.5 rounded-xl px-4 py-3 text-[14px] font-bold transition-all duration-200 group",
                  isItemActive
                    ? "bg-[#3e3fb1] text-white shadow-sm"
                    : "text-[#4b4b5c] hover:text-[#1a0dab] hover:bg-white/50",
                )}
              >
                <item.icon
                  className={cn(
                    "w-5 h-5 transition-colors",
                    isItemActive
                      ? "text-white"
                      : "text-[#5c5c70] group-hover:text-[#1a0dab]",
                  )}
                />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Account Info Footer */}
      {user && (
        <div className="border-t border-[#d1d5db] pt-4 flex items-center gap-3 px-1.5">
          <Avatar
            src={user?.image || undefined}
            name={user?.name || "User"}
            size="sm"
            className="ring-2 ring-white"
          />
          <div className="flex flex-col min-w-0">
            <p className="text-sm font-bold truncate text-[#1a0dab] leading-tight mb-0.5">
              {user.name}
            </p>
            <p className="text-xs text-[#5c5c70] font-medium truncate capitalize">
              {role}
            </p>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Desktop Layout Section */}
      <aside className="hidden md:flex flex-col w-64 h-screen border-r border-[#d8dee9] sticky top-0 overflow-y-auto">
        {navContent}
      </aside>

      {/* Mobile Component Wrapper Layout */}
      <div className="md:hidden p-4 flex items-center bg-[#eff3fc] border-b border-[#d8dee9] w-full justify-between">
        <h3 className="text-lg font-bold text-[#1a0dab]">Creator Hub</h3>

        <Drawer>
          <Button
            variant="flat"
            size="sm"
            className="bg-white border border-[#d8dee9] text-[#1a0dab] font-bold"
            startContent={<Bars />}
          >
            Menu
          </Button>

          <Drawer.Backdrop>
            <Drawer.Content
              placement="left"
              className="w-72 max-w-[80vw] h-full p-0"
            >
              <Drawer.Dialog className="h-full">
                <Drawer.CloseTrigger className="absolute right-4 top-4 z-50 text-[#1a0dab]" />
                <div className="h-full bg-[#eff3fc] pt-10">{navContent}</div>
              </Drawer.Dialog>
            </Drawer.Content>
          </Drawer.Backdrop>
        </Drawer>
      </div>
    </>
  );
}
