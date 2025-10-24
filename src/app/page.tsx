"use client";

import PhishingDataChart from "@/components/charts/chart-landing";
import { GlobePhishing } from "@/components/models/globe-amount";
import { Button, buttonVariants } from "@/components/ui/button";
import { LogIn } from "lucide-react";

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col flex-1 px-8 h-full">
      <section className="xl:mt-10 mx-auto max-w-[110rem] grid grid-cols-1 grid-rows-2 md:grid-cols-[3fr_1fr] md:grid-rows-1 leading-tight">
        <div className="relative z-2 items-center text-center p-4 md:text-left md:items-start md:p-0">
          <h1 className="text-[4rem] md:text-[7rem] 2xl:text-[11rem] text-foreground font-bold leading-[3.4rem] md:leading-[5rem] 2xl:leading-[9.5rem] mt-20">
            surf 🏄‍♂️
            <br />
            on the internet <br />
            without fear.
          </h1>
          <h2 className="text-[1rem] md:text-[1.2rem] xl:text-3xl mt-3 text-balance">
            Sharpen your instincts and outsmart real-world scams with
            interactive, personalized phishing training through games and
            personalized emails.
          </h2>
          <div className="flex flex-col mt-10 gap-4 md:flex-row">
            <Button
              asChild
              className={buttonVariants({
                size: "hero",
                variant: "outline",
                className: "shadow-lg",
              })}
            >
              <Link href="/login">Use PhishHook Free</Link>
            </Button>
            <Button
              asChild
              className={buttonVariants({
                size: "hero",
                variant: "secondary",
                className: "shadow-lg bg-secondary",
              })}
            >
              <Link href="/login">
                <LogIn className="size-5" /> Login
              </Link>
            </Button>
          </div>
        </div>
        <div className="relative z-0">
          <GlobePhishing />
        </div>
      </section>

      {/* <section className="relative -mt-30 md:-mt-0 z-1">
        <PhishingDataChart />
      </section> */}
    </div>
  );
}
