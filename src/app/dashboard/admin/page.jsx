import AdminCharts from "@/components/dashboard/admin/AdminCharts";
import DashboardHeader from "@/components/dashboard/DashboardHeader";
import StatCard from "@/components/dashboard/StatCard";
import { getDashboardStats } from "@/lib/api/sales";
import { PencilToSquare } from "@gravity-ui/icons";
import { BookOpen, Wallet, TrendingUp, Zap, User2 } from "lucide-react";
import React from "react";

const AdminDashboardPage = async () => {
  const dashboard = await getDashboardStats();
  const totalUsers = dashboard?.stats?.totalUsers;
  const totalWriters = dashboard?.stats?.totalWriters;
  const totalEbooksSold = dashboard?.stats?.totalSales;
  const totalRevenue = dashboard?.stats?.revenue;
  const stats = [
    {
      title: "Total Users",
      value: totalUsers || 0,
      description: "+2 this month",
      icon: User2,
      iconBg: "bg-indigo-50",
      iconColor: "text-indigo-600",
      footerIcon: TrendingUp,
      footerColor: "text-indigo-600",
    },
    {
      title: "Total Writers",
      value: totalWriters || 0,
      description: "Passionate writers",
      icon: PencilToSquare,
      iconBg: "bg-amber-50",
      iconColor: "text-amber-600",
      footerIcon: Zap,
      footerColor: "text-amber-600",
    },
    {
      title: "Total Ebooks Sold",
      value: totalEbooksSold || 0,
      description: "Books selling in the last year",
      icon: BookOpen,
      iconBg: "bg-violet-50",
      iconColor: "text-violet-600",
      footerIcon: null,
      footerColor: "text-violet-600",
    },
    {
      title: "Total Revenue",
      value: `$${totalRevenue || 0}`,
      description: "Payout scheduled for Jan 1st",
      icon: Wallet,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
      footerIcon: null,
      footerColor: "text-blue-600",
    },
  ];
  return (
    <div>
      <DashboardHeader title={"Admin Dashboard"} description={""} />
      <section className=" p-4 md:p-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((item) => (
            <StatCard key={item.title} {...item} />
          ))}
        </div>
      </section>
      <AdminCharts
        monthlySales={dashboard?.charts?.monthlySales || []}
        ebooksByGenre={dashboard?.charts?.ebooksByGenre || []}
      />
    </div>
  );
};

export default AdminDashboardPage;
