import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center fixed top-0 w-full z-50 shadow-md">
      <div className="flex items-center space-x-4">
        <Link to="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzBsAGpvfrHmckxmY00R-Q7h48YDq9gZb5CzGRjXtxyNrPNFin6ZTfT5ox6e49YX_rezQ&usqp=CAU"
            alt="Logo"
            className="h-10 cursor-pointer ml-4 lg:ml-20"
          />
        </Link>
        <h1 className="text-xl font-bold hidden lg:block">Research Lab</h1>
      </div>
      <ul
        className={`lg:flex space-x-4 font-semibold ${menuOpen ? "block" : "hidden"} lg:block absolute lg:static top-16 right-0 w-full lg:w-auto bg-gray-800 lg:bg-transparent text-end ml-5 lg:text-left transition-all duration-300 ease-in-out`}
      >
        <li><Link to="/" className="block lg:inline-block hover:bg-gray-400 hover:text-white px-3 py-2 rounded">Home</Link></li>
        <li><Link to="/about" className="block lg:inline-block hover:bg-gray-400 hover:text-white px-3 py-2 rounded">About</Link></li>
        <li><Link to="/research" className="block lg:inline-block hover:bg-gray-400 hover:text-white px-3 py-2 rounded">Research</Link></li>
        <li><Link to="/publications" className="block lg:inline-block hover:bg-gray-400 hover:text-white px-3 py-2 rounded">Publications</Link></li>
        <li><Link to="/laboratory" className="block lg:inline-block hover:bg-gray-400 hover:text-white px-3 py-2 rounded">Laboratory</Link></li>
        <li><Link to="/gallery" className="block lg:inline-block hover:bg-gray-400 hover:text-white px-3 py-2 rounded">Gallery</Link></li>
        <li><Link to="/students" className="block lg:inline-block hover:bg-gray-400 hover:text-white px-3 py-2 rounded">Students</Link></li>
        <li><Link to="/contact" className="block lg:inline-block hover:bg-gray-400 hover:text-white px-3 py-2 rounded">Contact</Link></li>
      </ul>
      <button
        className="lg:hidden text-white transition-transform duration-300 ease-in-out transform hover:scale-110"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} size="lg" />
      </button>
    </nav>
  );
}
