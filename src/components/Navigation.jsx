import { useState, useContext } from "react";
import Hamburger from "./ui/Hamburger";
import NavLink from "./NavLink";
import Button from "./Button";
import AuthContext from "../contexts/auth-context";

export default function Navigation() {
  const [showMenu, setShowMenu] = useState(false);
  const context = useContext(AuthContext);

  const showDropdown = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav
      className={
        "fixed right-5 top-5 md:left-20 md:top-5 w-fit border-gray-200 bg-gray-900 rounded-lg z-40"
      }
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
        <div className="flex">
          {/* {context.isLoggedIn ? (
            <Button onClick={context.onLogout}>Logout</Button>
          ) : (
            <Button>Log in</Button>
          )} */}
          <button
            onClick={showDropdown}
            type="button"
            className="inline-flex items-center w-10 h-8 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-cta"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <Hamburger />
          </button>
        </div>
        <div
          className={
            "items-center justify-between w-full relative" +
            " " +
            (!showMenu ? "hidden" : " ")
          }
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 mt-4 border border-gray-100 rounded-lg right-0 md:-right-10 absolute bg-gray-50  dark:bg-gray-800 dark:border-gray-700 ">
            <NavLink active={true} url="/home">
              Home
            </NavLink>
            <NavLink>About</NavLink>
            <NavLink>Contact</NavLink>
            <NavLink>Contact</NavLink>
            {context.isLoggedIn && <NavLink>Admin</NavLink>}
          </ul>
        </div>
      </div>
    </nav>
  );
}
