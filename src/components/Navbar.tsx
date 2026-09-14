import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Technologies", href: "#technologies" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-[70px] max-w-[1120px] items-center justify-between px-4 sm:px-6">
        
        {/* Logo */}
        <a href="#home" className="flex shrink-0 items-center">
          <img
            src="/logo-text.png"
            alt="Dev Stack"
            className="h-8 w-auto object-contain sm:h-9"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-[14px] font-medium transition-colors ${
                index === 0
                  ? "text-[#d83b78]"
                  : "text-slate-600 hover:text-[#d83b78]"
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Side */}
        <div className="hidden items-center gap-5 md:flex">
          <button
            type="button"
            className="text-[14px] font-medium text-slate-600 transition hover:text-slate-900"
          >
            Sign In
          </button>

          <button
            type="button"
            className="rounded-full bg-gradient-to-r from-[#ec5b42] via-[#d63878] to-[#b52f9c] px-6 py-2.5 text-[14px] font-medium text-white shadow-sm transition hover:opacity-90"
          >
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="rounded-md p-2 text-slate-700 transition hover:bg-slate-100 md:hidden"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <FiX className="h-6 w-6" />
          ) : (
            <FiMenu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-slate-100 bg-white px-5 py-4 md:hidden">
          <nav className="flex flex-col">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`rounded-md px-3 py-3 text-sm font-medium ${
                  index === 0
                    ? "text-[#d83b78]"
                    : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                {link.name}
              </a>
            ))}

            <div className="mt-3 flex items-center gap-3 border-t border-slate-100 pt-4">
              <button
                type="button"
                className="flex-1 rounded-full border border-slate-200 py-2.5 text-sm font-medium text-slate-700"
              >
                Sign In
              </button>

              <button
                type="button"
                className="flex-1 rounded-full bg-gradient-to-r from-[#ec5b42] via-[#d63878] to-[#b52f9c] py-2.5 text-sm font-medium text-white"
              >
                Sign Up
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;