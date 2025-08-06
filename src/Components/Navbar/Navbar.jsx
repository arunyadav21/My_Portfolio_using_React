import { RiCloseLargeLine, RiMenu2Line } from '@remixicon/react';
import React, { useState, useEffect } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Add scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'py-2 bg-blue-600 shadow-lg' : 'py-4 bg-gradient-to-r from-blue-500 to-blue-600'}`}>
            <div className="container mx-auto px-6 md:px-12 lg:px-20">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <a href="#" className="text-2xl font-bold tracking-wide text-white hover:text-blue-100 transition-colors duration-300 flex items-center">
                        <span className="mr-2">🚀</span>
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100">
                            Portfolio
                        </span>
                    </a>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <NavLink href="#About">About</NavLink>
                        <NavLink href="#Experience">Experience</NavLink>
                        <NavLink href="#Projects">Projects</NavLink>
                        <NavLink href="#Contact">Contact</NavLink>
                        <button className="ml-4 px-6 py-2 bg-white text-blue-600 rounded-full font-medium hover:bg-blue-50 hover:shadow-md transition-all duration-300">
                            Hire Me
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button 
                        className="md:hidden text-white focus:outline-none"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? (
                            <RiCloseLargeLine size={30} className="transition-transform duration-300 transform hover:rotate-90" />
                        ) : (
                            <RiMenu2Line size={30} className="transition-transform duration-300 transform hover:rotate-180" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} transition-all duration-500 overflow-hidden`}>
                    <div className="pt-4 pb-6 space-y-4 ">
                        <MobileNavLink  href="#About" onClick={toggleMenu}><div className='text-blue-600 font-bold w-full px-6 size-5 '>
                            About</div></MobileNavLink>
                        <MobileNavLink href="#Experience" onClick={toggleMenu}><div className='text-blue-600 font-bold w-full px-6 size-5 '>
                            Experience</div></MobileNavLink>
                        <MobileNavLink href="#Projects" onClick={toggleMenu}><div className='text-blue-600 font-bold w-full px-6 size-5 '>
                            Projects</div></MobileNavLink>
                        <MobileNavLink href="#Contact" onClick={toggleMenu}><div className='text-blue-600 font-bold w-full px-6 size-5 '>
                            Contact</div></MobileNavLink>
                        <button className="w-full mt-4 px-6 py-3 bg-white text-blue-600 rounded-full font-medium hover:bg-blue-50 transition-all duration-300">
                            Hire Me
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

// Reusable NavLink component for desktop
const NavLink = ({ href, children }) => (
    <a 
        href={href} 
        className="relative text-white font-medium hover:text-blue-100 transition-colors duration-300 group"
    >
        {children}
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
    </a>
);

// Reusable NavLink component for mobile
const MobileNavLink = ({ href, children, onClick }) => (
    <a 
        href={href} 
        onClick={onClick}
        className="block px-4 py-3 text-white font-medium rounded-lg bg-white bg-opacity-10 hover:bg-opacity-20 transition-all duration-300"
    >
        {children}
    </a>
);

export default Navbar;