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
          <h1 className="text-[2rem] md:text-[5.5rem] text-foreground font-bold md:leading-[5rem]">
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
        <div className="relative -mt-15 md:m-0 z-1">
          <Image
            className="rotate-10 mx-auto scale-70 shadow-[11px_11px_0px_0px_var(--card)] md:scale-90"
            src="/hero.jpg"
            width={300}
            height={400}
            alt="filler image for hero"
          />
        </div>
      </section>

      <section className="relative -mt-30 md:-mt-20 z-0">
        <PhishingDataChart />
      </section>
    </div>
  );
}
