import Calender from "./ui/Calender";
import Download from "./ui/Download";

export default function TimelineItem() {
  return (
    <li className="mb-10 ml-6">
      <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
        <Calender />
      </span>
      <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
        Flowbite Application UI v2.0.0{" "}
        <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
          Latest
        </span>
      </h3>
      <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        Released on January 13th, 2022
      </time>
      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        Get access to over 20+ pages including a dashboard layout, charts,
        kanban board, calendar, and pre-order E-commerce & Marketing pages.
      </p>
      <a
        href="#"
        className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
      >
        <Download /> Download ZIP
      </a>
    </li>
  );
}
