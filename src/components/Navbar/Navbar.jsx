import {
  Home,
  Github,
  Instagram,
  Linkedin,
  Twitter,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex justify-center mt-6 md:mt-12">
      {/* Desktop View */}
      <div className="hidden md:flex items-center bg-white rounded-2xl px-8 py-4 border border-gray-300 gap-6">
        <a href="/" target="_blank" rel="noopener noreferrer">
          <Home className="w-6 h-6 text-gray-800 hover:text-gray-600" />
        </a>
        <div className="w-px h-6 bg-gray-300" />
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <Github className="w-6 h-6 text-gray-800 hover:text-gray-600" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <Instagram className="w-6 h-6 text-gray-800 hover:text-gray-600" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-6 h-6 text-gray-800 hover:text-gray-600" />
        </a>
        <div className="w-px h-6 bg-gray-300" />
        <a
          href="https://calendly.com"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-white px-5 py-2.5 rounded-xl hover:bg-gray-800 transition text-sm font-medium"
        >
          Contact me
        </a>
      </div>

      {/* Mobile View */}
      <div className="flex md:hidden flex-col items-center w-full px-4 border-b border-gray-300 pb-4">
        <div className="flex justify-between w-full items-center">
          <a href="/" target="_blank" rel="noopener noreferrer">
            <Home className="w-6 h-6 text-gray-800" />
          </a>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {menuOpen && (
          <div className="mt-4 flex flex-col bg-white border border-gray-300 rounded-2xl px-6 py-4 gap-4 w-full">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
              <Github className="w-6 h-6 text-gray-800 hover:text-gray-600" />
              <span className="text-gray-800 font-medium">GitHub</span>
            </a>
           
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
              <Twitter className="w-6 h-6 text-gray-800 hover:text-gray-600" />
              <span className="text-gray-800 font-medium">TikTok</span>
            </a>
            
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
              <Linkedin className="w-6 h-6 text-gray-800 hover:text-gray-600" />
              <span className="text-gray-800 font-medium">LinkedIn</span>
            </a>
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white px-4 py-2 rounded-xl hover:bg-gray-800 transition text-sm font-medium text-center mt-2"
            >
              Contact me
            </a>
          </div>
        )}
      </div>
    </div>
  );
}