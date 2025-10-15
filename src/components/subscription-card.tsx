import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


const subscriptionOptions = [
    {
        header: "Starter Sheld",
        price: "0.00",
        buttonText: "Get Starter Shield",
        varient: "shield",
        features: [
            "1 phishing test email per week (randomized style).",
            "Instant feedback after each test.",
            "Mini lessons on what to look for (simple tips section).",
            "Basic progress tracker (percentage of correct responces)."
        ]
    },
    {
        header: "Smart Defender",
        price: "2.00",
        buttonText: "Get Smart Defender",
        varient: "defender",
        features: [
            "Up to 5 phishing test emails per week.",
            "Progress history (see your last 5 results).",
            "Custom difficulty mode (easy / medium / hard).",
            "Certificate of completion every month (PDF download)."
        ]
    },
    {
        header: "Team Guardian",
        price: "4.00",
        buttonText: "Get Team Guardian",
        varient: "guardian",
        features: [
            "Group progress dashboard (shared leaderboard).",
            "Team-wide phishing challege (weekly 'race to report').",
            "Custom welcome email for the group",
            "Priority support"
        ]
    },
    
]



export const SubscriptionCard = ({ }: SubscriptionCardTypes) => {
  return (
    <Card className="bg-primary/30 border border-primary w-full max-w-100">
      <CardHeader className="flex flex-col items-center">
        <CardTitle className="text-3xl font-thin">{subscription.header}</CardTitle>
        <CardDescription className="text-lg"><p>${subscription.price}<span className="text-sm">/mo</span></p></CardDescription>
        {/* <CardAction>Card Action</CardAction> */}
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
