import type { LucideIcon } from 'lucide-react';
import { CheckCircle2, Shield, Sparkles } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  sparkles: Sparkles,
  shield: Shield,
  check: CheckCircle2
};

export type ValueGridItem = {
  title: string;
  description: string;
  icon?: keyof typeof iconMap;
};

type ValueGridProps = {
  items: ValueGridItem[];
};

export const ValueGrid = ({ items }: ValueGridProps) => (
  <div className="grid gap-6 md:grid-cols-3">
    {items.map((item) => {
      const Icon = item.icon ? iconMap[item.icon] : Sparkles;
      return (
        <article
          key={item.title}
          className="rounded-2xl border border-border bg-white/80 p-6 shadow-lg shadow-energy-500/5"
        >
          <Icon className="h-8 w-8 text-primary" aria-hidden="true" />
          <h3 className="mt-4 text-xl font-semibold text-foreground">{item.title}</h3>
          <p className="mt-2 text-base text-muted-foreground">{item.description}</p>
        </article>
      );
    })}
  </div>
);

