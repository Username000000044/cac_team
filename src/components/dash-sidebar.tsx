"use client";

import { usePathname } from "next/navigation";
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button, buttonVariants } from "./ui/button";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Phishing",
    url: "/dashboard/phishing",
    icon: Calendar,
  },
];

export const DashSideBar = () => {
  const pathname = usePathname();

  return (
    <Sidebar variant="floating" className="relative p-0 h-screen">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    className={cn("mb-1", {
                      [buttonVariants({ variant: "sidebar_active" })]:
                        pathname === item.url,
                    })}
                    asChild
                  >
                    <Link className="h-15" href={item.url}>
                      <item.icon className="md:mx-auto !h-[1.4rem] !w-[1.4rem]" />
                      <p className="text-lg md:hidden">{item.title}</p>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}

              {/* <SidebarMenuItem>
                <SidebarMenuButton
                  className="!p-6 my-1 bg-primary text-primary-foreground font-mono text-[1.1rem]"
                  asChild
                >
                  <Link href="/">Log Out</Link>
                </SidebarMenuButton>
              </SidebarMenuItem> */}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
