import React, { Fragment } from "react";

const Navbar = () => {
  return (
    <>
      <header class="fixed w-full top-0 z-20 bg-transparent transition-all duration-300 ease-in-out">
        <div class="container mx-auto flex items-center justify-between p-4 text-white">
          <img src="https://shams.id/wp-content/uploads/2020/10/LOGO-white-1-180x73.png" />
          <nav>
            <ul class="hidden md:flex space-x-6 text-lg">
              <li>
                <a href="#about" class="hover:text-orange-500">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#project" class="hover:text-orange-500">
                  Project
                </a>
              </li>
              <li>
                <a href="#product" class="hover:text-orange-500">
                  Product
                </a>
              </li>
              <li>
                <a href="#system" class="hover:text-orange-500">
                  Sistem PLTS
                </a>
              </li>
              <li>
                <a href="#contact" class="hover:text-orange-500">
                  Contacts
                </a>
              </li>
            </ul>
            <div class="md:hidden flex items-center">
              <button id="menu-btn" class="text-white p-2">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
