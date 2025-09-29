import PhishingDataChart from "@/components/phishing-data-chart";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-10 mx-auto max-w-[60rem]">
      <section className="grid grid-rows-2 gap-8 md:grid-rows-1 md:grid-cols-[1fr_20rem] leading-tight">
        <div className="flex flex-wrap justify-center items-center">
          <div className="text-center md:text-left">
            <h1 className="font-bold text-[4rem] md:text-[3rem] lg:text-[4rem] xl:text-[6rem]">
              App Name
            </h1>
            <h2 className="text-balance text-[1.5rem] lg:text-[1.7rem] text-muted-foreground">
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
        <div className="bg-primary-foreground border"></div>
      </section>

      <section>
        <div className="flex flex-col items-center">
          <div className="w-75 h-15 relative -rotate-3 bg-secondary text-secondary-foreground shadow-lg md:w-75 md:h-15 md:top-4">
            <h2 className="h-full flex justify-center items-center text-4xl font-medium border-2 border-green-300 md:text-5xl">
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
