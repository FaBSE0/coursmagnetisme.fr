'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useState } from 'react';

import type { Testimonial } from '@/data/testimonials';
import { Button } from '@/components/ui/button';

type TestimonialsCarouselProps = {
  testimonials: Testimonial[];
};

export const TestimonialsCarousel = ({ testimonials }: TestimonialsCarouselProps) => {
  const [index, setIndex] = useState(0);
  const active = testimonials[index];

  const goTo = (direction: 'prev' | 'next') => {
    setIndex((current) => {
      if (direction === 'prev') {
        return current === 0 ? testimonials.length - 1 : current - 1;
      }
      return current === testimonials.length - 1 ? 0 : current + 1;
    });
  };

  return (
    <div className="grid gap-8 md:grid-cols-[2fr,1fr] md:items-center">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-card/80 p-10 shadow-lg">
        <Quote className="h-12 w-12 text-primary" aria-hidden="true" />
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={active.id}
            className="mt-6 text-2xl font-medium text-foreground"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            “{active.quote}”
          </motion.blockquote>
        </AnimatePresence>
        <div className="mt-6 text-sm text-muted-foreground">
          <p className="font-semibold text-foreground">{active.author}</p>
          <p>{active.role}</p>
        </div>
      </div>
      <div className="space-y-4 rounded-3xl border border-border bg-white/80 p-6 shadow-sm">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">Avis vérifiés</p>
        <p className="text-3xl font-semibold text-foreground">4,8/5</p>
        <p className="text-base text-muted-foreground">
          Note moyenne calculée sur les 50 derniers témoignages collectés auprès d’élèves certifiés.
        </p>
        <div className="flex gap-3">
          <Button variant="ghost" className="flex-1" onClick={() => goTo('prev')}>
            Précédent
          </Button>
          <Button className="flex-1" onClick={() => goTo('next')}>
            Suivant
          </Button>
        </div>
        <div className="flex gap-2">
          {testimonials.map((item, itemIndex) => (
            <span
              key={item.id}
              className={`h-2 flex-1 rounded-full ${
                itemIndex === index ? 'bg-primary' : 'bg-muted'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

