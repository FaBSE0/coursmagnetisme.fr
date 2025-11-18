import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

type PageHeaderProps = {
  title: string;
  eyebrow?: string;
  description?: string;
  actions?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
};

export const PageHeader = ({
  title,
  eyebrow,
  description,
  actions,
  align = 'left',
  className
}: PageHeaderProps) => (
  <div
    className={cn(
      'container flex flex-col gap-6 py-16',
      align === 'center' && 'items-center text-center',
      className
    )}
  >
    <div className="space-y-4">
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary/70">{eyebrow}</p>
      )}
      <h1 className="font-display text-4xl font-semibold text-foreground">{title}</h1>
      {description && <p className="text-lg text-muted-foreground">{description}</p>}
    </div>
    {actions && <div className="flex flex-wrap items-center gap-4">{actions}</div>}
  </div>
);

