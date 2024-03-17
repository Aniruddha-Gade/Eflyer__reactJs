import { useEffect, useState } from "react";
import { headerLinks } from "../../constants";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {

    const [lastScollY, setLastScrollY] = useState(0);
    const [showNavBar, setShowNavBar] = useState('top');


    // control Navbar - show / hide   
    const controlNavbar = () => {

        if (window.scrollY > 200) {
            if (window.scrollY > lastScollY) {
                setShowNavBar('hide')
            }
            else {
                setShowNavBar('show')
            }
        }

        else {
            setShowNavBar('top')
        }

        setLastScrollY(window.scrollY);
    }


    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);

        return () => {
            window.removeEventListener('scroll', controlNavbar);
        }
    })


    return (
        <nav className={`${showNavBar} w-full h-14 fixed flex justify-between items-center p-2 px-5 bg-zinc-800 text-white z-[10] translate-y-0 transition-all`}>

            {/* company logo */}
            <Link
                to="/"
                className="flex items-center gap-2"
            >
                <img
                    src="../../../public/eflyer-icon.png"
                    // width={40}
                    // height={40}
                    alt="Eflyer Logo"
                    className="w-8 h-8 md:w-10 md:h-10"
                />
                <p className="text-white text-base md:text-2xl font-rubik ">Eflyer</p>
            </Link>


            <div className="w-full flex justify-end md:justify-center items-center">
                <ul className="hidden sm:flex gap-6 ">
                    {headerLinks.map((link) => (
                        <li key={link.id} className="py-4 capitalize relative hover:text-orange-500 transition-all duration-200 group cursor-pointer">
                            <Link to={link.route}
                                className=""
                            >
                                {link.label}
                            </Link>
                            <div className='hidden group-hover:block absolute h-1 w-full bg-orange-500 bottom-0'></div>
                        </li>
                    ))}
                </ul>

                <div className="sm:hidden cursor-pointer">
                    <GiHamburgerMenu size={30} />
                </div>

            </div>

        </nav>
    );
};

export default Navbar;
