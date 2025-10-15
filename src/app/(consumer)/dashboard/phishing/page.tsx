import { SubscriptionCard } from "@/components/subscription-card";

export default function PhishingPage() {
  return (
    <div className="flex flex-1">
      <div className="flex flex-wrap justify-center gap-3 w-full text-primary-foreground">
        <SubscriptionCard header="Starter Shield" price="0.00" />
        <SubscriptionCard header="Smart Defender" price="2.00" />
        <SubscriptionCard header="Team Guardian" price="4.00" />
      </div>
    </div>
  );
}
