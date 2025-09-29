import PhishingDataChart from "@/components/phishing-data-chart";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-10 mx-auto max-w-[90rem]">
      <section className="h-[60vh] grid grid-rows-2 gap-8 md:grid-rows-1 md:grid-cols-[1fr_25rem] leading-tight">
        <div className="flex flex-wrap justify-center items-center">
          <div className="text-center md:text-left">
            <h1 className="font-bold text-[4rem] md:text-[5rem] lg:text-[6rem] xl:text-[10rem]">
              App Name
            </h1>
            <h2 className="text-balance text-[1.5rem] md:text-[2rem]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio
              voluptatum autem iure laudantium nam vitae sit quo sed earum amet
              doloribus?
            </h2>
            <Button
              asChild
              className={buttonVariants({
                size: "hero",
                className: "mt-8 shadow-lg",
              })}
            >
              <Link href="/login">Sign Up</Link>
            </Button>
          </div>
        </div>
        <div className="bg-purple-100"></div>
      </section>

      <section className="h-[60vh]">
        <div className="flex flex-col items-center">
          <div className="w-75 h-15 relative -rotate-3 bg-radial from-chart-3 to-blue-800 text-background shadow-lg md:w-100 md:h-25 md:top-4">
            <h2 className="h-full flex justify-center items-center text-4xl font-medium md:text-7xl">
              phishing
            </h2>
          </div>
          {/* <p className="text-lg max-w-[30rem] text-center text-secondary-foreground z-1">
            <i>
              “Phishing remains unsolvable—there's no patch for human
              gullibility."
            </i>
          </p> */}
        </div>

        <PhishingDataChart />
      </section>
    </div>
  );
}
