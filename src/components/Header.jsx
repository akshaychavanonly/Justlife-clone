import { FaSearch, FaMapMarkerAlt, FaBars } from "react-icons/fa";
import { images } from "../assets/imges/Images";

function Header() {
  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto flex items-center justify-between px-4 py-2">
          {/* Left Side: Website Logo */}
          <div className="flex items-center">
            <img
              src={images.justlifelogi}
              alt="Website Logo"
              className="h-10 w-auto"
            />
          </div>

          {/* Middle: Search Bar */}
          <div className="hidden md:flex items-center bg-white border rounded-full shadow-sm px-4 py-2 w-full max-w-md">
            <FaMapMarkerAlt className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search for a location..."
              className="flex-grow outline-none text-sm text-gray-600"
            />
            <button className="ml-2">
              <FaSearch className="text-gray-500" />
            </button>
          </div>

          {/* Right Side: Buttons and Hamburger */}
          <div className="flex items-center space-x-4">
            {/* Button 1 with Image */}
            <button className="flex items-center justify-center rounded-full h-10 w-10 hover:scale-110 hover:shadow-lg transition transform duration-300">
              <img
                src={images.justlife}
                alt="JustLife"
                className="h-8 w-8 object-contain"
              />
            </button>

            {/* Button 2 with Image */}
            <button className="flex items-center justify-center border rounded-full h-10 w-10 hover:scale-110 hover:shadow-lg transition transform duration-300">
              <img
                src={images.dubaiflag}
                alt="Dubai Flag"
                className="h-8 w-8 object-contain"
              />
            </button>

            {/* Hamburger Menu */}
            <div className="md:hidden">
              <button className="flex items-center justify-center bg-gray-200 rounded-full h-10 w-10 hover:scale-110 hover:shadow-lg transition transform duration-300">
                <FaBars className="text-gray-600 text-lg" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden px-4 py-2">
          <div className="flex items-center bg-white border rounded-full shadow-sm px-4 py-2">
            <FaMapMarkerAlt className="text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search for a location..."
              className="flex-grow outline-none text-sm text-gray-600"
            />
            <button className="ml-2">
              <FaSearch className="text-gray-500" />
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
