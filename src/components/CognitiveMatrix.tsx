
"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Grid3x3, Languages, Brain, Cpu } from 'lucide-react';

const strategyNodes = [
  {
    title: "Strategic Dynamics",
    description: "Practicing advanced pattern recognition and tactical planning through competitive Chess frameworks to master positional logic.",
    icon: <Brain className="w-8 h-8 text-secondary" />,
    stats: [
      { label: "Tactical Planning", value: "95%" },
      { label: "Pattern Recognition", value: "98%" }
    ]
  },
  {
    title: "Logical Deductions",
    description: "Engaging in complex quantitative matrices and Sudoku variants to optimize working memory and deductive speed.",
    icon: <Grid3x3 className="w-8 h-8 text-secondary" />,
    stats: [
      { label: "Working Memory", value: "94%" },
      { label: "Matrix Solving", value: "92%" }
    ]
  },
  {
    title: "Linguistic Mechanics",
    description: "Solving high-level word puzzles and cryptic crosswords to enhance lateral thinking and fluid recall of semantic nuances.",
    icon: <Languages className="w-8 h-8 text-secondary" />,
    stats: [
      { label: "Lateral Thinking", value: "96%" },
      { label: "Fluid Recall", value: "91%" }
    ]
  },
  {
    title: "Abstract Reasoning",
    description: "Regularly challenging cognitive thresholds utilizing high-range psychometric appraisals and advanced logic matrices.",
    icon: <Cpu className="w-8 h-8 text-secondary" />,
    stats: [
      { label: "Psychometrics", value: "97%" },
      { label: "Logic Matrices", value: "89%" }
    ]
  }
];

export default function CognitiveMatrix() {
  return (
    <section id="cognitive" className="py-24 editorial-grid bg-black text-white">
      <div className="mb-20 space-y-4">
        <span className="text-secondary font-bold tracking-[0.4em] uppercase text-xs">Module 02: Mental Architecture</span>
        <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-none uppercase text-background">
          Cognitive Matrix <br />
          <span className="text-accent italic font-normal">& Strategy Hub</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl font-body">
          I enjoy challenging my mental abilities through high-level logic, strategic dynamics, and linguistic mechanical puzzles.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
        {strategyNodes.map((node, idx) => (
          <Card key={idx} className="bg-black border-none rounded-none hover:bg-zinc-900 transition-colors p-8 group">
            <CardHeader className="p-0 space-y-4">
              <div className="p-3 bg-zinc-800 w-fit group-hover:scale-110 transition-transform">
                {node.icon}
              </div>
              <CardTitle className="text-3xl font-headline tracking-tight text-white">{node.title}</CardTitle>
            </CardHeader>
            <CardContent className="p-0 mt-6 space-y-6">
              <p className="text-zinc-400 font-body leading-relaxed">
                {node.description}
              </p>
              <div className="space-y-4">
                {node.stats.map((s, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-zinc-500">
                      <span>{s.label}</span>
                      <span>{s.value}</span>
                    </div>
                    <div className="h-0.5 w-full bg-zinc-800 overflow-hidden">
                      <div 
                        className="h-full bg-secondary transition-all duration-1000" 
                        style={{ width: s.value }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
