export default function PhishingPage() {
  return (
    <div className="flex flex-1">
      <div className="flex items-end mx-auto gap-3 w-full text-primary-foreground">
        <div className="w-full h-175 bg-primary/40 rounded-lg">
          <div className="flex flex-col h-full">
            <div className="flex justify-center items-center bg-primary h-40 rounded-lg mt-auto">
              <h2 className="text-6xl font-bold">2 dolla</h2>
            </div>
          </div>
        </div>
        <div className="w-full h-200 bg-secondary/40 rounded-lg">
          <div className="flex flex-col h-full">
            <div className="flex flex-col p-4 bg-secondary h-40 rounded-lg mt-auto">
              <p className="text-lg">usd</p>
              <h2 className="text-6xl font-bold">$3</h2>
            </div>
          </div>
        </div>
        <div className="w-full h-150 bg-primary/40 rounded-lg">
          <div className="flex flex-col h-full">
            <div className="flex justify-center items-center bg-primary h-40 rounded-lg mt-auto">
              <h2 className="text-6xl font-bold">4 dolla</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
