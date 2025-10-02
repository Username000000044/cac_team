import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function URLPage() {
  return (
    <div className="w-full">
      <div className="gap-5 mx-auto max-w-[75rem] xl:max-w-[90rem] grid grid-cols-1 grid-rows-2 md:grid-cols-[3fr_1fr] md:grid-rows-1">
        <div className="flex flex-col ">
          <div className="h-[80vh] bg-red-500"></div>
          <div className="h-[20vh] bg-green-500">
            
          </div>
        </div>

        <div className="h-[100vh] bg-red-400"></div>
      </div>
    </div>
  );
}
