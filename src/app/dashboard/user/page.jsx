import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatCard from "@/components/dashboard/StatCard";
import { getUser } from "@/lib/core/session";
import React from "react";
import { BookOpen, ShoppingCart, Wallet, TrendingUp, Zap } from "lucide-react";
import { getPurchasedEbooks } from "@/lib/api/purchase";
import { getBookmarks } from "@/lib/api/bookmarks";
import PurchaseHistoryTable from "@/components/dashboard/user/PurchaseHistoryTable";

const UserDashboardPage = async () => {
  const user = await getUser();
  if (!user) return <div>User not found</div>;
  const ebooks = await getPurchasedEbooks(user?.id);
  const bookmarks = await getBookmarks(user?.id);
  const stats = [
    {
      title: "Purchased Ebooks",
      value: ebooks?.length || 0,
      description: "Top 5% of buyer ",
      icon: BookOpen,
      iconBg: "bg-indigo-50",
      iconColor: "text-indigo-600",
      footerIcon: Zap,
      footerColor: "text-indigo-600",
    },
    {
      title: "Bookmarks",
      value: bookmarks?.length || 0,
      description: "+2 this month",
      icon: ShoppingCart,
      iconBg: "bg-amber-50",
      iconColor: "text-amber-600",
      footerIcon: TrendingUp,
      footerColor: "text-amber-600",
    },
    {
      title: "Total Spend",
      value: "$216.00",
      description: "Lifetime total",
      icon: Wallet,
      iconBg: "bg-violet-50",
      iconColor: "text-violet-600",
      footerIcon: null,
      footerColor: "",
    },
  ];

  return (
    <div>
      <DashboardHeader
        title={`Welcome back, ${user?.name}.`}
        description="Your literary sanctuary is updated with 3 new releases you might love."
      />
      <section className=" p-4 md:p-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {stats.map((item) => (
            <StatCard key={item.title} {...item} />
          ))}
        </div>
      </section>
      <PurchaseHistoryTable purchasesEbooks={ebooks} />
    </div>
  );
};

export default UserDashboardPage;
