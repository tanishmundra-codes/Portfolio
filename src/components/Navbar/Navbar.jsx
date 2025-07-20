import {
  Home,
  Github,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function Header() {
  return (
    <div className="flex justify-center mt-12">
      <div className="flex items-center bg-white rounded-2xl px-8 py-4  border border-gray-300 gap-6">
        <a href="/" target="_blank" rel="noopener noreferrer">
          <Home className="w-6 h-6 text-gray-600 hover:text-black" />
        </a>
        <div className="w-px h-6 bg-gray-300" />
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <Github className="w-6 h-6 text-gray-600 hover:text-black" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <Instagram className="w-6 h-6 text-gray-600 hover:text-black" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <Linkedin className="w-6 h-6 text-gray-600 hover:text-black" />
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
    </div>
  );
}
