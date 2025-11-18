import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

type SectionProps = {
  id?: string;
  kicker?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  eyebrow?: string;
  children: ReactNode;
  className?: string;
};

export const Section = ({
  id,
  kicker,
  title,
  description,
  align = 'left',
  children,
  className
}: SectionProps) => (
  <section id={id} className={cn('py-16 md:py-24', className)}>
    <div className={cn('container flex flex-col gap-8', align === 'center' && 'items-center text-center')}>
      <div className="max-w-2xl space-y-3">
        {kicker && <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">{kicker}</p>}
        <h2 className="font-display text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
          {title}
        </h2>
        {description && <p className="text-lg text-muted-foreground">{description}</p>}
      </div>
      {children}
    </div>
  </section>
);

