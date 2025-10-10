import { DashSideBar } from "@/components/dash-sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-1 h-full">
      <div className="flex">
        <DashSideBar />
        {children}
      </div>
    </div>
  );
}
