import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import styles from "./NavBar.module.css";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", to: "/" },
    { name: "Web Development", to: "/web" },
    { name: "Android Development", to: "/android" },
    { name: "iOS Development", to: "/ios" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <nav className="fixed w-full top-0 left-0 z-50 backdrop-blur-md bg-white/20 shadow-md">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="DevExperts Logo" className="w-10 h-10" />
            <span className="text-black text-3xl font-extrabold select-none drop-shadow-lg">
              DevExperts
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-12">
            {navItems.map(({ name, to }) => (
              <Link
                key={name}
                to={to}
                className="relative text-black text-lg font-semibold
  hover:text-grey transition-colors duration-400
  before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-0.5 before:bg-black before:transition-all before:duration-400
  hover:before:w-full"
              >
                {name}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-8 h-8 focus:outline-none"
          >
            <span
              className={`block absolute h-0.5 w-8 bg-white rounded transform transition duration-300 ease-in-out
                ${isOpen ? "rotate-45 top-3.5" : "top-2"}`}
            />
            <span
              className={`block absolute h-0.5 w-8 bg-white rounded transition-all duration-300 ease-in-out
                ${isOpen ? "opacity-0" : "top-4"}`}
            />
            <span
              className={`block absolute h-0.5 w-8 bg-white rounded transform transition duration-300 ease-in-out
                ${isOpen ? "-rotate-45 top-3.5" : "top-6"}`}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-max-height duration-500 ease-in-out
            bg-white/20 backdrop-blur-md rounded-b-lg shadow-lg
            ${isOpen ? "max-h-60" : "max-h-0"}`}
        >
          <div className="flex flex-col px-6 py-4 space-y-4">
            {navItems.map(({ name, to }) => (
              <Link
                key={name}
                to={to}
                onClick={() => setIsOpen(false)}
                className="text-white text-lg font-semibold hover:text-indigo-400 transition-colors duration-300"
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
