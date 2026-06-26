import DashboardHeader from "@/components/dashboard/DashboardHeader";
import { CopyPlus } from "@gravity-ui/icons";
import { Button } from "@heroui/react";
import Link from "next/link";
import { BookOpen, ShoppingCart, Wallet, TrendingUp, Zap } from "lucide-react";
import StatCard from "@/components/dashboard/StatCard";
import EbookTable from "@/components/dashboard/writer/EbookTable";
import { getUser } from "@/lib/core/session";
import { getBooks } from "@/lib/api/books";

const WriterDashboardPage = async () => {
  const user = await getUser();
  const books = await getBooks(user?.id);

  console.log(books);
  const stats = [
    {
      title: "Total Books",
      value: books.length,
      description: "+2 this month",
      icon: BookOpen,
      iconBg: "bg-indigo-50",
      iconColor: "text-indigo-600",
      footerIcon: TrendingUp,
      footerColor: "text-indigo-600",
    },
    {
      title: "Sales",
      value: "1,482",
      description: "Top 5% of creators",
      icon: ShoppingCart,
      iconBg: "bg-amber-50",
      iconColor: "text-amber-600",
      footerIcon: Zap,
      footerColor: "text-amber-600",
    },
    {
      title: "Revenue",
      value: "$24,850.00",
      description: "Payout scheduled for Jan 1st",
      icon: Wallet,
      iconBg: "bg-violet-50",
      iconColor: "text-violet-600",
      footerIcon: null,
      footerColor: "",
    },
  ];

  return (
    <div>
      <div className="flex justify-between">
        <DashboardHeader
          title={"Writer Dashboard"}
          description={"Track your growth and manage your literary collection."}
        />
        <Link href="/dashboard/writer/add-book">
          <Button
            className={"bg-brand-accent font-light text-foreground rounded-lg"}
          >
            {" "}
            <CopyPlus className="h-4 w-4 font-light" />
            Add Ebook
          </Button>
        </Link>
      </div>
      <section className=" p-4 md:p-8">
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {stats.map((item) => (
            <StatCard key={item.title} {...item} />
          ))}
        </div>
      </section>
      <EbookTable books={books} />
    </div>
  );
};

export default WriterDashboardPage;
