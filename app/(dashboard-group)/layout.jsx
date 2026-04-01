
import TopBar from "@/components/dashboard/TopBar";
import SideBar from "@/components/dashboard/SideBar";

export default function DashboardLayout({ children }) {
  return (
    <div className="bg-[#060e20] text-white min-h-screen">

      <TopBar />
      <SideBar />

      <main className="lg:ml-64 pt-24 px-6 md:px-12 pb-12">
  {children}
</main>

    </div>
  );
}