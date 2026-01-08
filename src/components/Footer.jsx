import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const footerLinks = {
  Product: ["Features", "Pricing", "Security", "Roadmap", "Changelog"],
  Company: ["About", "Blog", "Careers", "Press", "Partners"],
  Resources: [
    "Documentation",
    "Help Center",
    "Community",
    "API Reference",
    "Status",
  ],
  Legal: ["Privacy", "Terms", "Cookie Policy", "Licenses", "Compliance"],
};

export default function Footer() {
  return (
    // Changed border and background to suit light mode
    <footer className="border-t border-slate-200 bg-slate-50/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        
        {/* Main footer content */}
        <div className="hidden sm:grid sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
          <div className="col-span-1 sm:col-span-3 lg:col-span-2 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start space-x-2 mb-3 sm:mb-4">
              <div className="rounded-lg">
                <img
                  src="/logo.png"
                  alt="CodeFlow Logo"
                  className="w-6 h-6 sm:w-8 sm:h-8"
                />
              </div>
              <span className="text-lg sm:text-xl font-bold">
                <span className="text-slate-900">Rosen</span>
                <span className="text-blue-600">tte</span>
              </span>
            </div>
            {/* Darker text for readability on light bg */}
            <p className="text-slate-600 mb-4 sm:mb-6 max-w-xs mx-auto sm:mx-0 text-sm sm:text-base leading-relaxed">
              Transform your workflow with AI-powered tools and automation.
              Built for modern teams.
            </p>
            <div className="flex justify-center sm:justify-start space-x-3 sm:space-x-4">
              {[Twitter, Github, Linkedin, Mail].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-2 sm:p-2.5 bg-white border border-slate-200 text-slate-600 rounded-lg hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-all duration-200 shadow-sm"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer links */}
          <div className="sm:col-span-3 lg:col-span-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
              {Object.entries(footerLinks).map(([category, links]) => (
                <div key={category}>
                  {/* Headers changed to dark slate */}
                  <h3 className="font-bold text-slate-900 mb-3 sm:mb-4 text-sm sm:text-base">
                    {category}
                  </h3>
                  <ul className="space-y-2 sm:space-y-3">
                    {links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-slate-500 hover:text-blue-600 transition-colors duration-200 text-xs sm:text-sm"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-3 sm:space-y-0">
            <p className="text-slate-500 text-xs sm:text-sm">
              © 2026 Rosentte. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 sm:space-x-6 text-xs sm:text-sm">
              {["Privacy Policy", "Terms of Service", "Cookie Settings"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-slate-500 hover:text-slate-900 transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}