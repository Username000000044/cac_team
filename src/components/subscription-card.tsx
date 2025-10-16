import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Subscription {
  id: number;
  header: string;
  price: string;
  buttonText: string;
  features: Array<string>;
}

const subscription: Subscription[] = [
  {
    id: 1,
    header: "Starter Shield",
    price: "0.00",
    buttonText: "Get Starter Shield",
    features: [
      "1 phishing test email per week (randomized style).",
      "Instant feedback after each test.",
      "Mini lessons on what to look for (simple tips section).",
      "Basic progress tracker (percentage of correct responces).",
    ],
  },
  {
    id: 2,
    header: "Smart Defender",
    price: "2.00",
    buttonText: "Get Smart Defender",
    features: [
      "Up to 5 phishing test emails per week.",
      "Progress history (see your last 5 results).",
      "Custom difficulty mode (easy / medium / hard).",
      "Certificate of completion every month (PDF download).",
    ],
  },
  {
    id: 3,
    header: "Team Guardian",
    price: "4.00",
    buttonText: "Get Team Guardian",
    features: [
      "Group progress dashboard (shared leaderboard).",
      "Team-wide phishing challege (weekly 'race to report').",
      "Custom welcome email for the group",
      "Priority support",
    ],
  },
];

export const SubscriptionCard = ({ id }: any) => {
  return (
    <Card className="bg-primary/30 border border-primary w-full max-w-100">
      <CardHeader className="flex flex-col items-center">
        <CardTitle className="text-3xl font-thin">{id.header}</CardTitle>
        <CardDescription className="text-lg">
          <p>
            ${id.price}
            <span className="text-sm">/mo</span>
          </p>
        </CardDescription>
        <CardAction>Card Action</CardAction>
      </CardHeader>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};
