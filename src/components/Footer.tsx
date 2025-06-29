
import React from 'react';
import { BookOpen, Mail, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg cyber-gradient flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-heading font-bold text-gradient">
                NeuroVerse
              </span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              Exploring the convergence of artificial intelligence, human consciousness, 
              and the infinite possibilities that lie ahead. Join us on this journey 
              into tomorrow's thinking.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors duration-200">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors duration-200">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link to="/articles" className="hover:text-white transition-colors duration-200">Articles</Link></li>
              <li><Link to="/archives" className="hover:text-white transition-colors duration-200">Archives</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors duration-200">About</Link></li>
              <li><Link to="/subscribe" className="hover:text-white transition-colors duration-200">Subscribe</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Topics</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors duration-200">AI Ethics</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Space Colonization</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Sentient Machines</a></li>
              <li><a href="#" className="hover:text-white transition-colors duration-200">Post-Humanity</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 NeuroVerse Chronicles. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            Crafted for the future of human consciousness
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
