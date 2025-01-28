import React from "react";

function Footer() {
  return (
    <div className="bg-blue-600 text-white py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="md:flex md:justify-between">
          {/* Company Info */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">InvolvEd.</h3>
            <p className="text-sm mb-4">
              Empowering education with technology. Join us in shaping the future of learning.
            </p>
            <p className="text-sm">© 2024 InvolvEd. All rights reserved.</p>
          </div>

          {/* Quick Links */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul>
              <li><a href="#" className="text-sm hover:underline">Home</a></li>
              <li><a href="#" className="text-sm hover:underline">About Us</a></li>
              <li><a href="#" className="text-sm hover:underline">Services</a></li>
              <li><a href="#" className="text-sm hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-medium mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm">
            <a href="#" className="hover:underline">Terms of Service</a> |{" "}
            <a href="#" className="hover:underline">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
