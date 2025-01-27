"use client"
import Link from 'next/link';
import { useState } from 'react';

const Footer = () => {
  const [openSections, setOpenSections] = useState({
    company: false,
    help: false,
    resources: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return (
    <footer className="text-white py-8 bg-[#12141D]">
    <div className="container mx-auto max-w-screen-lg px-4">
      {/* Desktop View */}
      <div className="hidden md:flex flex-col md:flex-row justify-between items-center mt-16 mb-6">
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-4">Company</h3>
          <ul className="space-y-2">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/features">Features</Link></li>
            <li><Link href="/works">Works</Link></li>
            <li><Link href="/career">Career</Link></li>
          </ul>
        </div>
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-4">Help</h3>
          <ul className="space-y-2">
            <li><Link href="/customer-support">Customer Support</Link></li>
            <li><Link href="/delivery-details">Delivery Details</Link></li>
            <li><Link href="/terms-conditions">Terms & Conditions</Link></li>
            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
          </ul>
        </div>
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-4">Resources</h3>
          <ul className="space-y-2">
            <li><Link href="/free-resources">Free Resources</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/case-studies">Case Studies</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
          </ul>
        </div>
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-4">Links</h3>
          <ul className="space-y-2">
            <li><Link href="/free-eBook">Free eBooks</Link></li>
            <li><Link href="/Development-Tutorial">Development Tutorial</Link></li>
            <li><Link href="/case-studies">How to - Blog</Link></li>
            <li><Link href="/playlist">Youtube Playlist</Link></li>
          </ul>
        </div>
      </div>
  
      <div className="md:hidden">
        <div className="mb-4">
          <button
            className="w-full text-xl font-bold text-left mb-2 flex justify-between items-center"
            onClick={() => toggleSection('company')}
          >
            <span>Company</span>
            <span>{openSections.company ? '^' : 'v'}</span>
          </button>
          {openSections.company && (
            <ul className="space-y-2 pl-4">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/features">Features</Link></li>
              <li><Link href="/works">Works</Link></li>
              <li><Link href="/career">Career</Link></li>
            </ul>
          )}
        </div>
        {/* Help Section */}
        <div className="mb-4">
          <button
            className="w-full text-xl font-bold text-left mb-2 flex justify-between items-center"
            onClick={() => toggleSection('help')}
          >
            <span>Help</span>
            <span>{openSections.help ? '^' : 'v'}</span>
          </button>
          {openSections.help && (
            <ul className="space-y-2 pl-4">
              <li><Link href="/customer-support">Customer Support</Link></li>
              <li><Link href="/delivery-details">Delivery Details</Link></li>
              <li><Link href="/terms-conditions">Terms & Conditions</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
            </ul>
          )}
        </div>
        <div>
          <button
            className="w-full text-xl font-bold text-left mb-2 flex justify-between items-center"
            onClick={() => toggleSection('resources')}
          >
            <span>Resources</span>
            <span>{openSections.resources ? '^' : 'v'}</span>
          </button>
          {openSections.resources && (
            <ul className="space-y-2 pl-4">
              <li><Link href="/free-resources">Free Resources</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/case-studies">Case Studies</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
            </ul>
          )}
        </div>
  
        <div>
          <button
            className="w-full text-xl font-bold text-left mb-2 flex justify-between items-center"
            onClick={() => toggleSection('resources')}
          >
            <span>Links</span>
            <span>{openSections.resources ? '^' : 'v'}</span>
          </button>
          {openSections.resources && (
            <ul className="space-y-2 pl-4">
              <li><Link href="/free-eBook">Free eBooks</Link></li>
              <li><Link href="/Development-Tutorial">Development Tutorial</Link></li>
              <li><Link href="/case-studies">How to - Blog</Link></li>
              <li><Link href="/playlist">Youtube Playlist</Link></li>
            </ul>
          )}
        </div>
      </div>
    </div>
  </footer>  
  );
};

export default Footer;
