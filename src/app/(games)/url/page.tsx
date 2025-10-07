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
import { Home } from "lucide-react";
import Link from "next/link";
import { LeaderboardItem } from "@/components/leaderboard-item";

interface URLs {
  protocol: string;
  subdomain: string;
  sld: string;
  tld: string;
  port: string;
  path: string;
  isScam: boolean;
}

const urls: URLs[] = [
  {
    protocol: "https",
    subdomain: "blog",
    sld: "techverse",
    tld: "com",
    port: "443",
    path: "/articles/latest",
    isScam: false,
  },
  {
    protocol: "http",
    subdomain: "shop",
    sld: "gizmohub",
    tld: "net",
    port: "80",
    path: "/products/list",
    isScam: false,
  },
  {
    protocol: "https",
    subdomain: "app",
    sld: "fintrack",
    tld: "org",
    port: "443",
    path: "/dashboard",
    isScam: false,
  },
  {
    protocol: "http",
    subdomain: "forum",
    sld: "gamecentral",
    tld: "io",
    port: "80",
    path: "/threads/popular",
    isScam: false,
  },
  {
    protocol: "https",
    subdomain: "www",
    sld: "foodie",
    tld: "co",
    port: "443",
    path: "/recipes/top-rated",
    isScam: false,
  },
  {
    protocol: "https",
    subdomain: "media",
    sld: "streamly",
    tld: "tv",
    port: "443",
    path: "/watch/featured",
    isScam: false,
  },
  {
    protocol: "http",
    subdomain: "dev",
    sld: "codex",
    tld: "tech",
    port: "80",
    path: "/projects/new",
    isScam: false,
  },
  {
    protocol: "https",
    subdomain: "support",
    sld: "helpdesk",
    tld: "com",
    port: "443",
    path: "/tickets/open",
    isScam: false,
  },
  {
    protocol: "http",
    subdomain: "api",
    sld: "weatherly",
    tld: "org",
    port: "80",
    path: "/v2/forecast",
    isScam: false,
  },
  {
    protocol: "https",
    subdomain: "news",
    sld: "dailybuzz",
    tld: "com",
    port: "443",
    path: "/world/latest",
    isScam: false,
  },
  {
    protocol: "http",
    subdomain: "login-secure",
    sld: "acctverify123",
    tld: "xyz",
    port: "80",
    path: "/confirm-access",
    isScam: true,
  },
  {
    protocol: "https",
    subdomain: "secure-login",
    sld: "user-validate",
    tld: "info",
    port: "443",
    path: "/account/verify",
    isScam: true,
  },
  {
    protocol: "http",
    subdomain: "mail",
    sld: "paypa1-notice",
    tld: "top",
    port: "80",
    path: "/invoices/view",
    isScam: true,
  },
  {
    protocol: "https",
    subdomain: "verify",
    sld: "banking-alerts",
    tld: "online",
    port: "443",
    path: "/security/challenge",
    isScam: true,
  },
  {
    protocol: "http",
    subdomain: "support-login",
    sld: "helpdesk-account",
    tld: "site",
    port: "80",
    path: "/reset-password",
    isScam: true,
  },
  {
    protocol: "https",
    subdomain: "confirm",
    sld: "secureacct-now",
    tld: "club",
    port: "443",
    path: "/confirm?token={token}",
    isScam: true,
  },
  {
    protocol: "http",
    subdomain: "update",
    sld: "card-update123",
    tld: "bid",
    port: "80",
    path: "/billing/update",
    isScam: true,
  },
  {
    protocol: "https",
    subdomain: "user",
    sld: "passport-verify",
    tld: "pw",
    port: "443",
    path: "/signin/secure",
    isScam: true,
  },
  {
    protocol: "http",
    subdomain: "account",
    sld: "verify-now-portal",
    tld: "cc",
    port: "80",
    path: "/auth/confirm",
    isScam: true,
  },
];

export default function URLPage() {
  const numberOfQuestions = 10;

  const [randomIndexArray, setRandomIndexArray] = useState<number[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState<URLs | null>(null);
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

  return (
    <>
      <div className="flex-1 w-full mx-auto gap-5 max-w-[90rem] xl:max-w-[90rem] grid grid-cols-1 grid-rows-2 md:grid-cols-[3fr_1fr] md:grid-rows-1">
        <div className="flex flex-col gap-5">
          <Card className="h-[85%]">
            <CardHeader>
              <CardTitle>URL Verifier</CardTitle>
              <CardDescription>
                Is the URL (Uniform Resource Locator) safe?
              </CardDescription>
              <CardAction>
                {currentQuestionIndex + 1}/{numberOfQuestions}
              </CardAction>
            </CardHeader>
            <CardContent className="flex flex-col justify-center items-center h-full text-center">
              {currentQuestion && (
                <h2 className="text-md md:text-3xl xl:text-5xl font-thin">
                  <span className="text-[#d29bff] font-normal">
                    {currentQuestion.protocol}
                  </span>
                  ://
                  <span className="text-[#9b6ecf] font-normal">
                    {currentQuestion.subdomain}
                  </span>
                  .
                  <span className="text-[#7a4fcf] font-normal">
                    {currentQuestion.sld}
                  </span>
                  .
                  <span className="text-[#9b6ecf] font-normal">
                    {currentQuestion.tld}
                  </span>
                  <span className="text-[#d29bff] font-normal">
                    {currentQuestion.path}
                  </span>
                </h2>
              )}
            </CardContent>
            <CardFooter className="flex-col text-center text-muted-foreground">
              {currentQuestion && (
                <div className="hidden md:flex items-start gap-5">
                  <div className="flex flex-col">
                    <p>Protocol (Scheme):</p>
                    <p>
                      {currentQuestion.protocol == "http"
                        ? "http (80)"
                        : "https (443)"}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <p>Subdomain:</p>
                    <p>{currentQuestion.subdomain}</p>
                  </div>
                  <div className="flex flex-col">
                    <p>Second-level Domain (SLD):</p>
                    <p>{currentQuestion.subdomain}</p>
                  </div>
                  <div className="flex flex-col">
                    <p>Top-level Domain (TLD):</p>
                    <p>{currentQuestion.tld}</p>
                  </div>
                  <div className="flex flex-col">
                    <p>Port:</p>
                    <p>{currentQuestion.port}</p>
                  </div>
                  <div className="flex flex-col">
                    <p>Path:</p>
                    <p>{currentQuestion.path}</p>
                  </div>
                </div>
              )}
            </CardFooter>
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
            <LeaderboardItem rank="1" name="John" score="10/10" date={new Date("2013-05-18T10:25:31Z")}/>
            <LeaderboardItem rank="2" name="Tyrone" score="10/10" date={new Date("1988-11-09T08:44:02Z")}/>
            <LeaderboardItem rank="3" name="Jayvn" score="10/10" date={new Date("2021-02-28T22:12:19Z")}/>
            <LeaderboardItem rank="4" name="Muhammad" score="10/10" date={new Date("1995-07-22T15:59:55Z")}/>
            <LeaderboardItem rank="5" name="Bob" score="10/10" date={new Date("2006-09-01T19:30:08Z")}/>
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
