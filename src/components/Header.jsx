import Navigation from "./Navigation";

export default function Header({ className="" }) {
  return (
    <nav className={className + " fixed w-full bg-white border-gray-200 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-100"}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 ">
        <a href="#" className="flex items-center">
          <img
            src="./src/assets/react.svg"
            className="h-8 mr-3"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            React
          </span>
        </a>
        <Navigation />
      </div>
    </nav>
  );
}
