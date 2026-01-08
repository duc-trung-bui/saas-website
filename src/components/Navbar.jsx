import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar({ scrolled }) {
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b
      ${scrolled
          ? "bg-slate-50/20 backdrop-blur-lg border-indigo-100"
          : "bg-slate-50/20 backdrop-blur-sm border-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
          <div className="flex items-center space-x-1 group cursor-pointer">
            <div>
              <img src="/logo.png" alt="Rosentte" className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <span className="text-xl sm:text-2xl md:text-2xl font-medium">
              <span className="text-blue-900">Rosen</span>
              <span className="text-blue-400">tte</span>
            </span>
          </div>
          {/* Nav Links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a href="#features" className="text-blue-900 hover:text-blue-500 text-sm lg:text-lg">Features</a>
            <a href="#pricing" className="text-blue-900 hover:text-blue-500 text-sm lg:text-lg">Pricing</a>
            <a href="#testimonials" className="text-blue-900 hover:text-blue-500 text-sm lg:text-lg">Testimonials</a>
          </div>
          <button className="md:hidden items-center p-2 text-black hover:text-blue-500" onClick={() => setMobileMenuIsOpen((prev) => !prev)}>
            {mobileMenuIsOpen
              ? (<X className="w-5 h-5 sm:w-6 sm:h-6" />)
              : (
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              )
            }
          </button>
        </div>
      </div>
      {mobileMenuIsOpen && (
        <div className="md:hidden bg-slate-50 backdrop-blur-lg border-t border-slate-100 animate-in slide-in-from-top duration-300">
          <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
            <a href="#features" className="block text-blue-900 hover:text-blue-500 text-sm lg:text-base" onClick={() => setMobileMenuIsOpen(false)}>Features</a>
            <a href="#pricing" className="block text-blue-900 hover:text-blue-500 text-sm lg:text-base" onClick={() => setMobileMenuIsOpen(false)}>Pricing</a>
            <a href="#testimonials" className="block text-blue-900 hover:text-blue-500 text-sm lg:text-base" onClick={() => setMobileMenuIsOpen(false)}>Testimonials</a>
          </div>
        </div>
      )}
    </nav>
  )
}