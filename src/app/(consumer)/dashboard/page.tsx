"use client";

import AreaPhishing from "@/components/charts/chart-area";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChevronDown,
  ChevronDownIcon,
  ChevronUp,
  DraftingCompass,
  GitPullRequestClosed,
  Search,
  Shrimp,
  Smartphone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { SetStateAction, useState } from "react";

export default function DashboardPage() {
  const [difficulty, setDifficulty] = useState("Select Difficuluty");

  const handleSelect = (difficulty: SetStateAction<string>) => {
    setDifficulty(difficulty);
  };

  return (
    <div>
      <ResizablePanelGroup
        direction="horizontal"
        className="min-h-screen max-w-full md:min-w-[450px]"
      >
        <ResizablePanel defaultSize={82} minSize={50}>
          <div className="relative flex flex-col h-full p-0 overflow-y-auto overflow-x-hidden no-scrollbar">
            {/* Nav */}
            <div className="flex justify-between items-center mx-12 my-10">
              <div className="flex items-center">
                <Button variant="outline" size="icon-lg">
                  <GitPullRequestClosed />
                </Button>
                <p className="text-muted ml-20">attacks / 3 months</p>
              </div>
              {/* <Link href="/">
                <Image
                  src="/img/logo.svg"
                  alt="logo"
                  width={100}
                  height={100}
                  className="w-10 h-10 opacity-50"
                ></Image>
              </Link> */}
            </div>
            {/* Text */}
            <div className="ml-40 mt-20 text-focus-in">
              <span className="flex flex-col">
                <h1 className="text-[8rem] bg-gradient-to-r from-foreground from-10% to-background to-70% inline-block text-transparent bg-clip-text ">
                  $10.000.000.000.000
                </h1>
              </span>
              <div className="flex items-center -mt-10">
                <ChevronDown color="var(--primary)" size={20} />
                <h2 className="text-primary text-[2.5rem] mt-6">
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
                <span className="text-primary">ungovernable situation?</span>
              </p>
              <div className="grid grid-cols-3 max-w-full gap-4 mt-10 ">
                <div className="bg-card border-l-4 p-5 border-foreground/5">
                  <h3>Malicious attachments</h3>
                  <p className="text-muted-foreground">
                    These are files sent in emails that can install harmful
                    software when opened. They often pretend to be invoices,
                    resumes, or important documents.
                  </p>
                </div>
                <div className="bg-card border-l-4 p-5 border-foreground/5">
                  <h3>Social engineering</h3>
                  <p className="text-muted-foreground">
                    Scammers trick people into giving away information by
                    pretending to be someone trustworthy. They use emotions like
                    fear or urgency to make you act quickly.
                  </p>
                </div>
                <div className="bg-card border-l-4 p-5 border-foreground/5">
                  <h3>Spelling and layout</h3>
                  <p className="text-muted-foreground">
                    Many phishing emails have bad grammar, strange wording, or
                    odd designs. These small mistakes can be clues that the
                    message isn’t real.
                  </p>
                </div>
                <div className="bg-card border-l-4 p-5 border-foreground/5">
                  <h3>Requests for information</h3>
                  <p className="text-muted-foreground">
                    Phishing emails often ask for personal details like
                    passwords or credit cards. Legitimate companies will never
                    ask for this over email.
                  </p>
                </div>
                <div className="bg-card border-l-4 p-5 border-foreground/5">
                  <h3>Email spoofing</h3>
                  <p className="text-muted-foreground">
                    Scammers make emails look like they’re from real people or
                    companies. The sender’s address might be slightly misspelled
                    or fake.
                  </p>
                </div>
                <div className="bg-card border-l-4 p-5 border-foreground/5">
                  <h3>Fear of repercussions</h3>
                  <p className="text-muted-foreground">
                    Some messages scare you by claiming you’ll lose access or
                    face trouble if you don’t respond. This pressure is used to
                    make you act before thinking.
                  </p>
                </div>
                <div className="bg-card border-l-4 p-5 border-foreground/5">
                  <h3>Hidden Links</h3>
                  <p className="text-muted-foreground">
                    Links in phishing emails may look safe but lead to fake
                    websites. Hovering over them shows the real address before
                    clicking.
                  </p>
                </div>
                <div className="bg-card border-l-4 p-5 border-foreground/5">
                  <h3>Unreasonable threats</h3>
                  <p className="text-muted-foreground">
                    Phishing messages often use threats like account suspension
                    or fines. These are fake warnings meant to make you panic
                    and click.
                  </p>
                </div>
                <div className="bg-card border-l-4 p-5 border-foreground/5">
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
        <ResizablePanel defaultSize={18} minSize={15}>
          <div className="flex h-full bg-card/60">
            <div className="px-5 my-10 w-full">
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
                <h3 className="text-3xl text-white">
                  <b>Phishing</b> Tools
                </h3>
                {/* Used to immitate search functionality.*/}
              </div>

              <Separator className="my-4 bg-muted" />

              {/* Phishing Access */}

              <div className="w-full h-min px-10 py-15 bg-background/60 rounded-lg ">
                <h3 className="flex items-center text-3xl">
                  <b>User</b>&nbsp;dashboard
                </h3>
                <h4 className="text-lg">
                  Access a free personalized phishing plan.
                </h4>

                <Dialog>
                  <form>
                    <DialogTrigger asChild>
                      <Button className="mt-5">
                        <DraftingCompass />
                        Start Phishing Simulator
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>
                          Create <b>Phishing</b> environment
                        </DialogTitle>
                        <DialogDescription className="mb-5">
                          Personalize your phishing environment to suit your
                          personal online needs.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4">
                        <div className="grid gap-3">
                          <Label htmlFor="amount">Email</Label>
                          <Input
                            id="email"
                            type="text"
                            defaultValue="example@yahoo.com"
                            className="text-muted-foreground"
                          />
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="amount">Number of emails/week</Label>
                          <Input
                            id="amount"
                            type="number"
                            inputMode="numeric"
                            defaultValue="5"
                            className="text-muted-foreground"
                          />
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="duration">
                            Duration (Send emails until)
                          </Label>
                          <Input
                            id="duration"
                            type="date"
                            className="text-muted-foreground"
                          />
                        </div>
                        <div className="grid gap-3">
                          <p className="text-sm">Difficulty</p>
                          <div>
                            <DropdownMenu>
                              <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="w-full">
                                  {difficulty}
                                </Button>
                              </DropdownMenuTrigger>
                              <DropdownMenuContent>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem
                                  onSelect={() => handleSelect("Easy")}
                                >
                                  Easy
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                  onSelect={() => handleSelect("Medium")}
                                >
                                  Medium
                                </DropdownMenuItem>
                                <DropdownMenuItem
                                  onSelect={() => handleSelect("Hard")}
                                >
                                  Hard
                                </DropdownMenuItem>
                              </DropdownMenuContent>
                            </DropdownMenu>
                          </div>
                        </div>
                      </div>

                      <DialogFooter>
                        <DialogClose asChild>
                          <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button type="submit" asChild>
                          <Link href="/dashboard/phishing">Create</Link>
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </form>
                </Dialog>

                <Link href="/dashboard/phishing">
                  <p className="text-sm text-foreground/20 p-1 hover:underline">
                    or view existing simulator
                  </p>
                </Link>
              </div>
              {/* Games Group */}
              <div className="flex mt-5 w-ful">
                {/* Gap between separator and boxes */}
                <div className="flex gap-3 items-center w-full">
                  {/* Box 1 */}
                  <Button variant="outline" asChild>
                    <Link href="/url" className="grow text-muted-foreground">
                      URL Game
                    </Link>
                  </Button>
                  <Separator className="my-4 bg-muted" orientation="vertical" />

                  {/* Box 2 */}
                  <Button variant="outline" asChild>
                    <Link href="/url" className="grow text-muted-foreground">
                      Email Game
                    </Link>
                  </Button>
                </div>
              </div>

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
              </div>
            </div>
          </div>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}

function simSignUp() {}
