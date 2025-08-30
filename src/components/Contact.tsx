"use client"

import { useState } from "react"
import { Mail, Github, Instagram, Twitter, Linkedin, Link as LinkIcon } from 'lucide-react';

export default function Contact() {
  const [showSocials, setShowSocials] = useState(false)

  return (
    <div className="flex items-center justify-center py-6 bg-black rounded-md shadow-lg p-4 relative">
      
      {/* Toggle Button */}
      <button
        onClick={() => setShowSocials(!showSocials)}
        className="w-12 h-6 bg-gray-800 rounded-full flex items-center p-1 cursor-pointer mr-4"
      >
        <span
          className={`w-4 h-4 rounded-full shadow-md transform transition-transform duration-300 ${
            showSocials ? "translate-x-6 bg-green-400" : "bg-white"
          }`}
        ></span>
      </button>

      <div className="flex items-center space-x-4 w-full">
        {/* Always visible icons */}
        <div className="flex items-center space-x-4">
          <a href="https://github.com/linkeshvaranr" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 text-gray-200 hover:text-gray-400 transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/linkeshvaranr" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 text-gray-200 hover:text-blue-600 transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="https://www.salesforce.com/trailblazer/linkeshvaranr" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 text-gray-200 hover:text-orange-500 transition-colors">
            <LinkIcon className="w-6 h-6" />
          </a>
        </div>

        {/* Extra Socials */}
        {showSocials && (
          <div className="flex items-center space-x-4 ml-auto">
            <a href="mailto:linkeshvaranr@gmail.com" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 text-gray-200 hover:text-blue-500 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://x.com/linkeshvaranr" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 text-gray-200 hover:text-blue-400 transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="https://instagram.com/linkeshvaranr" className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 text-gray-200 hover:text-pink-500 transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
