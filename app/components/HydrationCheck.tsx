// components/HydrationCheck.tsx
'use client';
import { useEffect, useState } from 'react';

export default function HydrationCheck() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return null; // Don't render during SSR
  }

  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            // Check for Dark Reader attributes
            const hasDarkReader = 
              document.documentElement.getAttribute('data-darkreader-mode') || 
              document.documentElement.getAttribute('data-darkreader-scheme');
            
            if (hasDarkReader) {
              console.warn('Dark Reader detected - applying fixes');
              
              // Force light theme
              document.documentElement.classList.add('light-theme');
              document.documentElement.style.setProperty(
                'color-scheme', 
                'light', 
                'important'
              );
              
              // Remove Dark Reader's injected styles
              const darkReaderStyles = document.querySelectorAll(
                'style[data-darkreader-inline-bgcolor],' +
                'style[data-darkreader-inline-color]'
              );
              darkReaderStyles.forEach(style => style.remove());
            }
          })();
        `,
      }}
    />
  );
}