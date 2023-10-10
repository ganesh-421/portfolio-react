export default function NavLink({ children, className = "", active = false, url="#" }) {
  return (
    <li>
      {active ? (
        <a
          href={url}
          className={
            "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded" +
            " " +
            className
          }
          aria-current="page"
        >
          {children}
        </a>
      ) : (
        <a
          href={url}
          className={
            "block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 dark:text-white dark:hover:bg-gray-9  00 dark:hover:text-white dark:border-gray-700" +
            " " +
            className
          }
        >
          {children}
        </a>
      )}
    </li>
  );
}
