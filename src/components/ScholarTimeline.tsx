
"use client";

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Award, BookOpen, Star, Trophy } from 'lucide-react';
import { cn } from '@/lib/utils';

const achievements = [
  {
    year: "2016",
    title: "Primary Education Completion (PEC)",
    description: "Laid the foundation of academic discipline and early literary interest.",
    icon: GraduationCap,
    highlight: "GPA-5 | Talent Pool Scholarship"
  },
  {
    year: "2019",
    title: "Junior School Certificate (JSC)",
    description: "Excellence in humanities and linguistic arts with top honors.",
    icon: BookOpen,
    highlight: "GPA-5 | Talent Pool Scholarship"
  },
  {
    year: "2022",
    title: "Secondary School Certificate (SSC)",
    description: "Achieved the 2nd position in the board with 1256 marks, bridging analytical logic with literature.",
    icon: Star,
    stats: "2nd in Board | 1256 Marks",
    highlight: "GPA-5 | Talent Pool Scholarship"
  },
  {
    year: "2024",
    title: "Higher Secondary Certificate (HSC)",
    description: "Continued academic excellence with top-tier results in the national board exams.",
    icon: Award,
    highlight: "GPA-5 | General Scholarship"
  },
  {
    year: "Present",
    title: "University of Dhaka",
    description: "1st Year Student in the Department of Bengali. Deepening exploration of linguistic evolution, classical prose, and literary synthesis.",
    icon: BookOpen,
    highlight: "Department of Bengali"
  }
];

export default function ScholarTimeline() {
  return (
    <section id="archive" className="py-24 editorial-grid">
      <div className="mb-20 space-y-4">
        <div className="flex items-center space-x-4">
           <div className="h-px bg-secondary w-12"></div>
           <span className="text-xs font-bold uppercase tracking-[0.4em] text-secondary">Academic Excellence</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-none uppercase">
          The Scholar&apos;s <br />
          <span className="text-secondary italic font-normal">Interactive Archive</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl font-body">
          A chronicled journey of academic rigor, from foundational talent pool scholarships to historic board achievements.
        </p>
      </div>

      <div className="relative vertical-line md:before:left-1/2 before:left-8 py-10 space-y-12">
        {achievements.map((item, idx) => (
          <div key={idx} className={cn(
            "relative flex flex-col md:flex-row items-start md:items-center w-full",
            idx % 2 === 0 ? "md:flex-row-reverse" : ""
          )}>
            <div className="hidden md:block w-1/2" />
            
            <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10 bg-background p-2 rounded-full border border-primary">
              <item.icon className="w-5 h-5 text-secondary" />
            </div>

            <div className={cn(
              "w-full md:w-1/2 pl-16 md:pl-0",
              idx % 2 === 0 ? "md:pr-16" : "md:pl-16"
            )}>
              <Card className="border-none bg-transparent shadow-none hover:bg-white/50 transition-colors duration-300">
                <CardContent className="p-4 md:p-8 space-y-3">
                  <span className="font-headline text-4xl md:text-5xl opacity-20 block">{item.year}</span>
                  <h3 className="text-2xl font-bold font-headline">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-body">
                    {item.description}
                  </p>
                  {item.stats && (
                    <div className="text-secondary font-black text-xl font-headline tracking-tighter">
                      {item.stats}
                    </div>
                  )}
                  {item.highlight && (
                    <Badge variant="outline" className="border-accent text-accent rounded-none uppercase px-3 py-1 text-[10px] tracking-widest font-bold">
                      {item.highlight}
                    </Badge>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
