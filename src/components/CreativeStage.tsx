"use client";

import React from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Play, FileText, Quote, Mic, Music, Disc } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function CreativeStage() {
  const thumb = PlaceHolderImages.find(img => img.id === 'performance-video-thumb');

  return (
    <section id="creative" className="py-24 editorial-grid overflow-hidden">
      <div className="mb-20 space-y-4 text-left">
        <div className="flex items-center space-x-4">
           <span className="text-xs font-bold uppercase tracking-[0.4em] text-accent">Synthesis</span>
           <div className="h-px bg-accent w-12"></div>
        </div>
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-none uppercase">
          Creative & <br />
          <span className="text-secondary italic font-normal">Rhetorical Expression</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl font-body">
          Cultivating high-level communication and performance arts to enhance emotional intelligence and cultural literacy.
        </p>
      </div>

      <Tabs defaultValue="oratory" className="w-full">
        <div className="overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
          <TabsList className="w-full justify-start bg-transparent border-b rounded-none h-auto p-0 mb-12 flex space-x-6 md:space-x-8">
            <TabsTrigger 
              value="oratory" 
              className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-secondary rounded-none px-0 py-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] whitespace-nowrap"
            >
              Oratory & Speaking
            </TabsTrigger>
            <TabsTrigger 
              value="literary" 
              className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-secondary rounded-none px-0 py-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] whitespace-nowrap"
            >
              Literary Arts
            </TabsTrigger>
            <TabsTrigger 
              value="performance" 
              className="data-[state=active]:bg-transparent data-[state=active]:border-b-2 data-[state=active]:border-secondary rounded-none px-0 py-4 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] whitespace-nowrap"
            >
              Vocal & Choreography
            </TabsTrigger>
          </TabsList>
        </div>

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
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                  <Play className="text-white fill-white w-6 h-6 md:w-8 md:h-8 ml-1" />
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <span className="inline-block px-3 py-1 bg-accent text-white text-[10px] uppercase font-bold tracking-widest">Master Oratory</span>
              <h3 className="text-3xl md:text-4xl font-headline font-black leading-tight tracking-tight uppercase">
                Public Speaking & Narrative Design
              </h3>
              <p className="text-muted-foreground leading-relaxed font-body">
                Formulating and delivering compelling narratives, engaging diverse audiences with clarity, poise, and structured rhetoric. Focusing on the transition from classical diction to modern rhetorical expression.
              </p>
              <div className="flex items-center space-x-2 text-secondary font-bold text-xs uppercase tracking-widest">
                <Mic className="w-4 h-4" />
                <span>Structured Rhetoric Practitioner</span>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="literary" className="mt-0 space-y-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white border border-black/5 hover:border-secondary transition-all">
              <Quote className="w-8 h-8 mb-6 text-secondary" />
              <h4 className="text-xl font-bold font-headline mb-3">Poetry Archive</h4>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                Crafting nuanced poetry focusing on thematic depth and emotional resonance, exploring the linguistic boundaries of the Bengali language.
              </p>
            </div>
            <div className="p-8 bg-white border border-black/5 hover:border-secondary transition-all">
              <FileText className="w-8 h-8 mb-6 text-accent" />
              <h4 className="text-xl font-bold font-headline mb-3">Prose & Fiction</h4>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                Narrative prose that dives into psychological subtexts and creative conceptualization, bridging reality with abstract thought experiments.
              </p>
            </div>
            <div className="p-8 bg-white border border-black/5 hover:border-secondary transition-all flex flex-col justify-center items-center text-center">
              <Disc className="w-12 h-12 mb-4 text-muted-foreground/30 animate-spin-slow" />
              <span className="text-[10px] font-black uppercase tracking-widest">Work in Progress</span>
              <p className="text-xs italic mt-2">New manuscripts currently being archived.</p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="performance" className="mt-0">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-10 bg-accent text-white group">
              <Music className="w-12 h-12 mb-6 group-hover:scale-110 transition-transform" />
              <h4 className="text-2xl md:text-3xl font-black font-headline uppercase mb-4 tracking-tighter">Vocal Performance</h4>
              <p className="text-white/80 font-body leading-relaxed">
                Disciplined training in classical and contemporary vocal performance. Demonstrating high focus, control, and a resonance that bridges cultural narratives.
              </p>
            </div>
            <div className="p-10 bg-black text-white group">
              <Disc className="w-12 h-12 mb-6 group-hover:rotate-45 transition-transform" />
              <h4 className="text-2xl md:text-3xl font-black font-headline uppercase mb-4 tracking-tighter">Choreography & Dance</h4>
              <p className="text-white/80 font-body leading-relaxed">
                Rhythmic dance requiring high neuro-motor coordination and stage presence. A fusion of contemporary discipline and rhythmic storytelling.
              </p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </section>
  );
}
