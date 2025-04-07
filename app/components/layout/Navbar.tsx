'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'Home', href: '/' },
  { name: 'Carpet', href: '/carpet', submenu: ['Berber', 'Plush', 'Textured'] },
  { name: 'Services', href: '/services', submenu: ['Installation', 'Repairs', 'Commercial'] },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <header className="bg-gray-900 text-white shadow sticky top-0 z-50 font-serif">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white hover:text-yellow-400 transition">
          Georgian Floors
        </Link>
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          {links.map((link) => (
            <div
              key={link.name}
              onMouseEnter={() => setHoveredMenu(link.submenu ? link.name : null)}
              onMouseLeave={() => setHoveredMenu(null)}
              className="relative"
            >
              <Link
                href={link.href}
                className={`hover:text-yellow-400 transition ${
                  pathname === link.href ? 'text-yellow-400 font-semibold' : ''
                }`}
              >
                {link.name}
              </Link>
              {link.submenu && hoveredMenu === link.name && (
                <div
                  className="absolute top-full left-0 mt-1 bg-white text-gray-800 border border-gray-300 rounded shadow-md min-w-[160px] z-50"
                  onMouseEnter={() => setHoveredMenu(link.name)}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  {link.submenu.map((item) => (
                    <Link
                      key={item}
                      href={`/${link.name.toLowerCase()}/${item.toLowerCase()}`}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          {/* Book Now Button */}
          <Link
            href="/book"
            className="ml-4 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded transition font-semibold"
          >
            Book Now
          </Link>
        </nav>
        <button className="md:hidden text-white text-xl" aria-label="Mobile menu toggle">
          ☰
        </button>
      </div>
    </header>
  );
}
