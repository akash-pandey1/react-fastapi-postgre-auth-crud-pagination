import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [navs, setNavs] = useState([
    { path: '/', name: 'Home' },
    { path: '/dashboard', name: 'Dashboard' },
    { path: '/users', name: 'Users' }
  ]);
    return (
        <header className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link to="/" className="text-xl font-bold">
            MyApp
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex gap-6">
            {navs.map((nav) => (
              <Link key={nav.path} to={nav.path} className="hover:text-gray-300">
                {nav.name}
              </Link>
            ))}
          </nav>

          {/* Auth actions */}
          <div className="flex gap-4 items-center">
            <Link
              to="/login"
              className="text-sm hover:text-gray-300"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-blue-600 px-4 py-2 rounded text-sm hover:bg-blue-500"
            >
              Sign Up
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
  }