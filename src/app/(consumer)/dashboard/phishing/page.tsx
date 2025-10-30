import TablePhishing from "@/components/table-phishing";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export default function PhishingPage() {
  const numberOfScamsFellFor = 25;
  const scamsPopCalc = (8_200_000_000 / 100_000_000) * numberOfScamsFellFor; // 1/100,000,000th of earth population * numberOfScamsFellFor

  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[200px] rounded-lg md:min-w-[450px]"
    >
      <ResizablePanel defaultSize={60} minSize={40}>
        {/* nav */}
        <div className="flex items-center justify-between w-full p-5">
          <Link href="/">
            <Image
              src="/img/logo.svg"
              alt="logo"
              width={100}
              height={100}
              className="w-10 h-10 opacity-50"
            ></Image>
          </Link>
          <h1 className="ml-5 text-sm">Phishing Report</h1>
        </div>
        {/* data */}
        <div className="flex justify-between h-40 p-4 gap-3 ">
          <div className="bg-card w-1/3">
            <div className="flex flex-col h-full justify-center items-center border border-border">
              <p className="text-7xl">{numberOfScamsFellFor}</p>
              <p className="text-sm">scams fell for</p>
            </div>
          </div>
          <div className="bg-card w-1/3">
            <div className="flex flex-col h-full justify-center items-center border border-border">
              <p className="text-4xl">~4 per month</p>
              <p className="text-sm">scams fell for</p>
            </div>
          </div>
          <div className="bg-card w-1/3">
            <div className="flex flex-col h-full justify-center items-center border border-border">
              <p className="inline-flex items-center text-4xl">
                Difficuly{" "}
                <Separator orientation="vertical" className="mx-4 !h-7" />
                Hard
              </p>
              <p className="text-sm">difficulty set to Hard for 20 days</p>
            </div>
          </div>
        </div>
        <TablePhishing />
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel defaultSize={40} minSize={40}>
        <div className="relative text-center mx-auto max-w-[45rem] pt-25 z-1">
          <h2 className="flex flex-col font-semibold text-5xl">
            Visual Respresentation
          </h2>
          <p className="text-muted-foreground">
            A visual representation of how many phishing scams would have
            occured if 1/100,000,000th of the earth's population (~82 people)
            fell for the same amount of scams as you.
          </p>
        </div>

        <div className="relative w-full h-full overflow-y-auto flex flex-col items-center mt-30">
          <p>
            (<span className="text-primary">{scamsPopCalc}</span>) scams would
            have occured.
          </p>
          <div className="flex flex-wrap w-[30rem] gap-2 pt-4 pb-100">
            {Array.from({
              length: scamsPopCalc,
            }).map((_, i) => (
              <div
                key={i}
                className={`bg-primary rounded-full w-[1px] h-[1px]`}
              ></div>
            ))}
          </div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
}
