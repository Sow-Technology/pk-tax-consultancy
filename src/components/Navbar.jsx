"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState, useRef } from "react";

const NavItems = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Services",
    url: "/#services",
  },
  {
    name: "Contact",
    url: "/#contact",
  },
];

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const mobileMenuRef = useRef(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const closeMobileMenu = (e) => {
    if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target)) {
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("click", closeMobileMenu);
    return () => {
      window.removeEventListener("click", closeMobileMenu);
    };
  }, []);

  return (
    <div className="flex flex-row items-center justify-between my-5 px-5">
      <div>
        <Image src="/logo.webp" alt="" width={100} height={100} />
      </div>
      <nav className="flex flex-col items-center gap-5 mt-3">
        {/* Mobile Menu Icon */}
        <div
          className="lg:hidden cursor-pointer relative z-30"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? (
            <>
              <span className="block bg-black w-6 h-0.5 transform rotate-45 origin-center"></span>
              <span className="block bg-black w-6 h-0.5 mt-1 transform -translate-y-[6px] -rotate-45 origin-center "></span>
            </>
          ) : (
            <>
              <span className="block bg-black w-6 h-0.5"></span>
              <span className="block bg-black w-6 h-0.5 mt-1"></span>
              <span className="block bg-black w-6 h-0.5 mt-1"></span>
            </>
          )}
        </div>
        {/* Navigation Items (Hidden on Mobile) */}
        <div className={`lg:flex flex-col lg:flex-row lg:gap-10 hidden`}>
          {NavItems.map((item) => (
            <Link
              href={item.url}
              key={item.name}
              className={`hover:scale-105 transition-transform px-4 py-2 ${
                pathname === item.url && "bg-red-500 rounded-xl text-white"
              } `}
            >
              <span>{item.name}</span>
            </Link>
          ))}
        </div>
      </nav>
      {/* Mobile Menu Modal */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center z-20"
          // ref={mobileMenuRef}
        >
          <div className="bg-white/90 backdrop-blur-3xl p-10 rounded-md py-12">
            {NavItems.map((item) => (
              <Link
                href={item.url}
                key={item.name}
                onClick={toggleMobileMenu}
                className={`block py-2 px-5 ${
                  pathname === item.url && "bg-red-500 rounded-xl  text-white"
                }`}
              >
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
