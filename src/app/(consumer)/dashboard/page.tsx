import ActivityChart from "@/components/charts/chart-activity";
import { AgePieChart } from "@/components/charts/chart-age";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="flex">
      <div className="grid grid-cols-1 grid-rows-5 w-full gap-5 md:grid-cols-3 md:grid-rows-3">
        <ActivityChart className="col-span-full bg-background order-2 md:order-1" />
        <AgePieChart className="col-span-1 bg-background order-3 md:order-2" />
        <div className="col-span-full md:col-span-1 flex flex-col xl:items-center xl:text-center xl:justify-center p-5 border border-chart-2 bg-chart-5 rounded-lg order-1 md:order-3">
          <h2 className="text-sm lg:text-lg text-chart-1 mb-5">PhishHook</h2>
          <h1 className="text-[2.5rem] md:text-[2rem] lg:text-[2.5rem] xl:text-[3rem] font-light text-balance text-card-foreground leading-12 overflow-clip">
            Get <span className="font-bold">Personalalized</span> Phishing
            <span className="font-bold"> Emails.</span>
          </h1>
          <Button
            className={`${buttonVariants({
              size: "xl",
              variant: "phishing",
            })} mt-8 w-[70%] shadow-[0px_0px_15px_2px_var(--chart-3)] animate-pulse duration-3000`}
          >
            Sign Up
          </Button>
        </div>
        <AgePieChart className="col-span-1 bg-background order-4 md:order-3" />
        <ActivityChart className="col-span-full bg-background order-5 md:order-4" />
      </div>
    </div>
  );
}
