import TimelineItem from "./TimelineItem";
import Calender from "./ui/Calender";

export default function Timeline() {
  return (
    <ol className="relative border-l border-gray-200 dark:border-gray-700">
      <TimelineItem />
      <TimelineItem />
      <TimelineItem />
    </ol>
  );
}
