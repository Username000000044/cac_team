import AreaPhishing from "@/components/charts/chart-area";
import { ResponseBarChart } from "@/components/charts/chart-response";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Separator } from "@/components/ui/separator";
import {
  ChevronDown,
  ChevronUp,
  GitPullRequestClosed,
  Search,
  Shrimp,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div>
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-screen max-w-full md:min-w-[450px]"
      >
        <ResizablePanel defaultSize={75} minSize={50}>
          <div className="relative flex flex-col h-full p-0 overflow-y-auto overflow-x-hidden no-scrollbar">
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
                <h1 className="text-[8rem] bg-gradient-to-r from-foreground from-10% to-background to-70% inline-block text-transparent bg-clip-text ">
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

            <div className="relative top-110 m-10">
              <p className="font-mono">
                What caused this{" "}
                <span className="text-secondary">ungovernable situation?</span>
              </p>
              <div className="grid grid-cols-3 max-w-full gap-4 mt-10 ">
                <div className="bg-card border-l-4 p-5 border-red-500">
                  <h3>Malicious attachments</h3>
                  <p className="text-muted-foreground">
                    These are files sent in emails that can install harmful
                    software when opened. They often pretend to be invoices,
                    resumes, or important documents.
                  </p>
                </div>
                <div className="bg-card border-l-4 p-5 border-red-500">
                  <h3>Social engineering</h3>
                  <p className="text-muted-foreground">
                    Scammers trick people into giving away information by
                    pretending to be someone trustworthy. They use emotions like
                    fear or urgency to make you act quickly.
                  </p>
                </div>
                <div className="bg-card border-l-4 p-5 border-red-500">
                  <h3>Spelling and layout</h3>
                  <p className="text-muted-foreground">
                    Many phishing emails have bad grammar, strange wording, or
                    odd designs. These small mistakes can be clues that the
                    message isn’t real.
                  </p>
                </div>
                <div className="bg-card border-l-4 p-5 border-red-500">
                  <h3>Requests for information</h3>
                  <p className="text-muted-foreground">
                    Phishing emails often ask for personal details like
                    passwords or credit cards. Legitimate companies will never
                    ask for this over email.
                  </p>
                </div>
                <div className="bg-card border-l-4 p-5 border-yellow-500">
                  <h3>Email spoofing</h3>
                  <p className="text-muted-foreground">
                    Scammers make emails look like they’re from real people or
                    companies. The sender’s address might be slightly misspelled
                    or fake.
                  </p>
                </div>
                <div className="bg-card border-l-4 p-5 border-yellow-500">
                  <h3>Fear of repercussions</h3>
                  <p className="text-muted-foreground">
                    Some messages scare you by claiming you’ll lose access or
                    face trouble if you don’t respond. This pressure is used to
                    make you act before thinking.
                  </p>
                </div>
                <div className="bg-card border-l-4 p-5 border-green-500">
                  <h3>Hidden Links</h3>
                  <p className="text-muted-foreground">
                    Links in phishing emails may look safe but lead to fake
                    websites. Hovering over them shows the real address before
                    clicking.
                  </p>
                </div>
                <div className="bg-card border-l-4 p-5 border-green-500">
                  <h3>Unreasonable threats</h3>
                  <p className="text-muted-foreground">
                    Phishing messages often use threats like account suspension
                    or fines. These are fake warnings meant to make you panic
                    and click.
                  </p>
                </div>
                <div className="bg-card border-l-4 p-5 border-green-500">
                  <h3>Unusual greetings</h3>
                  <p className="text-muted-foreground">
                    Messages that start with “Dear user” or other odd greetings
                    can be suspicious. Real companies usually use your real
                    name.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-foreground text-[10rem]">$1000</h1>
        </ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel defaultSize={25} minSize={25}>
          <div className="flex h-full bg-card">
            <div className="mx-12 my-10 w-full">
              {/* Nav */}
              <div className="flex justify-end items-center">
                <Link href="/account">
                  <Image
                    width={100}
                    height={100}
                    src="https://avatar.iran.liara.run/public/"
                    alt="user"
                    className="rounded-full bg-background w-12 h-12"
                  ></Image>
                </Link>
              </div>
              {/* Title */}
              <div className="mt-40 flex items-center justify-between">
                <h3 className="text-3xl">
                  <b>Phishing</b> Tools
                </h3>
                {/* Used to immitate search functionality.*/}
                <Link href="#">
                  <Search size={20} />
                </Link>
              </div>

              <Separator className="my-4 bg-muted" />

              {/* Phishing Access */}
              <Link href="dashboard/phishing">
                <div className="w-full h-min px-10 py-15 bg-background/60 rounded-lg ">
                  <h3 className="flex items-center text-3xl">
                    <b>User</b>&nbsp;dashboard
                  </h3>
                  <h4 className="text-lg">
                    Access a free personalized phishing plan.
                  </h4>

                  <Button
                    className={`mt-5 ${buttonVariants({
                      variant: "secondary",
                    })}`}
                  >
                    Access Phishing Simulator
                  </Button>
                </div>
              </Link>

              {/* <Separator className="my-4 bg-muted" /> */}

              {/* Boxes */}
              <div className="flex flex-col">
                {/* <p className="mt-5 text-muted-foreground">Info</p>
                <div className="flex mt-5">
                  <div className="w-[3px] bg-muted rounded"></div>
                  <div className="ml-4 flex flex-col gap-5 flex-1">
                    <Link href="/info">
                      <div className="relative h-15 rounded-lg overflow-hidden">
                        <div className="absolute inset-0 bg-[url(/img/graph.png)] bg-cover bg-top"></div>
                        <div className="absolute inset-0 bg-background/30 backdrop-blur-[4px]"></div>
                        <h3 className="relative z-10 flex items-center justify-center h-full text-2xl">
                          <b>Phishing</b>
                          &nbsp;Info
                        </h3>
                      </div>
                    </Link>
                  </div>
                </div> */}

                {/* Games Group */}
                <div className="flex mt-5">
                  {/* Gap between separator and boxes */}
                  <div className="flex flex-col gap-3 flex-1">
                    {/* Box 1 */}
                    <Link href="/url">
                      <div className="relative h-20 rounded-lg overflow-hidden shadow-md">
                        <div className="absolute inset-0 bg-[url(/img/game2.jpg)] bg-cover bg-center"></div>
                        <div className="absolute inset-0 bg-card/90 backdrop-blur-sm"></div>
                        <h3 className="relative z-10 flex items-center justify-center h-full text-2xl text-muted-foreground">
                          <b>URL</b> Game
                        </h3>
                      </div>
                    </Link>
                    {/* Box 2 */}
                    <Link href="/email">
                      <div className="relative h-20 rounded-lg overflow-hidden shadow-md">
                        <div className="absolute inset-0 bg-[url(/img/game1.jpg)] bg-cover bg-center"></div>
                        <div className="absolute inset-0 bg-card/90 backdrop-blur-sm"></div>
                        <h3 className="relative z-10 flex items-center justify-center h-full text-2xl text-muted-foreground">
                          <b>Email</b> Game
                        </h3>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
