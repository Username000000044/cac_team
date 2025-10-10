import { DashSideBar } from "@/components/dash-sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex items-start gap-8 px-8">
      {/* Sidebar */}
      <DashSideBar />

      {/* Main Content */}
      <div className="flex-1 bg-card rounded-lg border border-border p-2">
        {children}
      </div>
    </div>
  );
}
