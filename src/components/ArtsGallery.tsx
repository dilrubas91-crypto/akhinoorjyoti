
"use client";

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Camera, Maximize2 } from 'lucide-react';

export default function ArtsGallery() {
  const modelingImages = PlaceHolderImages.filter(img => img.id.startsWith('modeling-'));

  return (
    <section id="arts" className="py-24 editorial-grid bg-white">
      <div className="mb-20 space-y-4">
        <div className="flex items-center space-x-4">
           <div className="h-px bg-secondary flex-grow max-w-[100px]"></div>
           <span className="text-xs font-bold uppercase tracking-[0.4em] text-secondary">Vogue Aesthetic</span>
        </div>
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none uppercase">
          Modeling & <br />
          <span className="italic font-normal">Performing Arts</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl font-body">
          A curated portfolio of high-fidelity modeling captures and choreographic performances, designed for professional agency outreach.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 editorial-full px-4 md:px-20">
        {modelingImages.map((img, idx) => (
          <div 
            key={idx} 
            className={cn(
              "relative group overflow-hidden cursor-crosshair aspect-[2/3]",
              idx === 1 ? "md:mt-24" : "",
              idx === 3 ? "md:mt-12" : ""
            )}
          >
            <Image 
              src={img.imageUrl}
              alt={img.description}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
              data-ai-hint={img.imageHint}
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100">
              <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500 space-y-2">
                <span className="text-[10px] text-white font-bold uppercase tracking-[0.3em]">Portfolio Edition</span>
                <p className="text-white font-headline text-lg italic">{img.description}</p>
                <div className="pt-4 flex items-center text-white/50 space-x-2">
                  <Maximize2 className="w-4 h-4" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Enlarge Capture</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 flex justify-center">
        <button className="group relative px-12 py-5 bg-black text-white overflow-hidden transition-all hover:pr-16">
          <span className="relative z-10 font-bold uppercase tracking-[0.3em] text-xs">Request Agency Portfolio</span>
          <div className="absolute right-0 top-0 bottom-0 w-0 bg-secondary group-hover:w-full transition-all duration-500 ease-in-out"></div>
          <Camera className="absolute right-6 top-1/2 -translate-y-1/2 w-4 h-4 text-white opacity-0 group-hover:opacity-100 transition-all" />
        </button>
      </div>
    </section>
  );
}

import { cn } from '@/lib/utils';
