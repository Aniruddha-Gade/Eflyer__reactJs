import { headerLinks } from "../../constants";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center py-2 bg-zinc-800 text-white">

            {/* company logo */}
            <Link
                to="/"
                className="flex items-center gap-2 px-5">
                <img
                    src="../../../public/eflyer-icon.png"
                    width={40}
                    height={40}
                    alt="Eflyer Logo"
                />
                <p className="text-white text-2xl font-rubik ">Eflyer</p>
            </Link>


            <div className="w-full flex justify-center items-center ">
                <ul className="flex gap-6 ">
                    {headerLinks.map((link) => (
                        <li key={link.id} className="capitalize">
                            <Link to={link.route}>
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

            </div>

        </nav>
    );
};

export default Navbar;
