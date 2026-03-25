import React from 'react'
import logo from "../assets/logo.png";

const Navbar = () => {
    return (
        <nav className="w-full h-16 bg-[#293343] flex items-center px-4 sm:px-6 lg:px-8">
            {/* <nav className="w-[1440px] max-w-full h-[56.83px] bg-[#252F3D] mx-auto flex items-center px-4 sm:px-6 lg:px-8"> */}
            <img
                src={logo}
                alt="logo"
                className="h-8 sm:h-4 lg:h-8 w-auto " />

        </nav>
    )
}
export default Navbar
