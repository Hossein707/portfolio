import { Link, useLocation } from "react-router";
import DarkmodeButton from "./DarkmodeButton"
import { useEffect, useRef, useState } from "react";

const Navbar = () => {
    const location = useLocation()

    const [isOpen, setIsOpen] = useState(false);
    const hamburgerMenu = () => {
        setIsOpen(prev => !prev)
    }



    useEffect(() => {
        // Function that changes state to close the menu
        const handleScroll = () => {
            if (isOpen) {
                setIsOpen(false);
            }
        };

        // Attach listener only when the menu is open
        if (isOpen) {
            window.addEventListener('scroll', handleScroll);
        }

        // Clean up event listener when component unmounts or menu closes
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isOpen]);

    return (

        <header className="py-2 px-4 fixed top-0 left-0 right-0 flex gap-2 items-center justify-between z-20 bg-port-white-color border-b-2 border-b-port-main-color md:px-6 lg:px-8 dark:bg-port-dark-bg" id="header">

            <div className="flex gap-2 items-center">
                <div className="text-sm text-port-second-color dark:text-port-dark-text">
                    <i className="fa fa-user ml-1"></i>
                    <span>حسین اینانلو</span>
                </div>

                <DarkmodeButton />

            </div>
            {
                location.pathname === "/"
                    ? (
                        <>

                            <nav >
                                <ul className="hidden sm:flex sm:items-center gap-3 text-base ml-2 last:ml-0 text-port-text-color md:text-lg md:gap-4 lg:text-xl lg:gap-5">
                                    <li className="border-b-2 border-b-transparent hover:border-port-second-color hover:text-port-second-color dark:text-port-dark-text dark:hover:text-port-white-color dark:hover:border-b-port-white-color"><a href="#home">خانه</a></li>
                                    <li className="border-b-2 border-b-transparent hover:border-port-second-color hover:text-port-second-color dark:text-port-dark-text dark:hover:text-port-white-color dark:hover:border-b-port-white-color"><a href="#about-me">درباره ی من</a></li>
                                    <li className="border-b-2 border-b-transparent hover:border-port-second-color hover:text-port-second-color dark:text-port-dark-text dark:hover:text-port-white-color dark:hover:border-b-port-white-color"><a href="#experience">تجربیات من</a></li>
                                    <li className="border-b-2 border-b-transparent hover:border-port-second-color hover:text-port-second-color dark:text-port-dark-text dark:hover:text-port-white-color dark:hover:border-b-port-white-color"><a href="#skills">مهارت ها</a></li>
                                    <li className="border-b-2 border-b-transparent hover:border-port-second-color hover:text-port-second-color dark:text-port-dark-text dark:hover:text-port-white-color dark:hover:border-b-port-white-color"><a href="#projects">نمونه کارها</a></li>
                                </ul>
                            </nav>

                            <label onClick={hamburgerMenu} className={`${isOpen ? 'fa fa-times' : 'fa fa-bars'} hover:text-port-second-color hover:cursor-pointer z-20 dark:text-port-dark-text sm:hidden`}></label>

                            <nav className={`${isOpen ? 'active-clip-path' : 'deactive-clip-path'} sm:hidden transition-all duration-500 absolute z-10 top-9 left-0 right-0 bg-white dark:bg-port-dark-bg border-b-2 border-b-port-main-color`}>
                                <ul className="w-full text-center mt-2 text-base ml-2 text-port-text-color">
                                    <li className="pb-1 pt-1 border-b border-white hover:bg-port-bg-color group hover:text-port-second-color dark:text-port-dark-text dark:hover:bg-port-dark-bg3 dark:hover:text-white"><a href="#home">خانه</a></li>
                                    <li className="pb-1 pt-1 border-b border-white hover:bg-port-bg-color group hover:text-port-second-color dark:text-port-dark-text dark:hover:bg-port-dark-bg3 dark:hover:text-white"><a href="#about-me">درباره ی من</a></li>
                                    <li className="pb-1 pt-1 border-b border-white hover:bg-port-bg-color group hover:text-port-second-color dark:text-port-dark-text dark:hover:bg-port-dark-bg3 dark:hover:text-white"><a href="#experience">تجربیات من</a></li>
                                    <li className="pb-1 pt-1 border-b border-white hover:bg-port-bg-color group hover:text-port-second-color dark:text-port-dark-text dark:hover:bg-port-dark-bg3 dark:hover:text-white"><a href="#skills">مهارت ها</a></li>
                                    <li className="pb-1 pt-1 border-b border-white hover:bg-port-bg-color group hover:text-port-second-color dark:text-port-dark-text dark:hover:bg-port-dark-bg3 dark:hover:text-white"><a href="#projects">نمونه کارها</a></li>
                                </ul>
                            </nav></>
                    )
                    :
                    <>
                        <Link className="border-b-2 border-b-transparent text-sm sm:text-base hover:border-port-second-color hover:text-port-second-color dark:text-port-dark-text dark:hover:text-port-white-color dark:hover:border-b-port-white-color" to={"/"}><i className="fa fa-home ml-1"></i>خانه</Link>
                    </>
            }

        </header>
    )
}

export default Navbar