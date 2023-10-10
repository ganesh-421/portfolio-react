import Tickmark from "./ui/Tickmark";

export default function List() {
  return (
    <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
      <li className="flex items-center space-x-3">
        <Tickmark/>
        <span>Individual configuration</span>
      </li>
      <li className="flex items-center space-x-3">
      <Tickmark/>
        <span>No setup, or hidden fees</span>
      </li>
      <li className="flex items-center space-x-3">
      <Tickmark/>
        <span>
          Team size:{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            1 developer
          </span>
        </span>
      </li>
      <li className="flex items-center space-x-3">
      <Tickmark/>
        <span>
          Premium support:{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            6 months
          </span>
        </span>
      </li>
      <li className="flex items-center space-x-3">
      <Tickmark/>
        <span>
          Free updates:{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            6 months
          </span>
        </span>
      </li>
    </ul>
  );
}
