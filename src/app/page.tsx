
"use client";

import React from 'react';
import Image from 'next/image';
import Navigation from '@/components/Navigation';
import ScholarTimeline from '@/components/ScholarTimeline';
import CognitiveMatrix from '@/components/CognitiveMatrix';
import CreativeStage from '@/components/CreativeStage';
import ArtsGallery from '@/components/ArtsGallery';
import InquiryLab from '@/components/InquiryLab';
import InquiryForm from '@/components/InquiryForm';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Instagram, Linkedin, Globe } from 'lucide-react';

export default function Home() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center editorial-grid bg-black overflow-hidden pt-10 md:pt-20">
        {heroImg && (
          <Image 
            src={heroImg.imageUrl}
            alt={heroImg.description}
            fill
            className="object-cover opacity-30 grayscale"
            priority
            data-ai-hint={heroImg.imageHint}
          />
        )}
        <div className="relative z-10 flex flex-col justify-center w-full py-12 md:py-20 space-y-8 md:space-y-16">
          <div className="pt-8 md:pt-12">
            <h1 className="text-5xl md:text-8xl lg:text-[10rem] font-black text-white leading-[0.85] tracking-tighter uppercase drop-shadow-2xl">
              Seikh <br />
              <span className="text-secondary italic font-normal ml-0 md:ml-20">Akhinoor Jyoti.</span>
            </h1>
          </div>

          <div className="flex flex-col items-start gap-6 md:gap-8 bg-black/40 backdrop-blur-sm p-6 md:p-0 rounded-lg md:rounded-none">
            <div className="max-w-xl">
              <p className="text-white/80 text-base md:text-xl font-body leading-relaxed border-l-2 border-secondary pl-4 md:pl-6 py-2">
                A multidisciplinary exploration of academic rigor, cognitive strategy, and aesthetic expression. Currently studying in the Department of Bengali, University of Dhaka.
              </p>
            </div>
            <div className="flex flex-col space-y-3 pt-2">
              <div className="flex items-center space-x-4">
                <div className="h-px w-8 md:w-12 bg-white/20"></div>
                <span className="text-[9px] md:text-[10px] font-bold text-white uppercase tracking-widest">Scholar & Performer</span>
              </div>
              <span className="text-secondary font-headline italic text-2xl md:text-4xl">University of Dhaka</span>
            </div>
          </div>
        </div>
        
        {/* Archive Navigator */}
        <div className="absolute bottom-16 right-8 z-10 hidden md:flex flex-col items-center">
          <div className="w-px h-24 bg-gradient-to-b from-transparent to-secondary"></div>
          <span className="text-[10px] font-black text-white/50 uppercase tracking-[0.4em] mt-8 [writing-mode:vertical-lr] rotate-180">
            Archive Navigator
          </span>
        </div>
      </section>

      {/* Main Content Sections */}
      <div className="space-y-0">
        <ScholarTimeline />
        <CognitiveMatrix />
        <CreativeStage />
        <ArtsGallery />
        <InquiryLab />
        <InquiryForm />
      </div>

      {/* Footer */}
      <footer className="py-20 editorial-grid border-t bg-background">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-10 md:space-y-0">
          <div className="text-center md:text-left">
            <div className="font-headline text-4xl font-black uppercase mb-4 leading-tight">Seikh Akhinoor <br/> Jyoti</div>
            <p className="text-muted-foreground text-sm uppercase tracking-widest font-bold">
              © 2024 Academic & Artistic Archives.
            </p>
          </div>
          <div className="flex space-x-8 items-center">
            <a href="#" className="text-foreground hover:text-secondary transition-colors" aria-label="Instagram">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="#" className="text-foreground hover:text-secondary transition-colors" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-foreground hover:text-secondary transition-colors" aria-label="ResearchGate">
              <Globe className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="mt-20 pt-10 border-t border-primary/5 text-center space-y-4">
          <span className="text-[10px] text-muted-foreground uppercase tracking-widest italic font-headline block">
            "Profound silence is the highest expression of rhetoric."
          </span>
          <span className="text-[10px] font-bold text-muted-foreground/40 uppercase tracking-widest block">
            Author: MA
          </span>
        </div>
      </footer>
    </main>
  );
}
