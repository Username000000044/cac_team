import AreaPhishing from "@/components/charts/chart-area";
import { ResponseBarChart } from "@/components/charts/chart-response";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ChevronDown, ChevronUp, GitPullRequestClosed } from "lucide-react";

export default function DashboardPage() {
  return (
    <div>
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-screen max-w-full md:min-w-[450px]"
      >
        <ResizablePanel defaultSize={75} minSize={50}>
          <div className="relative flex flex-col h-full p-0">
            {/* Nav */}
            <div className="flex justify-between items-center mx-12 my-10">
              <div className="flex items-center">
                <Button
                  className={buttonVariants({
                    variant: "outline",
                    size: "icon-lg",
                  })}
                >
                  <GitPullRequestClosed />
                </Button>
                <p className="text-muted ml-20">attacks / 3 months</p>
              </div>
              <div className="w-30 h-10 bg-card border border-border rounded-lg"></div>
            </div>
            {/* Text */}
            <div className="ml-40 mt-20 text-focus-in">
              <span className="flex flex-col">
                <h1 className="text-[7rem] bg-gradient-to-r from-foreground to-secondary inline-block text-transparent bg-clip-text ">
                  $10.000.000.000.000
                </h1>
              </span>
              <div className="flex items-center -mt-10">
                <ChevronDown color="var(--color-red-500)" size={20} />
                <h2 className="text-red-500 text-[2.5rem] mt-6">
                  17.400.000.000 (57.471,3%)
                </h2>
              </div>
              {/* <h3 className="text-sm">
                Approx. 10 trillion to be lost through phishing in 2025
                according to major data sites.
              </h3> */}
            </div>

            {/* Graph */}
            <AreaPhishing />

            {/* Cards */}

            <div className="relative top-120 left-9 font-mono">
              <p className="text-lg">
                What caused this{" "}
                <span className="text-secondary">ungovernable situation?</span>
              </p>
              <div className="grid grid-cols-4 gap-4 mt-10 ">
                <div className="h-25 w-min bg-card border-l-4 p-5 border-yellow-500">
                  Lorem Ipsum
                </div>
                <div className="h-25 w-min bg-card border-l-4 p-5 border-yellow-500">
                  Lorem Ipsum
                </div>
                <div className="h-25 w-min bg-card border-l-4 p-5 border-yellow-500">
                  Lorem Ipsum
                </div>
                <div className="h-25 w-min bg-card border-l-4 p-5 border-yellow-500">
                  Lorem Ipsum
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-foreground text-[10rem]">$1000</h1>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={25}>
          <div className="flex h-full items-center justify-center bg-card p-6">
            <span className="font-semibold">Sidebar</span>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

// <div className="flex">
//       <div className="grid grid-cols-1 grid-rows-5 gap-5 w-full md:grid-cols-3 md:grid-rows-2">
//         {/* Charts */}
//         <ResponseBarChart className="col-span-full bg-card order-5 md:order-1" />
//         <AgePieChart className="col-span-1 bg-card order-3 md:order-2" />

//         {/* Advertisement */}
//         <div className="col-span-1 md:col-span-1 flex flex-col xl:items-center xl:text-center xl:justify-center p-5 border border-chart-2 bg-chart-5 rounded-lg order-1 md:order-3">
//           <h2 className="text-sm lg:text-lg text-chart-1 mb-5">PhishHook</h2>
//           <h1 className="text-[2.5rem] md:text-[2rem] lg:text-[2.3rem] xl:text-[3rem] font-light text-balance text-card-foreground leading-12 overflow-clip">
//             Get <span className="font-bold">Personalalized</span> Phishing
//             <span className="font-bold"> Emails.</span>
//           </h1>
//           <Button
//             className={`${buttonVariants({
//               size: "xl",
//               variant: "phishing",
//             })} mt-8 w-[70%] shadow-[0px_0px_15px_2px_var(--chart-3)] animate-pulse duration-3000`}
//             asChild
//           >
//             <Link href="/dashboard/subscription">Sign Up</Link>
//           </Button>
//         </div>

//         {/* Charts */}
//         <PopulationBarChart className="col-span-1 bg-card order-4 md:order-4" />
//       </div>
//     </div>
