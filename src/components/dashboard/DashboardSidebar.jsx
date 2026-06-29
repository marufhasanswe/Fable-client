import { auth } from "@/lib/auth";

import { Button, Drawer, Avatar } from "@heroui/react";

import { ArrowRightFromSquare, Bars } from "@gravity-ui/icons";

import { headers } from "next/headers";

import SidebarLink from "./SidebarLink";
import LogoutButton from "./LogoutButton";

export async function DashboardSidebar() {
  const dashboardNavItems = {
    user: [
      {
        icon: "ChartArea",
        label: "Overview",
        link: "/dashboard/user",
      },

      {
        icon: "House",
        label: "Home",
        link: "/",
      },

      {
        icon: "BookOpen",
        label: "Purchased Ebooks",
        link: "/dashboard/user/books",
      },

      {
        icon: "Bookmark",
        label: "Bookmarks",
        link: "/dashboard/user/bookmarks",
      },

      {
        icon: "Person",
        label: "Profile",
        link: "/dashboard/user/profile",
      },
    ],

    writer: [
      {
        icon: "ChartArea",
        label: "Overview",
        link: "/dashboard/writer",
      },

      {
        icon: "BookAIcon",
        label: "Manage Ebooks",
        link: "/dashboard/writer/books",
      },

      {
        icon: "Bookmark",
        label: "Bookmarked Books",
        link: "/dashboard/writer/bookmarks",
      },

      {
        icon: "PlusSquare",
        label: "Add Book",
        link: "/dashboard/writer/add-book",
      },

      {
        icon: "HistoryIcon",
        label: "Sales History",
        link: "/dashboard/writer/sales",
      },

      {
        icon: "Person",
        label: "Profile",
        link: "/dashboard/writer/profile",
      },
    ],

    admin: [
      {
        icon: "ChartArea",
        label: "Overview",
        link: "/dashboard/admin",
      },

      {
        icon: "User2",
        label: "Manage Users",
        link: "/dashboard/admin/manage-users",
      },

      {
        icon: "BookAIcon",
        label: "Manage All Ebooks",
        link: "/dashboard/admin/manage-books",
      },

      {
        icon: "HistoryIcon",
        label: "View All Transaction",
        link: "/dashboard/admin/transactions",
      },

      {
        icon: "House",
        label: "Home",
        link: "/",
      },
    ],
  };

  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  const role = user?.role || "user";

  const navItems = dashboardNavItems[role] || [];

  const handleSignOut = async () => {
    await auth.api.signOut();

    router.push("/");
    router.refresh();
  };

  const navContent = (
    <div className="flex flex-col h-full justify-between p-5 bg-[#eff3fc]">
      <div className="space-y-7">
        <div className="px-1.5">
          <h3 className="text-2xl font-bold text-[#1a0dab]">Creator Hub</h3>

          <p className="text-xs text-[#5c5c70] font-medium mt-1">
            Managing your Scriptorium
          </p>
        </div>

        <nav className="flex flex-col gap-1">
          {navItems.map((item) => (
            <SidebarLink key={item.label} item={item} />
          ))}
        </nav>
      </div>

      {user && (
        <div className="border-t border-[#d1d5db] pt-4 space-y-4">
          <div className="flex items-center gap-3 px-1.5">
            <Avatar>
              <Avatar.Image alt={user?.name} src={user?.image || undefined} />
              <Avatar.Fallback>{user?.name?.[0]}</Avatar.Fallback>
            </Avatar>
            <div className="flex flex-col min-w-0">
              <p className="text-sm font-bold truncate text-[#1a0dab]">
                {user.name}
              </p>

              <p className="text-xs text-[#5c5c70] capitalize">{role}</p>
            </div>
          </div>

          <LogoutButton />
        </div>
      )}
    </div>
  );

  return (
    <>
      {/* Desktop */}

      <aside
        className="
          hidden
          md:flex
          flex-col
          w-64
          h-screen
          border-r
          border-[#d8dee9]
          sticky
          top-0
        "
      >
        {navContent}
      </aside>

      {/* Mobile */}

      <div
        className="
          md:hidden
          p-4 
          flex
          items-center
          justify-between
          bg-[#eff3fc]
          border-b
        "
      >
        <h3 className="text-lg font-bold text-[#1a0dab]">Creator Hub</h3>

        <Drawer>
          <Button variant="flat" size="sm" className="text-center">
            <Bars /> Menu
          </Button>

          <Drawer.Backdrop>
            <Drawer.Content placement="left" className="w-72 max-w-[80vw]">
              <Drawer.Dialog className="h-full">
                <Drawer.CloseTrigger className="absolute right-4 top-4" />

                {navContent}
              </Drawer.Dialog>
            </Drawer.Content>
          </Drawer.Backdrop>
        </Drawer>
      </div>
    </>
  );
}
