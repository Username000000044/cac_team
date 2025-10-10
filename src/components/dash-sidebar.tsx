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
import { Button } from "./ui/button";

// Menu items.
const items = [
  {
    title: "Data",
    url: "/dashboard/data",
    icon: Home,
  },
  {
    title: "Calendar",
    url: "/dashboard/calendar",
    icon: Calendar,
  },
];

export const DashSideBar = () => {
  const pathname = usePathname();

  return (
    <Sidebar
      variant="floating"
      className="relative flex flex-1 h-full p-0 mx-8"
    >
      <SidebarContent className="p-3">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="flex flex-col justify-between">
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    className={cn("bg-card !p-6 my-1 text-white", {
                      "bg-primary text-primary-foreground hover:bg-primary before:content-[''] before:block before:w-[.1rem] before:h-1/2 before:bg-card before:absolute before:top-[25%] before:left-2 transition duration-400 ease-in-out":
                        pathname.includes(item.url),
                      "bg-card text-card-foreground": !pathname.includes(
                        item.url
                      ),
                    })}
                    asChild
                  >
                    <Link href={item.url}>
                      <div className="flex flex-row items-center h-full ">
                        <item.icon className="!h-[1.1rem] mr-3" />
                        <span className="text-[1.1rem] font-mono">
                          {item.title}
                        </span>
                      </div>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}

              <SidebarMenuItem>
                <SidebarMenuButton
                  className="!p-6 my-1 bg-primary text-primary-foreground font-mono text-[1.1rem]"
                  asChild
                >
                  <Link href="/">Log Out</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
