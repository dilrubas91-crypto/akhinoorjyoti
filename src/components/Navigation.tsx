
"use client";

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';

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
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-6 px-6 md:px-20 flex justify-between items-center",
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
      
      {/* Desktop Navigation */}
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

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button className="p-2" aria-label="Open Menu">
              <Menu className={cn("w-6 h-6", isScrolled ? "text-black" : "text-white")} />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background/95 backdrop-blur-md border-l-0">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col space-y-8 mt-20">
              {navItems.map((item) => (
                <a 
                  key={item.label}
                  href={item.href} 
                  className="text-xl font-bold uppercase tracking-[0.2em] text-foreground hover:text-secondary transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
