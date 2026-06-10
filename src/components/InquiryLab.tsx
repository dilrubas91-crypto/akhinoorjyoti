
"use client";

import React from 'react';
import { Telescope, Landmark, BrainCircuit, Hash } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const researchTopics = [
  {
    title: "Abstract Conceptual Models",
    category: "Logic",
    description: "Formulating frameworks for visual-spatial reasoning within linguistic constraints.",
    icon: <Hash className="w-6 h-6" />,
    tags: ["Graph Theory", "Syntactic Logic"]
  },
  {
    title: "Behavioral Heuristics",
    category: "Psychology",
    description: "Researching pattern recognition biases in human decision-making under uncertainty.",
    icon: <BrainCircuit className="w-6 h-6" />,
    tags: ["Cognitive Bias", "Game Theory"]
  },
  {
    title: "Personal Identity Paradox",
    category: "Philosophy",
    description: "Thought experiments on the persistence of self through biological and psychological shifts.",
    icon: <Landmark className="w-6 h-6" />,
    tags: ["Ontology", "Phenomenology"]
  },
  {
    title: "Celestial Navigation Patterns",
    category: "Astronomy",
    description: "Exploring historical archetypes in star-mapping and their influence on early mythology.",
    icon: <Telescope className="w-6 h-6" />,
    tags: ["Astrophysics", "Cosmology"]
  }
];

export default function InquiryLab() {
  return (
    <section id="inquiry" className="py-24 editorial-grid border-t">
      <div className="mb-20 space-y-4 flex flex-col md:flex-row md:items-end md:justify-between">
        <div className="space-y-4">
          <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-none uppercase">
            Intellectual <br />
            <span className="text-accent italic font-normal">Inquiry Lab</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl font-body">
            Categorized sections that explain abstract conceptual models, psychological research, and philosophical thought experiments.
          </p>
        </div>
        <div className="hidden md:block">
           <div className="w-40 h-40 border-2 border-dashed border-accent/20 rounded-full flex items-center justify-center animate-spin-slow">
              <span className="text-[10px] font-black text-accent uppercase tracking-widest text-center px-4">Research & Theory Unit</span>
           </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {researchTopics.map((topic, idx) => (
          <div key={idx} className="p-10 border border-primary/10 hover:border-accent transition-all duration-500 bg-white/30 backdrop-blur-sm group">
            <div className="flex items-start justify-between mb-8">
              <div className="p-4 bg-accent text-white group-hover:bg-secondary transition-colors">
                {topic.icon}
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent">{topic.category}</span>
            </div>
            <h3 className="text-2xl font-headline font-black mb-4 uppercase">{topic.title}</h3>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              {topic.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {topic.tags.map(tag => (
                <Badge key={tag} variant="outline" className="rounded-none border-primary/20 text-[10px] uppercase font-bold text-muted-foreground">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
