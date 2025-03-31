import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom"; // Import Link from React Router

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400 p-8 mt-12">
      <div className="mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="max-w-52 mb-6 md:mb-0">
          <h2 className="text-white text-lg font-bold">Professor's Lab</h2>
          <p className="text-sm">
            Advancing research and innovation in chemistry and biotechnology through cutting-edge technology and collaborative research.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-white font-semibold">Quick Links</h3>
          <ul className="space-y-1">
            <li><Link to="/research" className="hover:text-white">Research</Link></li>
            <li><Link to="/publications" className="hover:text-white">Publications</Link></li>
            <li><Link to="/laboratory" className="hover:text-white">Laboratory</Link></li>
            <li><Link to="/students" className="hover:text-white">Students</Link></li>
            <li><Link to="/gallery" className="hover:text-white">Gallery</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-white font-semibold">Contact Info</h3>
          <p className="text-sm">📍 Department of Chemistry,IIT BHU(Varanasi)</p>
          <p>
            <a href="mailto:abcd.chy@iitbhu.ac.in" 
              className="text-blue-400 hover:underline text-md">📧abcd.chy@iitbhu.ac.in</a>
          </p>
         
          <p className="text-sm">📞 +91 234566655</p>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-white font-semibold">Connect With Us</h3>
          <div className="flex space-x-3 mt-2">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Copyright */}
      <div className="text-center text-sm mt-6 border-t border-gray-700 pt-4">
        © 2025 Professor's Research Lab. All rights reserved.
      </div>
    </footer>
  );
}
