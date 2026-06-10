
"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload, LogOut, Image as ImageIcon, Trash2 } from 'lucide-react';

interface LocalImage {
  id: string;
  url: string;
  caption: string;
}

export default function AdminPage() {
  const router = useRouter();
  const [images, setImages] = useState<LocalImage[]>([]);
  const [caption, setCaption] = useState('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  useEffect(() => {
    const session = localStorage.getItem('adminSession');
    if (session !== 'true') {
      router.push('/login');
    }
    const saved = localStorage.getItem('localGallery');
    if (saved) {
      setImages(JSON.parse(saved));
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('adminSession');
    router.push('/');
  };

  const handleUpload = () => {
    if (!selectedFile || !caption) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      const newImage: LocalImage = {
        id: Date.now().toString(),
        url: base64String,
        caption: caption
      };
      const updated = [newImage, ...images];
      setImages(updated);
      localStorage.setItem('localGallery', JSON.stringify(updated));
      setCaption('');
      setSelectedFile(null);
      alert('Upload Successful to Local Archive.');
    };
    reader.readAsDataURL(selectedFile);
  };

  const deleteImage = (id: string) => {
    const updated = images.filter(img => img.id !== id);
    setImages(updated);
    localStorage.setItem('localGallery', JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <header className="flex justify-between items-center border-b border-zinc-800 pb-8">
          <div>
            <h1 className="text-4xl font-headline font-black uppercase tracking-tighter">Content <span className="text-secondary">Dashboard</span></h1>
            <p className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest mt-2">Archive Management Unit</p>
          </div>
          <Button onClick={handleLogout} variant="destructive" className="rounded-none uppercase tracking-widest font-black text-xs">
            <LogOut className="w-4 h-4 mr-2" /> End Session
          </Button>
        </header>

        <div className="grid md:grid-cols-3 gap-12">
          <Card className="bg-zinc-900 border-zinc-800 rounded-none h-fit">
            <CardHeader>
              <CardTitle className="text-xl font-headline text-white uppercase tracking-tight flex items-center">
                <Upload className="w-5 h-5 mr-3 text-secondary" /> New Upload
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Source File</label>
                <input 
                  type="file" 
                  accept="image/*"
                  onChange={(e) => setSelectedFile(e.target.files?.[0] || null)}
                  className="w-full text-xs text-zinc-500 file:mr-4 file:py-2 file:px-4 file:rounded-none file:border-0 file:text-xs file:font-black file:bg-secondary file:text-white hover:file:bg-white hover:file:text-black"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Contextual Caption</label>
                <Textarea 
                  value={caption} 
                  onChange={(e) => setCaption(e.target.value)}
                  placeholder="Describe the aesthetic narrative..."
                  className="bg-black border-zinc-800 rounded-none focus:border-secondary text-white min-h-[100px]"
                />
              </div>
              <Button onClick={handleUpload} className="w-full bg-secondary hover:bg-white hover:text-black transition-all rounded-none uppercase font-black tracking-widest">
                Commit to Archive
              </Button>
            </CardContent>
          </Card>

          <div className="md:col-span-2 space-y-8">
            <h2 className="text-2xl font-headline font-black uppercase tracking-tighter border-l-4 border-secondary pl-6">Active Local Archive</h2>
            {images.length === 0 ? (
              <div className="py-20 border-2 border-dashed border-zinc-800 flex flex-col items-center justify-center text-zinc-600">
                <ImageIcon className="w-12 h-12 mb-4 opacity-20" />
                <p className="font-headline italic">No local assets found in this session.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-6">
                {images.map(img => (
                  <div key={img.id} className="group relative aspect-[3/4] bg-zinc-900 border border-zinc-800 overflow-hidden">
                    <img src={img.url} alt={img.caption} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                      <p className="text-xs font-body italic text-white mb-4">{img.caption}</p>
                      <Button 
                        onClick={() => deleteImage(img.id)}
                        variant="destructive" 
                        size="icon" 
                        className="rounded-none self-end"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
