import * as React from "react";
import Link from "next/link";

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
  return (
    <div className="flex items-center justify-between flex-wrap">
      <NavigationMenu>
        <div className="w-10 h-10 bg-primary me-1.5"></div>
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
          <NavigationMenuItem>
            <NavigationMenuLink
              className={navigationMenuTriggerStyle()}
              asChild
            >
              <Link href="/about">About Us</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <Button asChild className={buttonVariants({ size: "lg" })}>
        <Link href="/login">
          <LogIn />
          <span className="hidden md:block">Login</span>
        </Link>
      </Button>
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
