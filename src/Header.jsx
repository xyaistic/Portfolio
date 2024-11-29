import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';
import logo from '../src/assets/logo.png';
import { ProjectList } from './ProjectList'; // Import your ProjectList component
import { FaGripLines } from "react-icons/fa";
import { PiDotsThreeOutlineFill } from "react-icons/pi";

export default function Header() {
    const [showNotifications, setShowNotifications] = useState(false); // Visibility state
    const [isHiding, setIsHiding] = useState(false); // Animation state
    const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu state
    const notificationRef = useRef(null);

    // Function to toggle notifications
    const toggleNotifications = () => {
        if (showNotifications) {
            // Start hide animation
            setIsHiding(true);
            setTimeout(() => {
                setShowNotifications(false);
                setIsHiding(false);
            }, 300); // Duration should match the CSS hide animation duration
        } else {
            setShowNotifications(true); // Show the list
        }
    };

    // Hide the notification list if clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (notificationRef.current && !notificationRef.current.contains(event.target)) {
                setIsHiding(true);
                setTimeout(() => {
                    setShowNotifications(false);
                    setIsHiding(false);
                }, 300);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className="flex w-full justify-center sticky top-0 z-[100000] bg-white md:px-5 px-2">
            <div className="py-5 md:py-9 bg-white text-orange-400 flex justify-between items-center w-full max-w-screen-xl mx-auto">
                <div>
                    <NavLink to="" className="">
                        <img src={logo} alt="Logo" className="w-36" />
                    </NavLink>
                </div>

                {/* Menu button for tablet and mobile */}
                <button
                    className="block md:hidden text-orange-400  border-orange-300 p-2 rounded-md"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {/* <FaGripLines /> */}
                    <PiDotsThreeOutlineFill size={24} />

                </button>

                {/* Navigation Links */}
                <div
                    className={`flex-col md:flex-row gap-2 font-medium text-lg border border-orange-300 rounded-lg p-1 justify-center items-center md:flex ${isMenuOpen ? 'flex absolute top-20 bg-white z-10 right-10' : 'hidden'
                        }`}
                >
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `text-sm rounded-md p-1 px-3 ${isActive ? 'bg-orange-100 text-orange-600' : 'hover:bg-orange-100'
                            }`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="profile"
                        className={({ isActive }) =>
                            `text-sm rounded-md p-1 px-3 ${isActive ? 'bg-orange-100 text-orange-600' : 'hover:bg-orange-100'
                            }`
                        }
                    >
                        Profile
                    </NavLink>
                    <NavLink
                        to="contact"
                        className={({ isActive }) =>
                            `text-sm rounded-md p-1 px-3 ${isActive ? 'bg-orange-100 text-orange-600' : 'hover:bg-orange-100'
                            }`
                        }
                    >
                        Collaborate
                    </NavLink>
                </div>
            </div>

            {showNotifications && (
                <div
                    ref={notificationRef}
                    className={`absolute bg-red-500 top-20 right-24 z-10 ${isHiding ? 'animate-slide-up' : 'animate-slide-down'
                        }`}
                >
                    <ProjectList />
                </div>
            )}
        </header>
    );
}
