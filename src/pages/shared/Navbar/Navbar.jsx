import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png";

const Navbar = () => {
  const listItem = (
    <>
      <Link className="mx-4" to="/">
        Home
      </Link>
      <Link className="mx-4" to="/blogs">
        Blogs
      </Link>
      <Link className="mx-4" to="allToys">
        All Toys
      </Link>
      <Link className="mx-4" to="myToys">
        My Toys
      </Link>
      <Link className="mx-4" to="addToys">
        Add A Toys
      </Link>
    </>
  );

  return (
    <div>
      <div className="navbar bg-neutral text-neutral-content px-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 text-blue-500 rounded-box w-52"
            >
              {listItem}
            </ul>
          </div>
          <div className="flex items-center">
            <img className="w-16 h-16" src={logo} alt="" />
            <a className="btn btn-ghost normal-case text-xl">
              <span className="text-red-500">FAB</span>ULOUS-
              <span className="text-red-500">T</span>OYS
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{listItem}</ul>
        </div>
        <div className="navbar-end">
          <Link className="bg-red-500 px-4 py-2 font-bold text-white">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
