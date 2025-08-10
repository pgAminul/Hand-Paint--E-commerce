import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdMenu, IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";

function Navbar() {
  const navbar = [
    { title: "Home", link: "/" },
    { title: "All Products", link: "/all-products" },
    { title: "Mens Collection", link: "/mens-collections" },
    { title: "Whomens Collection", link: "/whomens-collection" },
    { title: "Contact Us", link: "/contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  const menuVariants = {
    hidden: {
      opacity: 0,
      x: "-100%",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold">
              <span className="text-3xl text-blue-400 font-lobster">M</span>
              ahbuba
              <span className="text-3xl text-blue-400 font-lobster"> H</span>
              and
              <span className="text-3xl text-blue-400 font-lobster"> P</span>
              aint
            </h2>
          </motion.div>

          <div className="hidden lg:flex items-center space-x-6">
            {navbar.map((n, i) => (
              <NavLink
                to={n.link}
                key={i}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
                    isActive
                      ? "bg-blue-600 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`
                }
              >
                {n.title}
              </NavLink>
            ))}
            <div className="flex space-x-4 ml-4">
              <NavLink
                to="/login"
                className="px-4 py-2 rounded-md bg-transparent border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-colors duration-300"
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors duration-300"
              >
                Register
              </NavLink>
            </div>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <IoMdClose className="block h-6 w-6" />
              ) : (
                <IoMdMenu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
            className="lg:hidden fixed inset-0 z-50 bg-gray-900 bg-opacity-95"
            style={{ backdropFilter: "blur(5px)" }}
          >
            <div className="flex flex-col h-full pt-20 px-6 space-y-4">
              {navbar.map((n, i) => (
                <motion.div key={i} variants={itemVariants}>
                  <NavLink
                    to={n.link}
                    className={({ isActive }) =>
                      `block px-4 py-3 text-xl rounded-lg ${
                        isActive
                          ? "bg-blue-600 text-white"
                          : "text-gray-300 hover:bg-gray-800"
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    {n.title}
                  </NavLink>
                </motion.div>
              ))}

              <motion.div variants={itemVariants} className="pt-8">
                <NavLink
                  to="/login"
                  className="block w-full px-4 py-3 mb-4 text-center text-xl rounded-lg bg-transparent border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </NavLink>
                <NavLink
                  to="/register"
                  className="block w-full px-4 py-3 text-center text-xl rounded-lg bg-blue-600 text-white hover:bg-blue-700"
                  onClick={() => setIsOpen(false)}
                >
                  Register
                </NavLink>
              </motion.div>

              <motion.button
                variants={itemVariants}
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white"
              >
                <IoMdClose className="h-8 w-8" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

export default Navbar;
