'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const links = [
  { name: 'Home', href: '/' },
  { name: 'Carpet', href: '/carpet', submenu: ['Berber', 'Plush', 'Textured'] },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <header className={styles.navbar}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className={styles.logo}>
          Georgian Floors
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6 text-sm font-medium relative">
          {links.map((link) => (
            <div
              key={link.name}
              onMouseEnter={() => setHoveredMenu(link.submenu ? link.name : null)}
              onMouseLeave={() => setHoveredMenu(null)}
              className="relative"
            >
              <Link
                href={link.href}
                className={`${styles.link} ${
                  pathname === link.href ? 'text-blue-600 font-semibold' : ''
                }`}
              >
                {link.name}
              </Link>

              {link.submenu && hoveredMenu === link.name && (
                <div className={styles.dropdown}>
                  {link.submenu.map((item) => (
                    <Link
                      key={item}
                      href={`/carpet/${item.toLowerCase()}`}
                      className="text-sm"
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4">
          {links.map((link) => (
            <Link key={link.name} href={link.href} className="block py-2 text-sm">
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
