"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button, buttonVariants } from "./ui/button";
import { LogIn } from "lucide-react";

const games: { title: string; href: string; description: string }[] = [
  {
    title: "Url Verifier",
    href: "/url",
    description: "Counterfeit URLs and their camouflaged appearnce.",
  },
  {
    title: "Email Verifier",
    href: "/email",
    description: "Phisihing emails and their masked identify and author.",
  },
];

export const Navbar = () => {
  const pathname = usePathname();

  return <>{!pathname.includes("/dashboard") ? <MainNavbar /> : null}</>;
};

const MainNavbar = () => {
  return (
    <div className="w-full fixed p-6 z-4">
      <div className=" flex items-center justify-between flex-wrap">
        <NavigationMenu>
          <Button className="w-10 h-10 bg-primary me-1.5" asChild>
            <Link href={"/"}></Link>
          </Button>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Games</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {games.map((game) => (
                    <ListItem
                      key={game.title}
                      title={game.title}
                      href={game.href}
                      className=""
                    >
                      {game.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Button
          asChild
          className={buttonVariants({ size: "lg", variant: "outline" })}
        >
          <Link href="/login">
            <LogIn />
            <span className="hidden md:block">Login</span>
          </Link>
        </Button>
      </div>
    </div>
  );
};

const DashNavbar = () => {
  return (
    <div className="w-full fixed p-8 z-4">
      <div className="flex items-center justify-between flex-wrap">
        <NavigationMenu>
          <Button className="w-10 h-10 bg-primary me-1.5" asChild>
            <Link href={"/"}></Link>
          </Button>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Games</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                  {games.map((game) => (
                    <ListItem
                      key={game.title}
                      title={game.title}
                      href={game.href}
                    >
                      {game.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <Button
          asChild
          className={buttonVariants({ size: "lg", variant: "outline" })}
        >
          <Link href="/login">
            <LogIn />
            <span className="hidden md:block">Login</span>
          </Link>
        </Button>
      </div>
    </div>
  );
};

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
