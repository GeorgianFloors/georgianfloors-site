// app/components/nav/DesktopMenu.tsx
'use client';
import Link from 'next/link';
import { useState } from 'react';

const menuItems = [
  {
    label: 'Services',
    submenu: [
      { label: 'Residential', href: '#residential' },
      { label: 'Commercial', href: '#commercial' },
      { label: 'Eco Options', href: '#eco' },
    ],
  },
  {
    label: 'Visualizer',
    href: '/#visualizer',
  },
  {
    label: 'Gallery',
    href: '/#gallery',
  },
  {
    label: 'Contact',
    href: '/#contact',
  },
];

export default function DesktopMenu() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <ul className="flex space-x-6 text-sm font-medium text-gray-700">
      {menuItems.map((item) => (
        <li
          key={item.label}
          className="relative group"
          onMouseEnter={() => setHovered(item.label)}
          onMouseLeave={() => setHovered(null)}
        >
          <Link href={item.href || '#'} className="hover:text-blue-600 transition">
            {item.label}
          </Link>

          {item.submenu && hovered === item.label && (
            <div className="absolute top-full left-0 mt-2 w-40 bg-white border rounded shadow-lg z-50">
              {item.submenu.map((subItem) => (
                <Link
                  key={subItem.label}
                  href={subItem.href}
                  className="block px-4 py-2 text-sm hover:bg-gray-100"
                >
                  {subItem.label}
                </Link>
              ))}
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
