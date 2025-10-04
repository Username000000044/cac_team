"use client";

import PhishingDataChart from "@/components/chart-phishing";
import { Button, buttonVariants } from "@/components/ui/button";

import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-[1rem]">
      <section className="mx-auto max-w-[75rem] xl:max-w-[90rem] grid grid-cols-1 grid-rows-2 md:grid-cols-[2fr_1fr] md:grid-rows-1 leading-tight">
        <div className="relative z-2 flex flex-col justify-center items-center text-center p-4 md:text-left md:items-start md:p-0">
          <h1 className="font-bold text-[2rem] md:text-[3rem] lg:text-[4rem] xl:text-[9rem]">
            App
            <span className="text-primary"> Name</span>
          </h1>
          <h2 className="text-balance text-[1.5rem] lg:text-[1.8rem] xl:text-[2rem] text-muted-foreground">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
            voluptatum autem iure laudantium nam vitae sit quo sed earum amet
            doloribus?
          </h2>
          <Button
            asChild
            className={buttonVariants({
              size: "hero",
              className: "mt-10 shadow-lg",
            })}
          >
            <Link href="/login">Sign Up</Link>
          </Button>
        </div>
        <div className="-mt-10 md:m-0">
          <Image
            className="relative rotate-10 mx-auto scale-90"
            src="/hero.jpg"
            width={300}
            height={400}
            alt="filler image for hero"
          />
        </div>
      </section>

      <section className="relative -mt-45 z-1">
        <PhishingDataChart />
      </section>
    </div>
  );
}
