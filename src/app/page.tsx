
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

export default function Home() {
  const heroImg = PlaceHolderImages.find(img => img.id === 'hero-bg');

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center editorial-grid bg-black overflow-hidden">
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
        <div className="relative z-10 space-y-8">
          <span className="block text-secondary font-black tracking-[0.6em] uppercase text-sm animate-fade-in">
            Intellectual Performance Art
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black text-white leading-[0.85] tracking-tighter uppercase drop-shadow-2xl">
            Seikh <br />
            <span className="text-secondary italic font-normal ml-0 md:ml-20">Akhinoor Jyoti.</span>
          </h1>
          <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-12 pt-8">
            <div className="max-w-md">
              <p className="text-white/60 text-lg font-body leading-relaxed">
                A multidisciplinary exploration of academic rigor, cognitive strategy, and aesthetic expression. Currently studying in the Department of Bengali, University of Dhaka.
              </p>
            </div>
            <div className="flex space-x-6 h-px w-24 bg-white/20 hidden md:block"></div>
            <div className="flex flex-col space-y-1">
              <span className="text-[10px] font-bold text-white uppercase tracking-widest">Scholar & Performer</span>
              <span className="text-secondary font-headline italic text-xl">University of Dhaka</span>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-12 right-12 z-10 flex flex-col items-end">
          <div className="w-1 h-20 bg-gradient-to-b from-transparent to-secondary"></div>
          <span className="text-[10px] font-black text-white uppercase tracking-widest mt-4 rotate-90 origin-right translate-y-8">Archive Navigator</span>
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
          <div className="flex space-x-12 text-xs font-bold uppercase tracking-[0.3em]">
            <a href="#" className="hover:text-secondary transition-colors">Instagram</a>
            <a href="#" className="hover:text-secondary transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-secondary transition-colors">ResearchGate</a>
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
