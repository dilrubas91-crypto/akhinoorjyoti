
"use client";

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Archive', href: '#archive' },
    { label: 'Cognitive', href: '#cognitive' },
    { label: 'Creative', href: '#creative' },
    { label: 'Arts', href: '#arts' },
    { label: 'Inquiry', href: '#inquiry' },
    { label: 'Vault', href: '#vault' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-6 px-10 md:px-20 flex justify-between items-center",
      isScrolled 
        ? "bg-background/95 backdrop-blur-md py-4 shadow-sm text-foreground" 
        : "bg-transparent text-white"
    )}>
      <div className={cn(
        "font-headline text-2xl font-black tracking-tighter uppercase border-b-2",
        isScrolled ? "border-primary" : "border-white"
      )}>
        SAJ.
      </div>
      <ul className="hidden md:flex space-x-12">
        {navItems.map((item) => (
          <li key={item.label}>
            <a 
              href={item.href} 
              className={cn(
                "text-xs font-bold uppercase tracking-[0.2em] transition-colors",
                isScrolled ? "hover:text-secondary" : "hover:text-secondary text-white"
              )}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <button className="md:hidden">
        <span className={cn("block w-6 h-0.5 mb-1", isScrolled ? "bg-black" : "bg-white")}></span>
        <span className={cn("block w-6 h-0.5", isScrolled ? "bg-black" : "bg-white")}></span>
      </button>
    </nav>
  );
}
