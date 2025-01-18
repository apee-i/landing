"use client";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <nav id="navbar" className="fixed w-full z-50 bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="#">
              <p className="text-xl font-bold">apee-i</p>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="#hero">
                <p className="hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </p>
              </Link>
              <Link href="#features">
                <p className="hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium">
                  Features
                </p>
              </Link>
              <Link href="#installation">
                <p className="hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium">
                  Installation
                </p>
              </Link>
              <Link href="#documentation">
                <p className="hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium">
                  Docs
                </p>
              </Link>
              <Link href="#examples">
                <p className="hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium">
                  Examples
                </p>
              </Link>
              <Link href="#community">
                <p className="hover:bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium">
                  Community
                </p>
              </Link>
              <Link href="#github">
                <p className="bg-neutral-700 px-3 py-2 rounded-md text-sm font-medium">
                  GitHub
                </p>
              </Link>
            </div>
          </div>
          <div className="md:hidden">
            <button
              id="mobile-menu-button"
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-neutral-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div
        id="mobile-menu"
        className={`${
          mobileMenuOpen ? "block" : "hidden"
        } md:hidden bg-neutral-900`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link href="#hero">
            <p
              onClick={closeMobileMenu}
              className="block hover:bg-neutral-700 px-3 py-2 rounded-md text-base font-medium"
            >
              Home
            </p>
          </Link>
          <Link href="#features">
            <p
              onClick={closeMobileMenu}
              className="block hover:bg-neutral-700 px-3 py-2 rounded-md text-base font-medium"
            >
              Features
            </p>
          </Link>
          <Link href="#installation">
            <p
              onClick={closeMobileMenu}
              className="block hover:bg-neutral-700 px-3 py-2 rounded-md text-base font-medium"
            >
              Installation
            </p>
          </Link>
          <Link href="#documentation">
            <p
              onClick={closeMobileMenu}
              className="block hover:bg-neutral-700 px-3 py-2 rounded-md text-base font-medium"
            >
              Docs
            </p>
          </Link>
          <Link href="#examples">
            <p
              onClick={closeMobileMenu}
              className="block hover:bg-neutral-700 px-3 py-2 rounded-md text-base font-medium"
            >
              Examples
            </p>
          </Link>
          <Link href="#community">
            <p
              onClick={closeMobileMenu}
              className="block hover:bg-neutral-700 px-3 py-2 rounded-md text-base font-medium"
            >
              Community
            </p>
          </Link>
          <Link href="#github">
            <p
              onClick={closeMobileMenu}
              className="block bg-neutral-700 px-3 py-2 rounded-md text-base font-medium"
            >
              GitHub
            </p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
