'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { logEvent } from '@/lib/analytics';
import { cn } from '@/lib/utils';

type LeadMagnetBannerProps = {
  title: string;
  description: string;
  benefits: string[];
  ctaLabel: string;
  successMessage: string;
};

export const LeadMagnetBanner = ({
  title,
  description,
  benefits,
  ctaLabel,
  successMessage
}: LeadMagnetBannerProps) => {
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email')?.toString() ?? '';
    if (!email.includes('@')) {
      return;
    }
    const emailDomain = email.split('@')[1] ?? 'unknown';
    setStatus('success');
    logEvent({ name: 'leadmagnet_submit', payload: { emailDomain } });
    event.currentTarget.reset();
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-r from-primary to-healing-500 p-8 text-white shadow-xl">
      <div className="grid gap-8 md:grid-cols-[2fr,3fr] md:items-center">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-white/80">Checklist exclusive</p>
          <h3 className="text-3xl font-semibold">{title}</h3>
          <p className="text-base text-white/90">{description}</p>
          <ul className="space-y-2 text-sm">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-white" aria-hidden="true" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
        <form
          className="rounded-2xl bg-white/10 p-6 backdrop-blur"
          onSubmit={handleSubmit}
          aria-live="polite"
        >
          <div className="space-y-4">
            <Input
              name="name"
              placeholder="Votre prénom"
              className="bg-white/20 text-white placeholder:text-white/60"
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="Votre email"
              className="bg-white/20 text-white placeholder:text-white/60"
              required
            />
            <Textarea
              name="objectif"
              placeholder="Quel est votre projet ?"
              className="bg-white/20 text-white placeholder:text-white/60"
              rows={3}
            />
            <Button
              type="submit"
              size="lg"
              className={cn(
                'w-full border border-white/40 bg-white/90 text-primary hover:bg-white',
                status === 'success' && 'bg-white text-primary'
              )}
            >
              {status === 'success' ? successMessage : ctaLabel}
            </Button>
          </div>
        </form>
      </div>
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/20 blur-3xl" aria-hidden />
    </div>
  );
};

