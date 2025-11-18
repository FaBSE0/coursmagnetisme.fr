'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';

const STORAGE_KEY = 'coursmagnetisme_consent';

export const ConsentBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      setVisible(true);
    }
  }, []);

  const updateConsent = (value: 'granted' | 'denied') => {
    window.localStorage.setItem(STORAGE_KEY, value);
    window.dispatchEvent(new CustomEvent('consentchange', { detail: value }));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-card/95 shadow-lg backdrop-blur">
      <div className="container flex flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-muted-foreground">
          Nous utilisons des cookies analytiques (GA4) pour comprendre l’audience. Vous pouvez refuser.{' '}
          <Link href="/politique-confidentialite" className="underline">
            En savoir plus
          </Link>
          .
        </p>
        <div className="flex gap-3">
          <Button variant="ghost" onClick={() => updateConsent('denied')}>
            Refuser
          </Button>
          <Button onClick={() => updateConsent('granted')}>Accepter</Button>
        </div>
      </div>
    </div>
  );
};

