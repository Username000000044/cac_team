"use client";

import PhishingDataChart from "@/components/charts/chart-landing";
import { GlobePhishing } from "@/components/models/globe-amount";
import { Button, buttonVariants } from "@/components/ui/button";

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-[1rem] px-8 overflow-hidden">
      <section className="mt-10 mx-auto max-w-[110rem] grid grid-cols-1 grid-rows-2 md:grid-cols-[2fr_1fr] md:grid-rows-1 leading-tight">
        <div className="relative z-2 items-center text-center p-4 md:text-left md:items-start md:p-0">
          <h1 className="text-[3rem] md:text-[7rem] text-foreground font-bold md:leading-[5.9rem]">
            Surf 🏄‍♂️
            <br />
            on the internet <br />
            without fear.
          </h1>
          <h2 className="text-[1rem] md:text-[1.2rem] mt-3 text-balance">
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
                className: "shadow-lg text-lg",
              })}
            >
              <Link href="/login">Use PhishHook Free</Link>
            </Button>
            <Button
              asChild
              className={buttonVariants({
                size: "hero",
                variant: "secondary",
                className: "shadow-lg bg-secondary text-lg",
              })}
            >
              <Link href="/login">Login</Link>
            </Button>
          </div>
        </div>
        <div className="relative z-1">
          <GlobePhishing />
        </div>
      </section>

      <section className="relative -mt-20 md:-mt-10 z-1">
        <PhishingDataChart />
      </section>
    </div>
  );
}
