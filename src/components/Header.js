import React, { useState } from "react";
import { ImCancelCircle } from "react-icons/im";

// import link
import { Link } from "react-router-dom";
// import logo
import Logo from "../assets/img/logo.svg";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="py-6 mb-12 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <div className="hidden sm:flex items-center gap-14 font-semibold">
          <Link to="/">
            {/* <img src={Logo} alt="" /> */}
            <h1 className=" font-black" style={{fontSize:'30px'}}>Estatery.</h1>
          </Link>
          <Link className="bg-purple-200 hover:bg-purple-300 text-purple-900 font-bold py-2 px-4 rounded" to="/">
            Rent 
          </Link>
          <Link className="hover:text-violet-900 transition" to="/">
            Buy
          </Link>
          <Link className="hover:text-violet-900 transition" to="/">
            Sell
          </Link>
          <Link className="hover:text-violet-900 transition">
            Manage Property
          </Link>
        </div>
        <div className="hidden sm:flex items-center gap-6">
          <Link className="hover:text-violet-900 transition" to="/">
            Log in
          </Link>
          <Link
            className="bg-violet-700 hover:bg-violet-800 text-white px-4 py-3 rounded-lg transition"
            to="/"
          >
            Sign up
          </Link>
        </div>
        <div
          className="flex flex-col-reverse sm:hidden bg-violet-400 hover:bg-violet-500 text-white px-4 py-3 rounded-lg transition cursor-pointer"
          onClick={() => setShowMenu((prev) => !prev)}
        >
          {showMenu ? (
            <div className="flex justify-end">
              <ImCancelCircle size={18} />
            </div>
          ) : (
            "Menu"
          )}
          {showMenu && (
            <ul className="">
              <Link to="/">
                <li className="hover:text-violet-900 transition">Sign up</li>
              </Link>
              <Link to="/">
                <li className="hover:text-violet-900 transition">Login</li>
              </Link>
              <Link to="/addprop">
                <li className="hover:text-violet-900 transition">
                  Add Property
                </li>
              </Link>
              <Link to="/fav">
                <li className="hover:text-violet-900 transition">Favourites</li>
              </Link>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
