'use client'

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-beige/95 backdrop-blur-sm">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-1 flex items-center">
            <a href="#hero" className="text-lg font-bold text-[#391212] tracking-tight">
              AJ's Cakes
            </a>
          </div>

          {/* Hamburger for mobile */}
          <button
            className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6 text-darkBrown"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex flex-1 justify-end">
            <div className="flex items-end gap-6">
              <a href="#menu" className="relative text-darkBrown text-sm font-medium transition-colors after:absolute after:bg-mediumBrown after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">
                Menu
              </a>
              <a href="#about" className="relative text-darkBrown text-sm font-medium transition-colors after:absolute after:bg-mediumBrown after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">
                About
              </a>
              <a href="#gallery" className="relative text-darkBrown text-sm font-medium transition-colors after:absolute after:bg-mediumBrown after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">
                Gallery
              </a>
              <a href="#footer" className="relative text-darkBrown text-sm font-medium transition-colors after:absolute after:bg-mediumBrown after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile slide-in menu */}
      <div
        className={`fixed inset-0 z-50 bg-beige h-screen flex flex-col items-center justify-center transform transition-transform duration-300 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-6 right-6 text-darkBrown text-3xl"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        >
          &times;
        </button>
        <nav className="flex flex-col gap-8 text-center">
          <a href="#menu" className="text-darkBrown text-xl font-semibold" onClick={() => setOpen(false)}>
            Menu
          </a>
          <a href="#about" className="text-darkBrown text-xl font-semibold" onClick={() => setOpen(false)}>
            About
          </a>
          <a href="#gallery" className="text-darkBrown text-xl font-semibold" onClick={() => setOpen(false)}>
            Gallery
          </a>
          <a href="#footer" className="text-darkBrown text-xl font-semibold" onClick={() => setOpen(false)}>
            Contact
          </a>
        </nav>
      </div>
    </nav>
  );
} 