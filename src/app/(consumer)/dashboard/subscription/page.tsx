import { Button, buttonVariants } from "@/components/ui/button";

export default function SubscriptionPage() {
  return (
    <div className="flex flex-1 flex-col bg-transparent border border-background">
      <div className="flex flex-col max-w-200">
        <h1 className="text-[7rem]">Subscription.</h1>
        <h2 className="text-lg">
          Unlock exclusive content and stay up-to-date with our premium
          subscription—enjoy early access, special features, and members-only
          perks. Join today and elevate your experience with personalized
          benefits delivered straight to you.
        </h2>
      </div>
      <div className="flex flex-wrap w-full mt-15">
        {/* Card 1 */}
        <div className="bg-card border border-border rounded-lg p-8 w-full md:w-100 me-3">
          <div className="flex flex-col items-center">
            <p className="text-sm invisible">BEST VALUE</p>
            <p className="text-4xl mt-3">Basic Shield</p>
            <p className="text-3xl mt-3">FREE</p>
            <p className="text-[.8rem] text-foreground/50 mt-1">
              Billed as $0. No exceptions.
            </p>
            <Button
              className={`mb-3 w-full text-sm mt-4 !bg-foreground !text-background ${buttonVariants(
                {
                  variant: "outline",
                }
              )}`}
            >
              Subscribe Now
            </Button>
            <ol className="text-sm [&_li]:mt-5">
              <li>
                <b>Learn.</b> 1 phishing test email per week (randomized)
              </li>
              <li>
                <b>Fast.</b> Instant feedback after each test
              </li>
              <li>
                <b>Engage.</b> Mini lessons on what to look for (tips and
                tricks)
              </li>
              <li>
                <b>Track.</b> Basic progress tracker (% of correct responses)
              </li>
              <li className="text-foreground/50">
                <b>Skill.</b> Progress history
              </li>
              <li className="text-foreground/50">
                <b>Earn.</b> Certificate of completion every month (PDF
                download)
              </li>
              <li className="text-foreground/50">
                <b>Complex.</b> Custom difficulty mode (easy / medium / hard)
              </li>
              <li className="text-foreground/50">
                <b>Enterprise.</b> Group progress dashboard (shared leaderboard)
              </li>
              <li className="text-foreground/50">
                <b>Games.</b> Team-wide phishing challenge (weekly "race to
                report")
              </li>
              <li className="text-foreground/50">
                <b>Customize.</b> Custom welcome email for the group
              </li>
              <li className="text-foreground/50">
                <b>Demand.</b> Priority support
              </li>
            </ol>
          </div>
        </div>
        {/* Card 2 */}
        <div className="bg-card border border-border rounded-lg p-8 w-full md:w-100 me-3">
          <div className="flex flex-col items-center">
            <p className="text-sm">BEST VALUE</p>
            <p className="text-4xl mt-3">Advanced Shield</p>
            <p className="text-3xl mt-3">
              <span className="text-foreground/50">
                <s>$1.20</s>{" "}
              </span>
              $1/month
            </p>
            <p className="text-[.8rem] text-foreground/50 mt-1">
              Billed as $4 every 4 weeks for the first year.
            </p>
            <Button
              className={`mb-3 w-full text-sm mt-4 !bg-foreground !text-background ${buttonVariants(
                {
                  variant: "outline",
                }
              )}`}
            >
              Subscribe Now
            </Button>
            <ol className="text-sm [&_li]:mt-5">
              <li>
                <b>Learn.</b> 5 phishing test emails per week
              </li>
              <li>
                <b>Fast.</b> Instant feedback after each test
              </li>
              <li>
                <b>Engage.</b> Mini lessons on what to look for (tips and
                tricks)
              </li>
              <li>
                <b>Track.</b> Basic progress tracker (% of correct responses)
              </li>
              <li>
                <b>Skill.</b> Progress history
              </li>
              <li>
                <b>Earn.</b> Certificate of completion every month (PDF
                download)
              </li>
              <li>
                <b>Complex.</b> Custom difficulty mode (easy / medium / hard)
              </li>
              <li className="text-foreground/50">
                <b>Enterprise.</b> Group progress dashboard (shared leaderboard)
              </li>
              <li className="text-foreground/50">
                <b>Games.</b> Team-wide phishing challenge (weekly "race to
                report")
              </li>
              <li className="text-foreground/50">
                <b>Customize.</b> Custom welcome email for the group
              </li>
              <li className="text-foreground/50">
                <b>Demand.</b> Priority support
              </li>
            </ol>
          </div>
        </div>
        {/* Card 3 */}
        <div className="bg-card border border-border rounded-lg p-8 w-full md:w-100 me-3">
          <div className="flex flex-col items-center">
            <p className="text-sm invisible">BEST VALUE</p>
            <p className="text-4xl mt-3">Enterprise Shield</p>
            <p className="text-3xl mt-3">
              <span className="text-foreground/50">
                <s>$4.75</s>{" "}
              </span>
              $3/month
            </p>
            <p className="text-[.8rem] text-foreground/50 mt-1">
              Billed as $4 every 4 weeks for the first year.
            </p>
            <Button
              className={`mb-3 w-full text-sm mt-4 !bg-foreground !text-background ${buttonVariants(
                {
                  variant: "outline",
                }
              )}`}
            >
              Subscribe Now
            </Button>
            <ol className="text-sm [&_li]:mt-5">
              <li>
                <b>Learn.</b> 5 phishing test emails per week
              </li>
              <li>
                <b>Fast.</b> Instant feedback after each test
              </li>
              <li>
                <b>Engage.</b> Mini lessons on what to look for (tips and
                tricks)
              </li>
              <li>
                <b>Track.</b> Basic progress tracker (% of correct responses)
              </li>
              <li>
                <b>Skill.</b> Progress history
              </li>
              <li>
                <b>Earn.</b> Certificate of completion every month (PDF
                download)
              </li>
              <li>
                <b>Complex.</b> Custom difficulty mode (easy / medium / hard)
              </li>
              <li>
                <b>Enterprise.</b> Group progress dashboard (shared leaderboard)
              </li>
              <li>
                <b>Games.</b> Team-wide phishing challenge (weekly "race to
                report")
              </li>
              <li>
                <b>Customize.</b> Custom welcome email for the group
              </li>
              <li>
                <b>Demand.</b> Priority support
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
