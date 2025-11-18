'use client';

import type { FaqItem } from '@/data/faq';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

type FaqAccordionProps = {
  items: FaqItem[];
};

export const FaqAccordion = ({ items }: FaqAccordionProps) => (
  <Accordion type="single" collapsible className="w-full rounded-3xl border border-border bg-white/70 p-6">
    {items.map((item) => (
      <AccordionItem key={item.id} value={item.id}>
        <AccordionTrigger className="text-left text-lg font-semibold">
          {item.question}
        </AccordionTrigger>
        <AccordionContent className="text-base text-muted-foreground">{item.answer}</AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);

