"use client"

import * as React from "react"
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"

const games: { title: string; href: string; description: string }[] = [
    {
        title: "Url Verifier",
        href: "/url",
        description: "Counterfeit URLs and their camouflaged appearnce."
    },
    {
        title: "Email Verifier",
        href: "/email",
        description: "Phisihing emails and their masked identify and author."
    },
]

export const Navbar = () => {
  return (
    <NavigationMenu viewport={false} className="m-2">
        <NavigationMenuList>
            <NavigationMenuItem asChild className={navigationMenuTriggerStyle()}>
                <Link href="/docs">About Us</Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
                <NavigationMenuTrigger>Games</NavigationMenuTrigger>
                <NavigationMenuContent>
                    <ul className="grid w-[200px] gap-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
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
  );
}


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
  )
}

