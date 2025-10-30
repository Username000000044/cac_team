"use client";

import { useEffect, useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { ChevronDown, Home } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { LeaderboardItem } from "@/components/leaderboard-item";

interface Header {
  from: string;
  date: Date;
  subject: string;
}

interface Body {
  content: string;
}

interface Emails {
  header: Header;
  body: Body;
  isScam: boolean;
}

// https://cp-18.s3.us-east-1.amazonaws.com/cp18_pr/CP18_Server2022_Practice_Answer_Key.pdf

const urls: Emails[] = [
  {
    header: {
      from: "hr@company-example.com",
      subject: "Welcome to Acme Corp — Onboarding Steps",
      date: new Date("2025-10-08T00:00:00.000Z"),
    },
    body: {
      content:
        "Hi Jamie,\n\nWelcome to Acme Corp! Please review the attached onboarding packet and complete the new-hire paperwork by Friday. If you have questions, reply to this email or contact HR at hr@company-example.com.\n\nBest,\nHR Team",
    },
    isScam: false,
  },
  {
    header: {
      from: "it-support@company-example.com",
      subject: "Scheduled Maintenance: File Server Upgrade (Sat 10/11)",
      date: new Date("2025-10-06T14:30:00.000Z"),
    },
    body: {
      content:
        "Dear all,\n\nWe will upgrade the file server on Saturday, Oct 11 between 02:00–06:00 UTC. During this window network shares may be unavailable. No action required from you.\n\nThanks,\nIT Support",
    },
    isScam: false,
  },
  {
    header: {
      from: "invoices@vendor-example.com",
      subject: "Invoice #45321 for September services",
      date: new Date("2025-10-01T08:15:00.000Z"),
    },
    body: {
      content:
        "Hello,\n\nAttached is invoice #45321 for services rendered in September. Payment terms: Net 30. Please let us know if you need additional documentation.\n\nRegards,\nAccounts Receivable",
    },
    isScam: false,
  },
  {
    header: {
      from: "events@community-center.com",
      subject: "Reminder: Volunteer Orientation — Tuesday 6pm",
      date: new Date("2025-09-30T12:00:00.000Z"),
    },
    body: {
      content:
        "Hi Sam,\n\nA friendly reminder about volunteer orientation this Tuesday at 6pm in the main hall. Bring a photo ID. Light refreshments provided.\n\nCheers,\nCommunity Center",
    },
    isScam: false,
  },
  {
    header: {
      from: "no-reply@ticketing.com",
      subject: "Your support ticket #98765 has been updated",
      date: new Date("2025-10-05T09:45:00.000Z"),
    },
    body: {
      content:
        "Ticket #98765: Our engineering team has implemented a fix. Please verify on your end and reply to this ticket if the issue persists.\n\nThanks,\nSupport Team",
    },
    isScam: false,
  },
  {
    header: {
      from: "newsletter@product-updates.com",
      subject: "Product updates — October release notes",
      date: new Date("2025-10-03T16:20:00.000Z"),
    },
    body: {
      content:
        "Hi,\n\nWe released several improvements in October: faster search, improved sync, and new integrations. Read the full release notes on our website.\n\n— Product Team",
    },
    isScam: false,
  },
  {
    header: {
      from: "recruiter@jobs.com",
      subject: "Interview invitation — Software Engineer",
      date: new Date("2025-10-02T11:00:00.000Z"),
    },
    body: {
      content:
        "Hello Alex,\n\nWe reviewed your application and would like to invite you to a 45-minute video interview next week. Please reply with your availability.\n\nBest,\nRecruiting",
    },
    isScam: false,
  },
  {
    header: {
      from: "billing@cloud-storage.com",
      subject: "Payment receipt for subscription ending 10/01",
      date: new Date("2025-10-01T07:05:00.000Z"),
    },
    body: {
      content:
        "Hi,\n\nThank you — your payment for the monthly subscription ending Oct 1 has been processed. No action required.\n\nSincerely,\nBilling Team",
    },
    isScam: false,
  },
  {
    header: {
      from: "team-lead@dept.com",
      subject: "Weekly sync — agenda and notes",
      date: new Date("2025-10-07T18:00:00.000Z"),
    },
    body: {
      content:
        "Team,\n\nAttached: agenda for Monday’s weekly sync. Please review items 2 and 4 before the meeting.\n\nThanks,\nDana",
    },
    isScam: false,
  },
  {
    header: {
      from: "security@company-example.com",
      subject: "Phishing awareness training — required by Oct 31",
      date: new Date("2025-10-04T13:00:00.000Z"),
    },
    body: {
      content:
        "All employees:\n\nComplete the mandatory phishing awareness course by Oct 31. Log in to the training portal via the Learning tab in the company intranet.\n\nRegards,\nSecurity Team",
    },
    isScam: false,
  },
  {
    header: {
      from: "billing@payment-portal.com",
      subject: "URGENT: Your account will be suspended — verify now",
      date: new Date("2025-10-08T00:00:00.000Z"),
    },
    body: {
      content:
        "Dear customer,\n\nWe detected unusual activity. Verify your account immediately. Failure to verify will result in suspension.\n\nRegards,\nBilling Team",
    },
    isScam: true,
  },
  {
    header: {
      from: "it-admin@company-support.com",
      subject: "Password expiry — immediate action required",
      date: new Date("2025-10-07T22:10:00.000Z"),
    },
    body: {
      content:
        "Your password expires today. Reset your password now.\n\nIT Department",
    },
    isScam: true,
  },
  {
    header: {
      from: "service@banking-example.com",
      subject: "Unusual login detected — confirm your identity",
      date: new Date("2025-10-06T09:00:00.000Z"),
    },
    body: {
      content:
        "We noticed a login from a new device. Confirm your identity by entering your details.\n\nSecurity Team",
    },
    isScam: true,
  },
  {
    header: {
      from: "support@shippings.com",
      subject: "Delivery attempt failed — download invoice",
      date: new Date("2025-10-05T15:30:00.000Z"),
    },
    body: {
      content:
        "Dear recipient,\n\nYour parcel could not be delivered. Download the invoice to reschedule.\n\nShipping Dept.",
    },
    isScam: true,
  },
  {
    header: {
      from: "admin@webmail.com",
      subject: "Verify your mailbox to avoid deletion",
      date: new Date("2025-10-04T08:45:00.000Z"),
    },
    body: {
      content:
        "We will delete inactive mailboxes. Verify now to keep your account active.\n\nMail Admin",
    },
    isScam: true,
  },
  {
    header: {
      from: "helpdesk@vpn-service.com",
      subject: "New sign-in — approve this device",
      date: new Date("2025-10-03T20:00:00.000Z"),
    },
    body: {
      content:
        "A new device attempted to sign in. If this wasn't you, approve or deny here.\n\nHelpdesk",
    },
    isScam: true,
  },
  {
    header: {
      from: "rewards@loyalty.com",
      subject: "You won a $500 gift card — claim now",
      date: new Date("2025-10-02T11:11:00.000Z"),
    },
    body: {
      content:
        "Congratulations! Claim your reward by providing your shipping details.\n\nPromotions",
    },
    isScam: true,
  },
  {
    header: {
      from: "ceo@quickpay.com",
      subject: "Wire transfer request — urgent",
      date: new Date("2025-10-01T07:25:00.000Z"),
    },
    body: {
      content:
        "This is the CEO. Send a wire to the account attached in the document. Contact me once done.",
    },
    isScam: true,
  },
  {
    header: {
      from: "account@social-media.com",
      subject: "We detected suspicious activity on your profile",
      date: new Date("2025-09-30T13:00:00.000Z"),
    },
    body: {
      content:
        "Your account was flagged for impersonation. Verify your identity to avoid removal.\n\nSupport",
    },
    isScam: true,
  },
  {
    header: {
      from: "taxes@government.com",
      subject: "Refund available — submit tax details",
      date: new Date("2025-09-29T10:00:00.000Z"),
    },
    body: {
      content:
        "You are eligible for a tax refund. Provide your bank details to receive funds.\n\nTax Office",
    },
    isScam: true,
  },
];

export default function URLPage() {
  const numberOfQuestions = 10;

  const [randomIndexArray, setRandomIndexArray] = useState<number[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<Emails | null>(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [response, setResponse] = useState<boolean[]>([]);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    // Generate 8 unique and random index's on mount

    const newArray: number[] = [];
    while (newArray.length < numberOfQuestions) {
      let randomIndex = randomURLIndex();
      while (newArray.includes(randomIndex)) {
        randomIndex = randomURLIndex(); // prevents same index from being choosen so all questions are different
      }
      newArray.push(randomIndex);
    }
    setRandomIndexArray(newArray);
    setCurrentQuestion(urls[newArray[0]]);
  }, []);

  useEffect(() => {
    // When the last question is answered
    if (response.length == numberOfQuestions) {
      setIsButtonDisabled(true);
      setIsDialogOpen(true);
    } else {
      setIsButtonDisabled(false);
      setIsDialogOpen(false);
    }
    console.log(response);
  }, [response]);

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    questionResponse(event);
    nextQuestion();
  };

  const questionResponse = (event: React.MouseEvent<HTMLButtonElement>) => {
    // safe = not a scam
    // Scam = scam
    const isScam = event.currentTarget.dataset.isscam === "true";
    setResponse((previousArray) => [...previousArray, isScam]);

    const givenAnswer = isScam;
    const correctAnswer = currentQuestion?.isScam;

    if (givenAnswer === correctAnswer)
      setCorrectAnswers((previousNumber) => previousNumber + 1);
  };

  const nextQuestion = () => {
    if (currentQuestionIndex < numberOfQuestions - 1) {
      setCurrentQuestionIndex((prev) => {
        const newIndex = prev + 1;
        setCurrentQuestion(urls[randomIndexArray[newIndex]]);
        return newIndex;
      });
    }
  };

  const date = currentQuestion?.header.date.toLocaleTimeString();

  return (
    <>
      <div className="gap-5 max-w-[90rem] xl:max-w-[90rem] grid grid-cols-1 grid-rows-2 md:grid-cols-[3fr_1fr] md:grid-rows-1 z-2">
        <div className="flex flex-col gap-5">
          <Card className="h-[85%]">
            <CardHeader>
              <CardTitle>Email Verifier</CardTitle>
              <CardDescription>
                Is the URL (Uniform Resource Locator) safe?
              </CardDescription>
              <CardAction>
                {currentQuestionIndex + 1}/{numberOfQuestions}
              </CardAction>
            </CardHeader>
            <CardContent className="flex items-center justify-center h-full">
              {currentQuestion && (
                <div className="flex flex-wrap text-background bg-foreground p-4">
                  <Image
                    src="https://avatar.iran.liara.run/public/"
                    width={50}
                    height={50}
                    alt="Email profile"
                    className="w-15 h-15"
                  ></Image>

                  <div className="ml-4 max-w-150 pt-2">
                    <h2 className="mb-4 text-2xl font-bold">
                      {currentQuestion.header.subject}
                    </h2>
                    <div className="flex flex-wrap justify-between">
                      <p className="font-medium">
                        {currentQuestion.header.from}
                      </p>
                      <p className="text-sm text-muted-foreground">{date}</p>
                    </div>
                    <p className="flex items-center text-muted-foreground text-sm">
                      to me <ChevronDown size={15} />
                    </p>
                    <p className="mt-1">{currentQuestion.body.content}</p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
          <div className="h-[15%]">
            <div className="flex h-full">
              <Button
                onClick={onClick}
                className={buttonVariants({ size: "game", variant: "outline" })}
                disabled={isButtonDisabled}
                data-isscam="false"
              >
                Safe
              </Button>
              <Button
                onClick={onClick}
                className={buttonVariants({ size: "game", variant: "outline" })}
                disabled={isButtonDisabled}
                data-isscam="true"
              >
                Scam
              </Button>
            </div>
          </div>
        </div>
        <div className="h-[100%] p-2 text-center">
          <h2 className="text-3xl mb-4">Leadboard</h2>
          <div className="flex flex-col">
            <LeaderboardItem
              rank="1"
              name="John"
              score="10/10"
              date={new Date("2013-05-18T10:25:31Z")}
              img="https://avatar.iran.liara.run/public/boy"
            />
            <LeaderboardItem
              rank="2"
              name="Tyrone"
              score="10/10"
              date={new Date("1988-11-09T08:44:02Z")}
              img="https://avatar.iran.liara.run/public/girl"
            />
            <LeaderboardItem
              rank="3"
              name="Jayvn"
              score="10/10"
              date={new Date("2021-02-28T22:12:19Z")}
              img="https://avatar.iran.liara.run/public/boy"
            />
            <LeaderboardItem
              rank="4"
              name="Muhammad"
              score="10/10"
              date={new Date("1995-07-22T15:59:55Z")}
              img="https://avatar.iran.liara.run/public/girl"
            />
            <LeaderboardItem
              rank="5"
              name="Bob"
              score="9/10"
              date={new Date("2006-09-01T19:30:08Z")}
              img="https://avatar.iran.liara.run/public/boy"
            />
          </div>
        </div>
      </div>

      <AlertDialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-2xl sm:text-4xl">
              Congratulations! 🎉
            </AlertDialogTitle>
            <AlertDialogDescription className="text-lg">
              You have acheived a {correctAnswers}/{numberOfQuestions} score!
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction
              className={buttonVariants({ variant: "outline" })}
              asChild
            >
              <Link href="/">
                <Home />
              </Link>
            </AlertDialogAction>
            <AlertDialogAction onClick={() => window.location.reload()}>
              Play Again
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

function randomURLIndex(): number {
  return Math.floor(Math.random() * urls.length);
}
