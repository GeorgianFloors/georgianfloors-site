'use client';
import { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-black">Georgian Floors</Link>
        <nav className="hidden md:flex space-x-8 font-medium relative">
          <div className="group relative">
            <Link href="#" className="hover:text-blue-600">Products</Link>
            <div className="absolute hidden group-hover:block bg-white shadow-md rounded-md top-full mt-2 w-48 z-50">
              <Link href="/carpet" className="block px-4 py-2 hover:bg-gray-100">Carpet</Link>
              <Link href="/hardwood" className="block px-4 py-2 hover:bg-gray-100">Hardwood</Link>
              <Link href="/vinyl" className="block px-4 py-2 hover:bg-gray-100">Vinyl</Link>
            </div>
          </div>
          <Link href="#search" className="hover:text-blue-600">Search</Link>
          <Link href="#testimonials" className="hover:text-blue-600">Testimonials</Link>
          <Link href="#contact" className="hover:text-blue-600">Contact</Link>
        </nav>
        <button
          className="md:hidden text-xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md px-4 pb-4 space-y-2">
          <Link href="/carpet" className="block">Carpet</Link>
          <Link href="/hardwood" className="block">Hardwood</Link>
          <Link href="/vinyl" className="block">Vinyl</Link>
          <Link href="#search" className="block">Search</Link>
          <Link href="#testimonials" className="block">Testimonials</Link>
          <Link href="#contact" className="block">Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
