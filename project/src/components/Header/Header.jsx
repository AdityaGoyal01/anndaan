import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";




export default function Header() {
    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
    return (
        <header className="shadow top-0">
          <nav className="bg-white border-gray-200 px-4 lg:px-6 py-3">
            <div className="flex justify-between items-center mx-auto max-w-screen-xl">
              
              {/* Left Side: Logo + Nav Links */}
              <div className="flex items-center gap-8">
                {/* Logo */}
                <Link to="/" className="flex items-center">
                  <img
                    src="/images/logo.jpeg"
                    className="mr-3 h-12"
                    alt="Logo"
                  />
                </Link>
    
                {/* Navigation Links */}
                <div className="hidden lg:flex " >
                  <ul className="flex font-medium space-x-2">
                    <li>
                      <NavLink
                        to="/"
                        className={({ isActive }) =>
                          `block py-2 pr-3 pl-2 ml-[350px] duration-200 ${isActive ? "text-yellow-500" : "text-gray-700"}
                          hover:text-orange-700`
                        }
                      >
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/donate"
                        className={({ isActive }) =>
                          `block py-2 pr-3 pl-2 duration-200 ${isActive ? "text-yellow-500" : "text-gray-700"}
                          hover:text-orange-700`
                        }
                      >
                        Donate
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/collect"
                        className={({ isActive }) =>
                          `block py-2 pr-3 pl-2 duration-200 ${isActive ? "text-yellow-500" : "text-gray-700"}
                          hover:text-orange-700`
                        }
                      >
                        Collect
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
    
              {/* Right Side: Auth Buttons */}
              <div className="flex items-center gap-4">
                {!isAuthenticated ? (
                  <>
                    <button
                      onClick={() => {
                        localStorage.setItem("userRole", "donor");
                        loginWithRedirect();
                      }}
                      className="bg-yellow-400 text-white-500 px-4 py-2 rounded hover:text-gray-500"
                    >
                      Login as Donor
                    </button>
                    <button
                      onClick={() => {
                        localStorage.setItem("userRole", "collector");
                        loginWithRedirect();
                      }}
                      className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                    >
                      Login as Collector
                    </button>
                  </>
                ) : (
                  <>
                    <p className="text-gray-700">{user.name}</p>
                    <NavLink
                      to="/dashboard"
                      className="text-blue-600 font-semibold hover:underline"
                    >
                      Profile
                    </NavLink>
                    <button
                      onClick={() => logout({ returnTo: window.location.origin })}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                      Log Out
                    </button>
                  </>
                )}
              </div>
    
            </div>
          </nav>
        </header>
    );
}
