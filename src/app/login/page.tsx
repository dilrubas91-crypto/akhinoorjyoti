
"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Lock, Eye, EyeOff } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'admin@gmail.com' && password === '12345678') {
      localStorage.setItem('adminSession', 'true');
      router.push('/admin');
    } else {
      setError('Invalid identity credentials.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <Card className="w-full max-w-md bg-zinc-900 border-zinc-800 text-white rounded-none">
        <CardHeader className="space-y-4 text-center">
          <div className="mx-auto w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
            <Lock className="w-6 h-6 text-white" />
          </div>
          <CardTitle className="text-3xl font-headline font-black uppercase tracking-tighter">
            Admin <span className="text-secondary">Vault</span>
          </CardTitle>
          <p className="text-zinc-500 text-xs uppercase tracking-widest font-bold">
            Authorized Personnel Only
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Identity Email</label>
              <Input 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)}
                className="bg-black border-zinc-800 rounded-none focus:border-secondary text-white"
                required 
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Encryption Key</label>
              <div className="relative">
                <Input 
                  type={showPassword ? "text" : "password"} 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-black border-zinc-800 rounded-none focus:border-secondary text-white pr-10"
                  required 
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>
            {error && <p className="text-secondary text-xs font-bold uppercase tracking-wider">{error}</p>}
            <Button 
              type="submit" 
              className="w-full bg-secondary hover:bg-white hover:text-black transition-all rounded-none uppercase font-black tracking-widest py-6"
            >
              Initiate Access
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
