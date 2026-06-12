"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ShieldCheck, Send } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  subject: z.string().min(5, { message: "Subject is required" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

export default function InquiryForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    alert("Inquiry secured in the vault. We will correspond shortly.");
  }

  return (
    <section id="vault" className="py-24 editorial-grid bg-accent text-white overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        <div className="space-y-8">
          <div className="inline-flex items-center space-x-3 text-white/60">
            <ShieldCheck className="w-5 h-5" />
            <span className="text-xs font-bold uppercase tracking-[0.3em]">Secure Correspondence</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-none uppercase">
            Engagement <br />
            <span className="text-secondary italic font-normal">& Inquiries Vault</span>
          </h2>
          <p className="text-white/70 text-lg font-body leading-relaxed">
            Professional modeling agency inquiries and visitor messages are processed through our high-fidelity encryption vault for secure long-term archival.
          </p>
          <div className="pt-6 md:pt-10 space-y-4">
            <div className="border-l-2 border-secondary pl-6">
              <p className="text-xs font-bold uppercase tracking-widest text-white/50 mb-1">Office Location</p>
              <p className="font-headline italic text-lg">Dhaka University Campus, Dhaka, BD</p>
            </div>
          </div>
        </div>

        <div className="bg-background text-foreground p-6 md:p-12 shadow-2xl">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-[10px] font-black tracking-widest opacity-60">Full Identity</FormLabel>
                      <FormControl>
                        <Input placeholder="E.g. Alexander Knight" className="rounded-none border-x-0 border-t-0 border-b border-primary/20 focus-visible:ring-0 focus-visible:border-secondary transition-all px-0" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="uppercase text-[10px] font-black tracking-widest opacity-60">Digital Address</FormLabel>
                      <FormControl>
                        <Input placeholder="name@agency.com" className="rounded-none border-x-0 border-t-0 border-b border-primary/20 focus-visible:ring-0 focus-visible:border-secondary transition-all px-0" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <FormField
                control={form.control}
                name="subject"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-[10px] font-black tracking-widest opacity-60">Inquiry Subject</FormLabel>
                    <FormControl>
                      <Input placeholder="Modeling Proposal / Academic Collab" className="rounded-none border-x-0 border-t-0 border-b border-primary/20 focus-visible:ring-0 focus-visible:border-secondary transition-all px-0" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="uppercase text-[10px] font-black tracking-widest opacity-60">Detailed Message</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Please specify terms..." className="min-h-[120px] rounded-none border border-primary/10 focus-visible:ring-0 focus-visible:border-secondary transition-all" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <button 
                type="submit"
                className="w-full bg-secondary text-white py-4 font-bold uppercase tracking-[0.4em] text-xs hover:bg-black transition-colors flex items-center justify-center space-x-3"
              >
                <span>Initialize Transmission</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
