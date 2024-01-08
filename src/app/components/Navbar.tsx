"use client";

import Link from "next/link";
import React, { FunctionComponent, useState } from "react";
import { CgGym } from "react-icons/cg";

interface NavbarProps {}

const NavBar: FunctionComponent<NavbarProps> = () => {
  const [viewMenu, setViewMenu] = useState(false);
  return (
    <nav className="flex items-center justify-between flex-wrap bg-slate-800 p-4">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <CgGym className="text-4xl me-1" />
        <span className="font-semibold text-xl tracking-tight">
          Colin OMeara
        </span>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-slate-50 border-red-500 hover:text-red-500 hover:border-white"
          onClick={() => setViewMenu((prev) => !prev)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          viewMenu ? "visible" : "hidden"
        }`}
      >
        <div className="text-sm lg:flex-grow">
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-slate-50 hover:text-red-500 mr-4"
          >
            Online Personal Training
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-slate-50 hover:text-red-500 mr-4"
          >
            Results
          </a>
          <a
            href="#responsive-header"
            className="block mt-4 lg:inline-block lg:mt-0 text-slate-50 hover:text-red-500  mr-4"
          >
            About
          </a>
          <a
            href="mailto:colinomeara@gmail.com"
            className="block mt-4 lg:inline-block lg:mt-0 text-slate-50 hover:text-red-500"
          >
            Contact
          </a>
        </div>
        <div>
          <a
            href="#"
            download=""
            className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-red-500 hover:bg-white mt-4 lg:mt-0"
          >
            Download Sample Workout
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
