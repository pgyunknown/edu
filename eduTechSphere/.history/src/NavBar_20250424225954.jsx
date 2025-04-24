import React from 'react'

const NavBar = () => {
  return (
    <>

<nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
  {/* Logo on the Left */}
  <div className="flex items-center">
    <img src="/companyLogo.png" alt="Logo" className="h-10 w-auto" />
  </div>

  {/* Nav Items on the Right */}
  <ul className="hidden md:flex items-center space-x-6 text-sm font-semibold">
    {/* HOME */}
    <li><a href="#" className="hover:text-gray-600">HOME</a></li>

    {/* ABOUT US with Dropdown */}
    <li className="group relative cursor-pointer">
      <span className="hover:text-gray-600">ABOUT US</span>
      <div className="absolute left-0 top-full mt-1 hidden group-hover:block bg-white shadow-md rounded-md py-2 w-40 z-10">
        <a href="#" className="block px-4 py-2 hover:bg-gray-100">About Us</a>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100">Our Team</a>
      </div>
    </li>

    {/* PROGRAMS with Dropdown */}
    <li className="group relative cursor-pointer">
      <span className="hover:text-gray-600">PROGRAMS</span>
      <div className="absolute left-0 top-full mt-1 hidden group-hover:block bg-white shadow-md rounded-md py-2 w-40 z-10">
        <a href="#" className="block px-4 py-2 hover:bg-gray-100">Workshops</a>
        <a href="#" className="block px-4 py-2 hover:bg-gray-100">Events</a>
      </div>
    </li>

    {/* CONTACT */}
    <li><a href="#" className="hover:text-gray-600">CONTACT</a></li>
  </ul>
</nav>


    </>
  )
}

export default NavBar