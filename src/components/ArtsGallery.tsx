
"use client";

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Camera } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ArtsGallery() {
  const modelingImages = PlaceHolderImages.filter(img => img.id.startsWith('modeling-'));

  return (
    <section id="arts" className="py-24 editorial-grid bg-white">
      <div className="mb-20 space-y-4">
        <div className="flex items-center space-x-4">
           <div className="h-px bg-secondary flex-grow max-w-[100px]"></div>
           <span className="text-xs font-bold uppercase tracking-[0.4em] text-secondary">Aesthetic Perspective</span>
        </div>
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none uppercase">
          Modeling <br />
          <span className="italic font-normal">Gallery</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl font-body">
          Currently exploring high-fidelity modeling opportunities. This gallery is a curated space for upcoming professional captures and editorial shoots.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 editorial-full px-4 md:px-20">
        {modelingImages.length > 0 ? (
          modelingImages.map((img, idx) => (
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
                  <span className="text-[10px] text-white font-bold uppercase tracking-[0.3em]">Upcoming Archive</span>
                  <p className="text-white font-headline text-lg italic">{img.description}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-24 flex flex-col items-center justify-center text-muted-foreground border-2 border-dashed rounded-lg">
            <Camera className="w-12 h-12 mb-4 opacity-20" />
            <p className="font-headline italic">The gallery is currently being curated for professional modeling archives.</p>
          </div>
        )}
      </div>
    </section>
  );
}
