"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Disclosure, Menu, Transition } from "@headlessui/react";

const NavItems = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Services",
    url: "#",
  },
  {
    name: "Contact",
    url: "/contact",
  },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};
const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const mobileMenuRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [subModal1Open, setSubModal1Open] = useState(false);
  const [subModal2Open, setSubModal2Open] = useState(false);
  const [subModal3Open, setSubModal3Open] = useState(false);
  const [subModal4Open, setSubModal4Open] = useState(false);
  const [subModal5Open, setSubModal5Open] = useState(false);
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
    <Disclosure as="nav" className="glassmorphism relative z-50">
      {({ open }) => (
        <>
          <div className="flex flex-row items-center justify-between my-5 px-5 relative">
            <Link href="/">
              <div>
                <Image src="/logo.png" alt="" width={175} height={175} />
              </div>
            </Link>
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
              <div className={`lg:flex flex-col lg:flex-row lg:gap-10 hidden`}>
                {NavItems.map((item) => (
                  <Link
                    href={item.url}
                    key={item.name}
                    className={`hover:scale-105 transition-transform px-4 py-2 ${
                      pathname === item.url &&
                      "bg-red-500 rounded-xl text-white"
                    } `}
                  >
                    {item.name != "Services" && <span>{item.name}</span>}

                    {item.name == "Services" && (
                      <motion.div
                        variants={{
                          open: { rotate: 180 },
                          closed: { rotate: 0 },
                        }}
                        transition={{ duration: 0.2 }}
                        style={{ originY: 0.55 }}
                        className="flex items-center gap-3"
                      >
                        <span
                          onClick={() => setModalOpen(!modalOpen)}
                          onMouseEnter={() => setModalOpen(true)}
                          onMouseLeave={() => setModalOpen(false)}
                        >
                          {item.name}
                        </span>
                        <svg
                          width="15"
                          height="15"
                          viewBox="0 0 20 20"
                          fill="rgb(209 213 219)"
                          className="text-gray-300"
                        >
                          <path d="M0 7 L 20 7 L 10 16" />
                        </svg>
                      </motion.div>
                    )}
                  </Link>
                ))}
              </div>
            </nav>

            {modalOpen && (
              <motion.ul
                variants={{
                  open: {
                    clipPath: "inset(0% 0% 0% 0% round 10px)",
                    transition: {
                      type: "spring",
                      bounce: 0,
                      duration: 0.7,
                      delayChildren: 0.3,
                      staggerChildren: 0.05,
                    },
                  },
                  closed: {
                    clipPath: "inset(10% 50% 90% 50% round 10px)",
                    transition: {
                      type: "spring",
                      bounce: 0,
                      duration: 0.3,
                    },
                  },
                }}
                style={{ pointerEvents: modalOpen ? "auto" : "none" }}
                className="absolute top-56 lg:left-auto right-auto left-10 lg:top-16 menumorphism  lg:right-40 glassmorphism text-slate-100 rounded-2xl  space-y-5 p-5 px-10 z-[99950000]  "
                onMouseEnter={() => setModalOpen(true)}
                onMouseLeave={() => setModalOpen(false)}
              >
                <motion.li
                  variants={itemVariants}
                  className="flex gap-10 justify-between cursor-pointer hover:scale-105"
                  onMouseEnter={() => setSubModal1Open(true)}
                  onMouseLeave={() => setSubModal1Open(false)}
                >
                  Registration
                  <motion.div
                    variants={{
                      open: { rotate: 180 },
                      closed: { rotate: 0 },
                    }}
                    transition={{ duration: 0.2 }}
                    style={{ originY: 0.55 }}
                    className=" -rotate-90"
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 20 20"
                      fill="rgb(209 213 219)"
                      className="text-gray-300"
                    >
                      <path d="M0 7 L 20 7 L 10 16" />
                    </svg>
                  </motion.div>
                </motion.li>
                <motion.li
                  variants={itemVariants}
                  className="flex gap-10 justify-between cursor-pointer hover:scale-105"
                  onMouseEnter={() => setSubModal2Open(true)}
                  onMouseLeave={() => setSubModal2Open(false)}
                >
                  Compliance{" "}
                  <motion.div
                    variants={{
                      open: { rotate: 180 },
                      closed: { rotate: 0 },
                    }}
                    transition={{ duration: 0.2 }}
                    style={{ originY: 0.55 }}
                    className=" -rotate-90"
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 20 20"
                      fill="rgb(209 213 219)"
                      className="text-gray-300"
                    >
                      <path d="M0 7 L 20 7 L 10 16" />
                    </svg>
                  </motion.div>
                </motion.li>
                <motion.li
                  variants={itemVariants}
                  className="flex gap-10 justify-between cursor-pointer hover:scale-105"
                  onMouseEnter={() => setSubModal3Open(true)}
                  onMouseLeave={() => setSubModal3Open(false)}
                >
                  Insurance
                  <motion.div
                    variants={{
                      open: { rotate: 180 },
                      closed: { rotate: 0 },
                    }}
                    transition={{ duration: 0.2 }}
                    style={{ originY: 0.55 }}
                    className=" -rotate-90"
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 20 20"
                      fill="rgb(209 213 219)"
                      className="text-gray-300"
                    >
                      <path d="M0 7 L 20 7 L 10 16" />
                    </svg>
                  </motion.div>
                </motion.li>
                <motion.li
                  variants={itemVariants}
                  className="flex gap-10 justify-between cursor-pointer hover:scale-105"
                  onMouseEnter={() => setSubModal4Open(true)}
                  onMouseLeave={() => setSubModal4Open(false)}
                >
                  Legal Services
                  <motion.div
                    variants={{
                      open: { rotate: 180 },
                      closed: { rotate: 0 },
                    }}
                    transition={{ duration: 0.2 }}
                    style={{ originY: 0.55 }}
                    className=" -rotate-90"
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 20 20"
                      fill="rgb(209 213 219)"
                      className="text-gray-300"
                    >
                      <path d="M0 7 L 20 7 L 10 16" />
                    </svg>
                  </motion.div>
                </motion.li>
                <motion.li
                  variants={itemVariants}
                  className="flex gap-10 justify-between cursor-pointer hover:scale-105"
                  onMouseEnter={() => setSubModal5Open(true)}
                  onMouseLeave={() => setSubModal5Open(false)}
                >
                  Others
                  <motion.div
                    variants={{
                      open: { rotate: 180 },
                      closed: { rotate: 0 },
                    }}
                    transition={{ duration: 0.2 }}
                    style={{ originY: 0.55 }}
                    className=" -rotate-90"
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 20 20"
                      fill="rgb(209 213 219)"
                      className="text-gray-300"
                    >
                      <path d="M0 7 L 20 7 L 10 16" />
                    </svg>
                  </motion.div>
                </motion.li>
              </motion.ul>
            )}
            {subModal1Open && (
              <motion.ul
                variants={{
                  open: {
                    clipPath: "inset(0% 0% 0% 0% round 10px)",
                    transition: {
                      type: "spring",
                      bounce: 0,
                      duration: 0.7,
                      delayChildren: 0.3,
                      staggerChildren: 0.05,
                    },
                  },
                  closed: {
                    clipPath: "inset(10% 50% 90% 50% round 10px)",
                    transition: {
                      type: "spring",
                      bounce: 0,
                      duration: 0.3,
                    },
                  },
                }}
                style={{ pointerEvents: modalOpen ? "auto" : "none" }}
                className="absolute top-60 lg:top-20 lg:-right-2 lg:left-auto right-auto left-60  backdrop-blur-3xl menumorphism  text-slate-100 rounded-2xl  space-y-5 p-5 px-10 z-[99950000] flex flex-col gap-[2px] max-w-[250px] w-[250px] min-w-[250px]"
                onMouseEnter={() => (
                  setSubModal1Open(true), setModalOpen(true)
                )}
                onMouseLeave={() => setSubModal1Open(false)}
              >
                <Link href="/registration/#udyam">
                  <motion.li
                    variants={itemVariants}
                    className="flex gap-10 justify-between cursor-pointer hover:scale-105"
                  >
                    Udyam Registration (MSME)
                  </motion.li>
                </Link>
                <Link href="/gst">
                  <motion.li
                    variants={itemVariants}
                    className="flex gap-10 justify-between cursor-pointer hover:scale-105"
                  >
                    GST Registration
                  </motion.li>
                </Link>
                <Link href="/registration/#esi">
                  <motion.li
                    variants={itemVariants}
                    className="flex gap-10 justify-between cursor-pointer hover:scale-105"
                  >
                    EPF & ESI Registration
                  </motion.li>
                </Link>
                <Link href="/registration/#fssai">
                  <motion.li
                    variants={itemVariants}
                    className="flex gap-10 justify-between cursor-pointer hover:scale-105"
                  >
                    FSSAI Registration (Food License)
                  </motion.li>
                </Link>

                <Link href="/registration/#iec">
                  <motion.li
                    variants={itemVariants}
                    className="flex gap-10 justify-between cursor-pointer hover:scale-105"
                  >
                    Import and Export Code Registration (IEC)
                  </motion.li>
                </Link>
                <Link href="/registration/#company">
                  <motion.li
                    variants={itemVariants}
                    className="flex gap-10 justify-between cursor-pointer hover:scale-105"
                  >
                    Company Registration
                  </motion.li>
                </Link>
                <Link href="/registration/#labour">
                  <motion.li
                    variants={itemVariants}
                    className="flex gap-10 justify-between cursor-pointer hover:scale-105"
                  >
                    Labour License{" "}
                  </motion.li>
                </Link>
                <Link href="/registration/#gst">
                  <motion.li
                    variants={itemVariants}
                    className="flex gap-10 justify-between cursor-pointer hover:scale-105"
                  >
                    Trade Mark Registration
                  </motion.li>
                </Link>
              </motion.ul>
            )}
            {subModal2Open && (
              <motion.ul
                variants={{
                  open: {
                    clipPath: "inset(0% 0% 0% 0% round 10px)",
                    transition: {
                      type: "spring",
                      bounce: 0,
                      duration: 0.7,
                      delayChildren: 0.3,
                      staggerChildren: 0.05,
                    },
                  },
                  closed: {
                    clipPath: "inset(10% 50% 90% 50% round 10px)",
                    transition: {
                      type: "spring",
                      bounce: 0,
                      duration: 0.3,
                    },
                  },
                }}
                style={{ pointerEvents: modalOpen ? "auto" : "none" }}
                className="absolute top-60 lg:top-20 lg:-right-2 lg:left-auto right-auto left-60  backdrop-blur-3xl menumorphism  text-slate-100 rounded-2xl  space-y-5 p-5 px-10 z-[99950000] flex flex-col gap-[2px] max-w-[250px] w-[250px] min-w-[250px]"
                onMouseEnter={() => (
                  setSubModal2Open(true), setModalOpen(true)
                )}
                onMouseLeave={() => setSubModal2Open(false)}
              >
                <Link href="/gst">
                  <motion.li
                    variants={itemVariants}
                    className="flex gap-10 justify-between cursor-pointer hover:scale-105"
                  >
                    GST Return Filing
                  </motion.li>
                </Link>
                <Link href="/income-tax/#esi">
                  <motion.li
                    variants={itemVariants}
                    className="flex gap-10 justify-between cursor-pointer hover:scale-105"
                  >
                    EPF & ESI Return Filing
                  </motion.li>
                </Link>
                <Link href="/income-tax">
                  <motion.li
                    variants={itemVariants}
                    className="flex gap-10 justify-between cursor-pointer hover:scale-105"
                  >
                    Income Tax Filing
                  </motion.li>
                </Link>
                <Link href="/income-tax/#tds">
                  <motion.li
                    variants={itemVariants}
                    className="flex gap-10 justify-between cursor-pointer hover:scale-105"
                  >
                    TDS Return Filing
                  </motion.li>
                </Link>
                <Link href="/income-tax/#pf">
                  <motion.li
                    variants={itemVariants}
                    className="flex gap-10 justify-between cursor-pointer hover:scale-105"
                  >
                    Financial Projection
                  </motion.li>
                </Link>{" "}
                <Link href="/income-tax/#pf">
                  <motion.li
                    variants={itemVariants}
                    className="flex gap-10 justify-between cursor-pointer hover:scale-105"
                  >
                    PF Claims
                  </motion.li>
                </Link>
              </motion.ul>
            )}
            {subModal3Open && (
              <motion.ul
                variants={{
                  open: {
                    clipPath: "inset(0% 0% 0% 0% round 10px)",
                    transition: {
                      type: "spring",
                      bounce: 0,
                      duration: 0.7,
                      delayChildren: 0.3,
                      staggerChildren: 0.05,
                    },
                  },
                  closed: {
                    clipPath: "inset(10% 50% 90% 50% round 10px)",
                    transition: {
                      type: "spring",
                      bounce: 0,
                      duration: 0.3,
                    },
                  },
                }}
                style={{ pointerEvents: modalOpen ? "auto" : "none" }}
                className="absolute top-60 lg:top-20 lg:-right-2 lg:left-auto right-auto left-60  backdrop-blur-3xl menumorphism  text-slate-100 rounded-2xl  space-y-5 p-5 px-10 z-[99950000] flex flex-col gap-[2px] max-w-[250px] w-[250px] min-w-[250px] min-h-[200px]"
                onMouseEnter={() => (
                  setSubModal3Open(true), setModalOpen(true)
                )}
                onMouseLeave={() => setSubModal3Open(false)}
              >
                <Link href="/gst">
                  <motion.li
                    variants={itemVariants}
                    className="flex gap-10 justify-between cursor-pointer hover:scale-105"
                  >
                    Life Insurance - LIC
                  </motion.li>
                </Link>
              </motion.ul>
            )}
            {subModal4Open && (
              <motion.ul
                variants={{
                  open: {
                    clipPath: "inset(0% 0% 0% 0% round 10px)",
                    transition: {
                      type: "spring",
                      bounce: 0,
                      duration: 0.7,
                      delayChildren: 0.3,
                      staggerChildren: 0.05,
                    },
                  },
                  closed: {
                    clipPath: "inset(10% 50% 90% 50% round 10px)",
                    transition: {
                      type: "spring",
                      bounce: 0,
                      duration: 0.3,
                    },
                  },
                }}
                style={{ pointerEvents: modalOpen ? "auto" : "none" }}
                className="absolute top-60 lg:top-20 lg:-right-2 lg:left-auto right-auto left-60  backdrop-blur-3xl menumorphism  text-slate-100 rounded-2xl  space-y-5 p-5 px-10 z-[99950000] flex flex-col gap-[2px] max-w-[250px] w-[250px] min-w-[250px]"
                onMouseEnter={() => (
                  setSubModal4Open(true), setModalOpen(true)
                )}
                onMouseLeave={() => setSubModal4Open(false)}
              >
                <Link href="/gst">
                  <motion.li
                    variants={itemVariants}
                    className="flex gap-10 justify-between cursor-pointer hover:scale-105"
                  >
                    Arbitration Work
                  </motion.li>
                </Link>
                <Link href="/gst">
                  <motion.li
                    variants={itemVariants}
                    className="flex gap-10 justify-between cursor-pointer hover:scale-105"
                  >
                    Labour Disputes
                  </motion.li>
                </Link>
                <Link href="/gst">
                  <motion.li
                    variants={itemVariants}
                    className="flex gap-10 justify-between cursor-pointer hover:scale-105"
                  >
                    Family Conciliation
                  </motion.li>
                </Link>
              </motion.ul>
            )}
            {subModal5Open && (
              <motion.ul
                variants={{
                  open: {
                    clipPath: "inset(0% 0% 0% 0% round 10px)",
                    transition: {
                      type: "spring",
                      bounce: 0,
                      duration: 0.7,
                      delayChildren: 0.3,
                      staggerChildren: 0.05,
                    },
                  },
                  closed: {
                    clipPath: "inset(10% 50% 90% 50% round 10px)",
                    transition: {
                      type: "spring",
                      bounce: 0,
                      duration: 0.3,
                    },
                  },
                }}
                style={{ pointerEvents: modalOpen ? "auto" : "none" }}
                className="absolute top-60 lg:top-20 lg:-right-2 lg:left-auto right-auto left-60  backdrop-blur-3xl menumorphism  text-slate-100 rounded-2xl  space-y-5 p-5 px-10 z-[99950000] flex flex-col gap-[2px] max-w-[250px] w-[250px] min-w-[250px]"
                onMouseEnter={() => (
                  setSubModal5Open(true), setModalOpen(true)
                )}
                onMouseLeave={() => setSubModal5Open(false)}
              >
                <Link href="/gst">
                  <motion.li
                    variants={itemVariants}
                    className="flex gap-10 justify-between cursor-pointer hover:scale-105"
                  >
                    PAN / TAN{" "}
                  </motion.li>
                </Link>
                <Link href="/gst">
                  <motion.li
                    variants={itemVariants}
                    className="flex gap-10 justify-between cursor-pointer hover:scale-105"
                  >
                    Passport
                  </motion.li>
                </Link>
                <Link href="/gst">
                  <motion.li
                    variants={itemVariants}
                    className="flex gap-10 justify-between cursor-pointer hover:scale-105"
                  >
                    Digital Signature
                  </motion.li>
                </Link>

                <Link href="/gst">
                  <motion.li
                    variants={itemVariants}
                    className="flex gap-10 justify-between cursor-pointer hover:scale-105"
                  >
                    Book Keeping
                  </motion.li>
                </Link>
              </motion.ul>
            )}
          </div>
          {isMobileMenuOpen && (
            <div className="space-y-1 px-2 pb-3 pt-2 bg-gray-700">
              {/* {navigation.map((item) => ( */}
              <Disclosure.Button
                // key={item.name}
                as="a"
                href="/"
                className={classNames(
                  pathname === "/"
                    ? "bg-slate-900 text-white"
                    : "text-gray-300 hover:bg-slate-700 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
                // aria-current={item.current ? "page" : undefined}
              >
                Home{" "}
              </Disclosure.Button>
              <Disclosure.Button
                // key={item.name}
                as="div"
                // href="#"
                className={classNames(
                  pathname === "#"
                    ? "bg-slate-900 text-white"
                    : "text-gray-300 hover:bg-slate-700 hover:text-white",
                  " rounded-md px-3 py-2 text-base font-medium cursor-pointer flex justify-between"
                )}
                onClick={() => setModalOpen(!modalOpen)}
              >
                Services
                <motion.div
                  variants={{
                    open: { rotate: 180 },
                    closed: { rotate: 0 },
                  }}
                  transition={{ duration: 0.2 }}
                  style={{ originY: 0.55 }}
                >
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 20 20"
                    fill="rgb(209 213 219)"
                    className="text-gray-300"
                  >
                    <path d="M0 7 L 20 7 L 10 16" />
                  </svg>
                </motion.div>
              </Disclosure.Button>
              <Disclosure.Button
                // key={item.name}
                as="a"
                href="/contact"
                className={classNames(
                  pathname == "/contact"
                    ? "bg-slate-900 text-white"
                    : "text-gray-300 hover:bg-slate-700 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium"
                )}
                // aria-current={item.current ? "page" : undefined}
              >
                Contact
              </Disclosure.Button>
              {/* ))} */}
            </div>
          )}
        </>
      )}
    </Disclosure>
  );
};

export default Navbar;
