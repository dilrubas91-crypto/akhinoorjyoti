
"use client";

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Play, FileText, Quote } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function CreativeStage() {
  const thumb = PlaceHolderImages.find(img => img.id === 'performance-video-thumb');

  return (
    <section id="creative" className="py-24 editorial-grid">
      <div className="mb-20 space-y-4 text-center md:text-left">
        <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-none uppercase">
          Creative & <br />
          <span className="text-secondary italic font-normal">Rhetorical Expression</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl font-body mx-auto md:mx-0">
          A platform for oratory performances, poetic nuance, and prose narratives that explore the profound depths of the human psyche.
        </p>
      </div>

      <Tabs defaultValue="oratory" className="w-full">
        <TabsList className="w-full justify-start bg-transparent border-b rounded-none h-auto p-0 mb-12 space-x-8">
          <TabsTrigger 
            value="oratory" 
            className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-secondary rounded-none px-0 py-4 text-xs font-bold uppercase tracking-[0.2em]"
          >
            Oratory Performances
          </TabsTrigger>
          <TabsTrigger 
            value="poetry" 
            className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-secondary rounded-none px-0 py-4 text-xs font-bold uppercase tracking-[0.2em]"
          >
            Poetic Archive
          </TabsTrigger>
          <TabsTrigger 
            value="prose" 
            className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-secondary rounded-none px-0 py-4 text-xs font-bold uppercase tracking-[0.2em]"
          >
            Prose & Fiction
          </TabsTrigger>
        </TabsList>

        <TabsContent value="oratory" className="mt-0">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative group cursor-pointer aspect-video bg-black overflow-hidden shadow-2xl">
              {thumb && (
                <Image 
                  src={thumb.imageUrl}
                  alt={thumb.description}
                  fill
                  className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                  data-ai-hint={thumb.imageHint}
                />
              )}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                  <Play className="text-white fill-white w-8 h-8 ml-1" />
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <span className="inline-block px-3 py-1 bg-accent text-white text-[10px] uppercase font-bold tracking-widest">Featured Performance</span>
              <h3 className="text-4xl font-headline font-black leading-tight tracking-tight uppercase">
                The Echoes of Modern <br/>Bengali Rhetoric
              </h3>
              <p className="text-muted-foreground leading-relaxed font-body">
                An exploration of phonetic nuance and cultural subtext in contemporary public speaking. This performance highlights the transition from classical diction to modern rhetorical expression.
              </p>
              <button className="text-secondary font-bold uppercase tracking-[0.3em] text-xs border-b border-secondary pb-1 hover:text-primary hover:border-primary transition-all">
                View Performance Details
              </button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="poetry" className="mt-0 space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-10 py-12 px-6 bg-white/40 shadow-inner">
            <Quote className="w-12 h-12 mx-auto text-secondary opacity-30" />
            <div className="space-y-6">
              <p className="text-2xl font-headline italic leading-relaxed text-foreground">
                &quot;The paper remembers what the voice forgets, <br/> 
                A crimson ink on old lace silhouettes.&quot;
              </p>
              <div className="w-12 h-0.5 bg-accent mx-auto"></div>
              <p className="text-sm font-bold uppercase tracking-[0.4em] text-muted-foreground">Shadows of the University, 2024</p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="prose" className="mt-0">
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="group cursor-pointer border-l-4 border-transparent hover:border-secondary transition-all pl-6 py-4">
                <FileText className="w-10 h-10 mb-6 text-accent opacity-50 group-hover:opacity-100 transition-opacity" />
                <h4 className="text-xl font-bold font-headline mb-3">Psychological Subtext #{i}</h4>
                <p className="text-sm text-muted-foreground font-body leading-relaxed mb-4">
                  Exploring the behavioral heuristics through the lens of short-form psychological fiction.
                </p>
                <span className="text-[10px] font-black uppercase tracking-widest text-secondary">Read Full Story →</span>
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
