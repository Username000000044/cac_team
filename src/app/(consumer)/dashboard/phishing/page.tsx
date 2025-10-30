"use client";

import TablePhishing from "@/components/table-phishing";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import Link from "next/link";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { CornerDownLeft, CornerUpLeft, Mail } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

emailjs.init({
  publicKey: "2Pl2CLeyYTrABRpOR",
  // Do not allow headless browsers
  blockHeadless: true,
  limitRate: {
    // Set the limit rate for the application
    id: "app",
    // Allow 1 request per 10s
    throttle: 10000,
  },
});

export default function PhishingPage() {
  const numberOfScamsFellFor = 25;
  const scamsPopCalc = (8_200_000_000 / 100_000_000) * numberOfScamsFellFor; // 1/100,000,000th of earth population * numberOfScamsFellFor

  function sendDemoEmail() {
    emailjs
      .send("service_ovo33b4", "template_ahh5upv", {
        title: "Your powerpoint presentation",
        name: "Teamwork Presentation",
        time: Date.now(),
        message:
          "I've completed the powerpoint presentation from the recent HR meeting. Please visit: http://microtech/powerpoint/presentation/1",
        email: "johnben@gmail.com",
      })
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          toast.warning("Email has been sent!");
        },
        (error) => {
          console.log("FAILED...", error);
          toast.warning("Email cannot been sent!");
        }
      );
  }
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="min-h-[200px] rounded-lg md:min-w-[450px]"
    >
      <ResizablePanel defaultSize={60} minSize={40}>
        <Toaster position="top-right" richColors />
        {/* nav */}
        <div className="flex items-center justify-between w-full p-5">
          <div className="flex items-center text-muted-foreground">
            <Link href="/">
              <Image
                src="/img/logo.svg"
                alt="logo"
                width={100}
                height={100}
                className="w-12 h-12 opacity-50"
              ></Image>
            </Link>
            <Link href="/dashboard">
              <CornerDownLeft size={20} className="ml-4 text-foreground" />
            </Link>
          </div>
          <Button variant="secondary" onClick={() => sendDemoEmail()}>
            <Mail />
            Try Email
          </Button>
        </div>
        {/* data */}
        <div className="flex w-full p-4">
          {/* <div className="flex justify-center items-center w-full h-40 bg-card bg-card border border-border ">
            <h1 className="text-4xl font-mono">
              You are most suseptible to <u>Email spoofing</u>
            </h1>
          </div> */}
        </div>
        <div className="flex justify-between h-40 p-4 gap-3">
          <div className="bg-card w-1/3 ">
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
                Difficuly Hard
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
