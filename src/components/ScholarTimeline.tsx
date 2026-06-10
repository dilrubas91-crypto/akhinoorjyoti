
"use client";

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Award, BookOpen, Star } from 'lucide-react';
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
      <div className="mb-20 space-y-6">
        <div className="flex items-center space-x-4">
           <div className="h-px bg-secondary w-16"></div>
           <span className="text-xs font-bold uppercase tracking-[0.4em] text-secondary">Academic Excellence</span>
        </div>
        <h2 className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tight leading-none uppercase">
          The Scholar&apos;s <br />
          <span className="text-secondary italic font-normal">Interactive Archive</span>
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl max-w-3xl font-body leading-relaxed">
          A chronicled journey of academic rigor, from foundational talent pool scholarships to historic board achievements.
        </p>
      </div>

      <div className="relative vertical-line before:left-8 sm:before:left-1/2 py-10 space-y-16">
        {achievements.map((item, idx) => (
          <div key={idx} className={cn(
            "relative flex flex-col sm:flex-row items-start sm:items-center w-full",
            idx % 2 === 0 ? "sm:flex-row-reverse" : ""
          )}>
            <div className="hidden sm:block w-1/2" />
            
            <div className="absolute left-8 sm:left-1/2 -translate-x-1/2 z-10 bg-background p-3 rounded-full border-2 border-primary shadow-xl">
              <item.icon className="w-6 h-6 text-secondary" />
            </div>

            <div className={cn(
              "w-full sm:w-1/2 pl-20 sm:pl-0",
              idx % 2 === 0 ? "sm:pr-16" : "sm:pl-16"
            )}>
              <Card className="border-none bg-white/40 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-500 border-l-4 border-l-secondary sm:border-l-0">
                <CardContent className="p-8 space-y-4">
                  <span className="font-headline text-5xl md:text-6xl opacity-10 block leading-none">{item.year}</span>
                  <h3 className="text-2xl md:text-3xl font-bold font-headline leading-tight">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-body text-base">
                    {item.description}
                  </p>
                  {item.stats && (
                    <div className="text-secondary font-black text-2xl font-headline tracking-tighter">
                      {item.stats}
                    </div>
                  )}
                  {item.highlight && (
                    <Badge variant="outline" className="border-accent text-accent rounded-none uppercase px-4 py-1.5 text-[10px] tracking-widest font-bold bg-accent/5">
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
