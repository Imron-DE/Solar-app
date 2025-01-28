import React, { useState } from "react";
import Link from "next/link";
import LogoNav from "@/components/atoms/LogoNav";
import { useRouter } from "next/router";

const Navbar = () => {
  // Menyimpan state terpisah untuk setiap dropdown
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false);
  const [isSistemPltsDropdownOpen, setIsSistemPltsDropdownOpen] = useState(false);
  const [isContactsDropdownOpen, setIsContactsDropdownOpen] = useState(false);
  const router = useRouter();
  const isShamServicePage = router.pathname === "/shamservice";

  return (
    <header
      className={`fixed text-white w-full top-0 z-20 transition-all duration-300 ease-in-out ${isShamServicePage ? "bg-black text-white" : "bg-transparent"}`} // Ganti background menjadi hitam jika di halaman ShamService
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <LogoNav />

        {/* Navbar */}
        <nav>
          <ul className="flex space-x-6">
            {/* Link tanpa dropdown */}
            <li>
              <Link href="/" className="hover:text-blue-400 transition-colors duration-200">
                Home
              </Link>
            </li>
            {/* Dropdown "Tentang Kami" */}
            <li className="relative">
              <button onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)} className="flex items-center gap-x-1.5 text-sm font-semibold hover:text-blue-400 transition-colors duration-200">
                Tentang Kami
                <span className="text-gray-400">&#9660;</span>
              </button>

              {isAboutDropdownOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-white text-gray-800 shadow-lg rounded-md">
                  <li>
                    <Link href="/about" className="block px-4 py-2 text-sm hover:bg-gray-100">
                      Tentang Kami
                    </Link>
                  </li>
                  <li>
                    <Link href="/visimisi" className="block px-4 py-2 text-sm hover:bg-gray-100">
                      Visi & Misi
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <Link href="/project" className="hover:text-blue-400 transition-colors duration-200">
                Project
              </Link>
            </li>

            {/* Dropdown "Product" */}
            <li className="relative">
              <button onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)} className="flex items-center gap-x-1.5 text-sm font-semibold hover:text-blue-400 transition-colors duration-200">
                Product
                <span className="text-gray-400">&#9660;</span>
              </button>

              {isProductDropdownOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-white text-gray-800 shadow-lg rounded-md">
                  <li>
                    <Link href="/inverter" className="block px-4 py-2 text-sm hover:bg-gray-100">
                      Inverter
                    </Link>
                  </li>
                  <li>
                    <Link href="/product" className="block px-4 py-2 text-sm hover:bg-gray-100">
                      Solar Panel
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Dropdown "Sistem PLTS" */}
            <li className="relative">
              <button onClick={() => setIsSistemPltsDropdownOpen(!isSistemPltsDropdownOpen)} className="flex items-center gap-x-1.5 text-sm font-semibold hover:text-blue-400 transition-colors duration-200">
                Sistem PLTS
                <span className="text-gray-400">&#9660;</span>
              </button>

              {isSistemPltsDropdownOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-white text-gray-800 shadow-lg rounded-md">
                  <li>
                    <Link href="/offgrid" className="block px-4 py-2 text-sm hover:bg-gray-100">
                      Offgrid
                    </Link>
                  </li>
                  <li>
                    <Link href="/ongrid" className="block px-4 py-2 text-sm hover:bg-gray-100">
                      Ongrid
                    </Link>
                  </li>
                  <li>
                    <Link href="/hybrid" className="block px-4 py-2 text-sm hover:bg-gray-100">
                      Hybrid
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link href="/shamservice" className="hover:text-blue-400 transition-colors duration-200">
                Shams Service
              </Link>
            </li>

            {/* Dropdown "Contacts" */}
            <li className="relative">
              <button onClick={() => setIsContactsDropdownOpen(!isContactsDropdownOpen)} className="flex items-center gap-x-1.5 text-sm font-semibold hover:text-blue-400 transition-colors duration-200">
                Contacts
                <span className="text-gray-400">&#9660;</span>
              </button>

              {isContactsDropdownOpen && (
                <ul className="absolute left-0 mt-2 w-48 bg-white text-gray-800 shadow-lg rounded-md">
                  <li>
                    <Link href="/faq" className="block px-4 py-2 text-sm hover:bg-gray-100">
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="block px-4 py-2 text-sm hover:bg-gray-100">
                      Blog
                    </Link>
                  </li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
