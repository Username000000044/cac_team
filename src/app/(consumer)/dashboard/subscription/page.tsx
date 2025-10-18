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
import Link from "next/link";

const subscription = [
  {
    title: "Starter Shield",
    price: "0.00",
    description:
      "A simple, effective way to begin your cybersecurity awareness journey.",
    url: "/",
    features: [
      "✉️ 1 phishing test email per week (randomized style).",
      "⚡ Instant feedback after each test.",
      "🧠 Mini lessons on what to look for (simple tips section).",
      "📈 Basic progress tracker (percentage of correct responses).",
    ],
  },
  {
    title: "Smart Defender",
    price: "2.00",
    description:
      "Level up your personal phishing awareness with deeper insights and flexible learning.",
    url: "/",
    features: [
      "📨 Up to 5 phishing test emails per week.",
      "📊 Progress history (see your last 5 results).",
      "🎯 Custom difficulty mode (easy / medium / hard).",
      "🏅 Certificate of completion every month (PDF download).",
    ],
  },
  {
    title: "Team Guardian",
    price: "4.00",
    description:
      "Empower your entire team to stay sharp and cyber-aware together.",
    url: "/",
    features: [
      "🏆 Group progress dashboard (shared leaderboard).",
      "🚨 Team-wide phishing challenge (weekly 'race to report').",
      "💌 Custom welcome email for the group.",
      "⚡ Priority support.",
    ],
  },
];

export default function SubscriptionPage() {
  return (
    <div className="flex flex-1 flex-col bg-background border border-background ">
      <h1 className="text-5xl ml-[10%]">Subscription</h1>
      <div className="flex flex-col 2xl:flex-row gap-10 justify-center w-full mt-30">
        <div className=" bg-red-500 w-full md:w-100 h-20"></div>
        <div className=" bg-red-500 w-full md:w-100 h-20"></div>
        <div className=" bg-red-500 w-full md:w-100 h-20"></div>
      </div>
    </div>
  );
}
