import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import Footer from "@/components/shared/Footer";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-background">
      <DashboardSidebar />
      <div className="flex-1 bg-gray-50">
        <main className="p-4 max-w-7xl ">{children}</main>
      </div>
    </div>
  );
}
