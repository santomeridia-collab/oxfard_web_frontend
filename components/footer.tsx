import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* About Section */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Oxford College
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
              Oxford college is a one stop solution for all kinds of career oriented skills. 
              The institute provides a wide range of professional courses that help students 
              develop practical and functional skills in the field of engineering, technology, 
              fashion and design.
            </p>
            
            {/* Social Media */}
            <div className="flex gap-4">
              <a 
                href="#" 
                className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-pink-600 hover:bg-pink-700 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-blue-500 hover:bg-blue-600 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-sky-500 hover:bg-sky-600 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="bg-red-600 hover:bg-red-700 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          {/* <div>
            <h4 className="text-xl font-bold mb-6 text-blue-400">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Courses
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Admissions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Gallery
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-blue-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Contact
                </a>
              </li>
            </ul>
          </div> */}

          {/* Get in Touch */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-blue-400">Get in Touch</h4>
            <div className="space-y-4">
              
              {/* Address */}
              <div className="flex items-start gap-3 group">
                <div className="bg-blue-600/20 p-2 rounded-lg group-hover:bg-blue-600/30 transition-colors duration-300">
                  <MapPin className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-gray-300 leading-relaxed">
                    Khadeeja Building<br />
                    Nilambur Road, Wandoor
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3 group">
                <div className="bg-green-600/20 p-2 rounded-lg group-hover:bg-green-600/30 transition-colors duration-300">
                  <Phone className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <a 
                    href="tel:8156998798" 
                    className="text-gray-300 hover:text-green-400 transition-colors duration-300"
                  >
                    8156998798
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3 group">
                <div className="bg-purple-600/20 p-2 rounded-lg group-hover:bg-purple-600/30 transition-colors duration-300">
                  <Mail className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <a 
                    href="mailto:oxfordwdr@gmail.com" 
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300 break-all"
                  >
                    oxfordwdr@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2026 Oxford College. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}