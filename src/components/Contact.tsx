import { Mail, Github, Instagram,  Twitter, Link as LinkIcon } from 'lucide-react';

export default function Contact() {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>

      {/* Email */}
      <div className="flex items-center text-gray-700 mb-2">
        <Mail className="w-5 h-5 mr-2" />
        <a href="mailto:linkeshvaranr@gmail.com" className="underline">
          linkeshvaranr@gmail.com
        </a>
      </div>

      {/* GitHub */}
      <div className="flex items-center text-gray-700 mb-2">
        <Github className="w-5 h-5 mr-2" />
        <a href="https://github.com/linkeshvaranr" className="underline" target="_blank" rel="noopener noreferrer">
          @linkeshvaranr
        </a>
      </div>

      {/* X / Twitter */}
      <div className="flex items-center text-gray-700 mb-2">
        <Twitter className="w-5 h-5 mr-2" />
        <a href="https://x.com/linkeshvaranr" className="underline" target="_blank" rel="noopener noreferrer">
          @linkeshvaranr
        </a>
      </div>

      {/* Instagram */}
      <div className="flex items-center text-gray-700 mb-2">
        <Instagram className="w-5 h-5 mr-2" />
        <a href="https://instagram.com/linkeshvaranr" className="underline" target="_blank" rel="noopener noreferrer">
          @linkeshvaranr
        </a>
      </div>

      {/* Salesforce Trailhead */}
      <div className="flex items-center text-gray-700">
        <LinkIcon className="w-5 h-5 mr-2" />
        <a href="https://www.salesforce.com/trailblazer/linkeshvaranr" className="underline" target="_blank" rel="noopener noreferrer">
          Trailhead 
        </a>
      </div>
    </div>
  );
}
