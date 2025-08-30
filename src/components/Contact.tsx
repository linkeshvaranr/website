import { Mail, Github, Instagram, Twitter, Link as LinkIcon } from 'lucide-react';

export default function Contact() {
  return (
    <div className="flex justify-center space-x-4 py-6 bg-black rounded-md shadow-lg p-4">
      {/* Email Icon */}
      <a
        href="mailto:linkeshvaranr@gmail.com"
        className="relative group flex items-center justify-center p-2 rounded-full bg-gray-900 text-gray-200 hover:text-blue-500 transition-all duration-200"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Mail className="w-6 h-6" />
      </a>

      {/* GitHub Icon */}
      <a
        href="https://github.com/linkeshvaranr"
        className="relative group flex items-center justify-center p-2 rounded-full bg-gray-900 text-gray-200 hover:text-gray-400 transition-all duration-200"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Github className="w-6 h-6" />
      </a>

      {/* Twitter (X) Icon */}
      <a
        href="https://x.com/linkeshvaranr"
        className="relative group flex items-center justify-center p-2 rounded-full bg-gray-900 text-gray-200 hover:text-blue-400 transition-all duration-200"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Twitter className="w-6 h-6" />
      </a>

      {/* Instagram Icon */}
      <a
        href="https://instagram.com/linkeshvaranr"
        className="relative group flex items-center justify-center p-2 rounded-full bg-gray-900 text-gray-200 hover:text-pink-500 transition-all duration-200"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram className="w-6 h-6" />
      </a>

      {/* Salesforce Trailhead Icon */}
      <a
        href="https://www.salesforce.com/trailblazer/linkeshvaranr"
        className="relative group flex items-center justify-center p-2 rounded-full bg-gray-900 text-gray-200 hover:text-orange-500 transition-all duration-200"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkIcon className="w-6 h-6" />
      </a>
    </div>
  );
}
