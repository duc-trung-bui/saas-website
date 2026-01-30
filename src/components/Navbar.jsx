import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar({ scrolled }) {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 w-full z-100 transition-all duration-300 border-b
      ${scrolled
          ? "bg-slate-50/80 backdrop-blur-lg border-gray-200"
          : "bg-slate-50/20 backdrop-blur-sm border-transparent"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">

          {/* 1. Logo Section */}
          <div className="flex items-center space-x-1 cursor-pointer shrink-0">
            <img src="/logo.png" alt="Rosentte" className="w-6 h-6 sm:w-8 sm:h-8" />
            <span className="text-xl sm:text-2xl font-medium">
              <span className="text-blue-900">Rosen</span>
              <span className="text-blue-400">tte</span>
            </span>
          </div>

          {/* 2. Desktop Navigation Links (Centered-ish) */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="nav-link text-slate-600 hover:text-blue-600 font-medium text-sm lg:text-base transition-colors">Features</a>
            <a href="#pricing" className="nav-link text-slate-600 hover:text-blue-600 font-medium text-sm lg:text-base transition-colors">Pricing</a>
            <a href="#testimonials" className="nav-link text-slate-600 hover:text-blue-600 font-medium text-sm lg:text-base transition-colors">Testimonials</a>
            <a href="#faq" className="nav-link text-slate-600 hover:text-blue-600 font-medium text-sm lg:text-base transition-colors">FAQ</a>
          </div>

          {/* 3. Desktop Auth Buttons (Right Side) */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="#login"
              className="nav-link text-slate-700 hover:text-blue-600 font-medium text-sm transition-colors"
            >
              Log in
            </a>
            <a
              href="#signup"
              className="px-5 py-2.5 text-sm font-bold text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg active:scale-95"
            >
              Start for free
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-slate-800 hover:text-blue-600 transition-colors"
            onClick={() => setMobileMenuIsOpen((prev) => !prev)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuIsOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-xl animate-in slide-in-from-top duration-300">
          <div className="px-4 py-6">
            {/* Close button inside sidebar */}
            <div className="flex justify-end mb-4">
              <button
                className="p-2 text-slate-800 hover:text-blue-600 transition-colors"
                onClick={() => setMobileMenuIsOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            {/* 1. Centered Nav Links */}
            <div className="flex flex-col items-center space-y-6">
              <a
                href="#features"
                className="nav-link w-fit text-slate-600 font-medium text-lg"
                onClick={() => setMobileMenuIsOpen(false)}
              >
                Features
              </a>
              <a
                href="#pricing"
                className="nav-link w-fit text-slate-600 font-medium text-lg"
                onClick={() => setMobileMenuIsOpen(false)}
              >
                Pricing
              </a>
              <a
                href="#testimonials"
                className="nav-link w-fit text-slate-600 font-medium text-lg"
                onClick={() => setMobileMenuIsOpen(false)}
              >
                Testimonials
              </a>
            </div>

            {/* Divider */}
            <div className="h-px bg-slate-100 my-8 w-full" />

            {/* 2. Mobile Auth Buttons */}
            <div className="flex flex-col space-y-4 items-center">
              <a
                href="#login"
                className="nav-link w-fit py-2 text-slate-600 font-medium text-lg"
                onClick={() => setMobileMenuIsOpen(false)}
              >
                Log in
              </a>
              <a
                href="#signup"
                className="w-full max-w-lg text-center py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors shadow-md"
                onClick={() => setMobileMenuIsOpen(false)}
              >
                Start for free
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}