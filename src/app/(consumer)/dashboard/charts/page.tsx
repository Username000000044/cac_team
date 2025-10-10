import ActivityChart from "@/components/charts/chart-activity";
import { AgePieChart } from "@/components/charts/chart-age";

export default function ChartsPage() {
  return <div className="grid grid-cols-3">
    <ActivityChart className="col-span-2"/>
    <AgePieChart className="col-span-1"/>
  </div>
}
