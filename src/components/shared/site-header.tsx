'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import type { NavigationLink } from '@/data/siteConfig';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/shared/logo';

type SiteHeaderProps = {
  navigation: NavigationLink[];
  ctaLabel: string;
};

export const SiteHeader = ({ navigation, ctaLabel }: SiteHeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between gap-6">
        <Logo />
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-muted-foreground hover:text-foreground">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild>
            <Link href="/formations">{ctaLabel}</Link>
          </Button>
        </div>
        <button
          type="button"
          className="md:hidden"
          aria-label="Ouvrir le menu"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {isOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="container flex flex-col gap-4 py-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base font-medium text-foreground"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Button asChild className="w-full">
              <Link href="/formations">{ctaLabel}</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

