import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


const subscription = [
  {
    title: "Starter Shield",
    price: "0.00",
    description: "A simple, effective way to begin your cybersecurity awareness journey.",
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
    description: "Level up your personal phishing awareness with deeper insights and flexible learning.",
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
    description: "Empower your entire team to stay sharp and cyber-aware together.",
    features: [
      "🏆 Group progress dashboard (shared leaderboard).",
      "🚨 Team-wide phishing challenge (weekly 'race to report').",
      "💌 Custom welcome email for the group.",
      "⚡ Priority support.",
    ],
  },
];

export default function PhishingPage() {
  return (
    <div className="flex flex-1">
      <div className="flex flex-wrap justify-center gap-3 w-full text-primary-foreground">
        {subscription.map((item, i) => (
          <Card className="w-full max-w-88 bg-background border border-border hover:bg-linear-to-t hover:from-primary/8 hover:to-background hover:scale-101 transition duration-500" key={i}>
            <CardHeader>
              <CardTitle className="text-3xl font-thin">{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
              <CardAction className="text-muted-foreground">${item.price}</CardAction>
            </CardHeader>
            <CardContent>
              <Button className="drop-shadow-lg">Get {item.title}</Button>
              <ol className="mt-10 text-sm text-muted-foreground">
                {item.features.map((feature, i) => <li className="border-b py-2" key={i}>+ {feature}</li>)}
             </ol>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
