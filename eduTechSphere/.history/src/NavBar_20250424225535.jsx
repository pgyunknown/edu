import React from 'react'

const NavBar = () => {
  return (
    <>

<nav class="flex items-center justify-between px-6 py-4 bg-white shadow-sm">

  <div class="flex items-center space-x-3">
    <img src="/companyLogo.png" alt="Logo" className="h-50 w-8" />
    <div class="border-l border-black h-6"></div>
    <div class="pl-3 text-sm leading-tight">
      <div class="text-black">Pain</div>
      <div class="text-black">is inevitable</div>
    </div>
  </div>


  <ul class="hidden md:flex items-center space-x-6 text-sm font-semibold">
    <li class="text-gray-300 cursor-default">HOME</li>


    <li class="group relative cursor-pointer">
      <span class="hover:text-gray-600">ABOUT US</span>
      <div class="absolute left-0 top-full mt-1 hidden group-hover:block bg-white shadow-md rounded-md py-2 w-40 z-10">
        <a href="#" class="block px-4 py-2 hover:bg-gray-100">Our Story</a>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100">Team</a>
      </div>
    </li>


    <li class="group relative cursor-pointer">
      <span class="hover:text-gray-600">PROGRAMS</span>
      <div class="absolute left-0 top-full mt-1 hidden group-hover:block bg-white shadow-md rounded-md py-2 w-40 z-10">
        <a href="#" class="block px-4 py-2 hover:bg-gray-100">Workshops</a>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100">Bootcamps</a>
      </div>
    </li>


    <li><a href="#" class="hover:text-gray-600">INPULSE</a></li>


    <li class="group relative cursor-pointer">
      <span class="hover:text-gray-600">RESOURCES</span>
      <div class="absolute left-0 top-full mt-1 hidden group-hover:block bg-white shadow-md rounded-md py-2 w-40 z-10">
        <a href="#" class="block px-4 py-2 hover:bg-gray-100">Blog</a>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100">Reports</a>
      </div>
    </li>


    <li><a href="#" class="hover:text-gray-600">CONTACT US</a></li>
  </ul>
</nav>

    </>
  )
}

export default NavBar