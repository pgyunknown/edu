import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null); // Tracks which dropdown is open

  const NavBar = (key) => {
    setDropdownOpen(dropdownOpen === key ? null : key);
  };

  return (
    <nav className="bg-white shadow-sm px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Text Logo on the Left */}
        <div className="flex items-center">
          <h1 className="text-xl md:text-xl font-serif tracking-tight">
            <span className="text-black">.edu</span>
            <span className="text-black ">Tech</span>
            <span className="text-black">Sphere</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-6 text-sm font-semibold">
          <li><a href="#" className="hover:text-gray-600">HOME</a></li>

          {/* About Us Dropdown */}
          <li className="group relative cursor-pointer">
            <span className="hover:text-gray-600">ABOUT US</span>
            <div className="absolute left-0 top-full mt-1 hidden group-hover:block bg-white shadow-md rounded-md py-2 w-40 z-10">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">About Us</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Our Team</a>
            </div>
          </li>

          {/* Programs Dropdown */}
          <li className="group relative cursor-pointer">
            <span className="hover:text-gray-600">PROGRAMS</span>
            <div className="absolute left-0 top-full mt-1 hidden group-hover:block bg-white shadow-md rounded-md py-2 w-40 z-10">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Workshops</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Events</a>
            </div>
          </li>

          <li><a href="#" className="hover:text-gray-600">CONTACT</a></li>
        </ul>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-2 text-sm font-semibold">
          <a href="#" className="block px-2 py-1 hover:bg-gray-100 rounded">HOME</a>

          {/* About Us Mobile Dropdown */}
          <div>
            <button
              onClick={() => toggleDropdown("about")}
              className="w-full text-left px-2 py-1 hover:bg-gray-100 rounded"
            >
              ABOUT US
            </button>
            {dropdownOpen === "about" && (
              <div className="ml-4">
                <a href="#" className="block px-2 py-1 hover:bg-gray-100 rounded">About Us</a>
                <a href="#" className="block px-2 py-1 hover:bg-gray-100 rounded">Our Team</a>
              </div>
            )}
          </div>

          {/* Programs Mobile Dropdown */}
          <div>
            <button
              onClick={() => toggleDropdown("programs")}
              className="w-full text-left px-2 py-1 hover:bg-gray-100 rounded"
            >
              PROGRAMS
            </button>
            {dropdownOpen === "programs" && (
              <div className="ml-4">
                <a href="#" className="block px-2 py-1 hover:bg-gray-100 rounded">Workshops</a>
                <a href="#" className="block px-2 py-1 hover:bg-gray-100 rounded">Events</a>
              </div>
            )}
          </div>

          <a href="#" className="block px-2 py-1 hover:bg-gray-100 rounded">CONTACT</a>
        </div>
      )}
    </nav>
  );
}
