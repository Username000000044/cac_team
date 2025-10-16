import { SubscriptionCard } from "@/components/subscription-card";

export default function PhishingPage() {
  return (
    <div className="flex flex-1">
      <div className="flex flex-wrap justify-center gap-3 w-full text-primary-foreground">
        <SubscriptionCard card={1} />
      </div>
    </div>
  );
}
