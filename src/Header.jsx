import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import './index.css';
import logo from '../src/assets/logo.png';
import { ProjectList } from './ProjectList'; // Import your ProjectList component

export default function Header() {
    const [showNotifications, setShowNotifications] = useState(false); // Visibility state
    const [isHiding, setIsHiding] = useState(false); // Animation state
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
        <header className='flex w-full justify-center sticky top-0 z-[100000] md:px-5 px-2 '>
            <div className=' py-9 bg-white text-orange-400 rounded-2xl flex justify-between items-center w-full max-w-screen-xl mx-auto'>
                <div>
                    <img src={logo} alt="Logo" className='w-36' />
                </div>
                <div className='flex gap-5 font-medium text-lg border border-orange-300 rounded-lg p-1 justify-center items-center'>
                    <NavLink to='' className=" text-sm rounded-md hover:bg-orange-100 p-1">Home</NavLink>
                    <NavLink to='about' className=" text-sm rounded-md hover:bg-orange-100 p-1">About</NavLink>
                    <NavLink to='contact' className=" text-sm rounded-md hover:bg-orange-100 p-1">Contact</NavLink>
                    {/* <NavLink to='#' className="hover:text-black text-sm flex items-center" onClick={toggleNotifications}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" viewBox="0 0 36 36" aria-hidden="true" role="img" className="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet">
                            <path fill="#DD2E44" d="M35.885 11.833c0-5.45-4.418-9.868-9.867-9.868c-3.308 0-6.227 1.633-8.018 4.129c-1.791-2.496-4.71-4.129-8.017-4.129c-5.45 0-9.868 4.417-9.868 9.868c0 .772.098 1.52.266 2.241C1.751 22.587 11.216 31.568 18 34.034c6.783-2.466 16.249-11.447 17.617-19.959c.17-.721.268-1.469.268-2.242z" />
                        </svg>
                    </NavLink> */}
                </div>
            </div>

            {showNotifications && (
                <div
                    ref={notificationRef}
                    className={`absolute top-20 right-24 z-10 ${
                        isHiding ? 'animate-slide-up' : 'animate-slide-down'
                    }`}
                >
                    <ProjectList />
                </div>
            )}
        </header>
    );
}
